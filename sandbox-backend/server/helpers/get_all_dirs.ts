import  path  from 'path';
import fs from "fs-extra"

const base_path = path.resolve(`../sandbox/src/Components`)

interface stateObject {
    components: Components[]
}

interface np {
    state: stateObject
}


export class Component {
    name: string;
    iconName: string;
    entry_file: string;
    private data: Buffer;
    constructor(nm: string, iconName: string, entry: string){
        this.name = nm;
        this.iconName= iconName;
        this.entry_file = entry;
    }
    set_data(dt: Buffer){
        this.data = dt;
    }
    get_data(): Buffer {
        return this.data;
    }
}

export class Components extends Component {
    SubComponents: Component[] = [];
    constructor(nm: string, icon: string, entry: string){
        super(nm, icon, entry)
    }
    add_component(nm: string, entry: string){
        this.SubComponents.push(new Component(nm, this.iconName, entry))
    }
}


export const get_all_dirs = async (): Promise<stateObject> =>{
    let st: np = {
        state: {
            components: []
        }
    }
    
    const components_path =  path.resolve(`../sandbox/src/components`)
    return new Promise(async (res, rej)=>{

        var dirs: string[] = fs.readdirSync(components_path)
        dirs.forEach(async (sub_dir: string)=>{
            var config: string = path.resolve(`${components_path}/${sub_dir}/config.json`)
            var data = fs.readFileSync(config)
            var component_details = JSON.parse(data.toString())
            var vals: string[] = Object.values(component_details)
            st.state.components.push(new Components(vals[0], vals[1], config.replace("\config.json", "")))

            
        }) 
       
        st.state.components.forEach((component)=>{
            var sub_dirs_and_files = fs.readdirSync(component.entry_file)
            sub_dirs_and_files.forEach((f)=>{
                var pth= path.resolve(`${component.entry_file}/${f}`)
		if(f != "index.ts"){
                if(fs.existsSync(pth) && fs.lstatSync(pth).isFile()){
                    if(f != "config.json"){
                        st.state.components[st.state.components.indexOf(component)].add_component(f, pth)
                        var data = fs.readFileSync(component.SubComponents[component.SubComponents.length-1].entry_file)
                        st.state.components[st.state.components.indexOf(component)].SubComponents[component.SubComponents.length-1].set_data(data)
                        
                    }
                }else{
                    st.state.components[st.state.components.indexOf(component)].add_component(f, path.resolve(`${pth}/Index.tsx`))
                    var data = fs.readFileSync(component.SubComponents[component.SubComponents.length-1].entry_file)
                    component.SubComponents[component.SubComponents.length-1].set_data(data)
                }
		}
            })        
        })

        
        res(st.state)
    })
    
}
