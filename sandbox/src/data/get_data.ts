import { ReactElement } from 'react';
import axios from "axios"
import * as MUIicon from "@mui/icons-material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { SvgIconTypeMap } from "@mui/material"
import { QueryFunctionContext } from 'react-query';

export const base_url = "http://localhost:4000"

type MUIconKeys = keyof typeof MUIicon

export const GenerateMUIicon = (IconName: MUIconKeys, ) =>{
    const Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    } = MUIicon[IconName] 
    return Icon;
}

export class RouteDef {
    public title: string = "";
    public route: string = "";
    public component?: ()=>ReactElement<any, any>;
    public Icon: (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }) 
constructor(title: string, route: string, icon: any, component?: ()=>ReactElement<any, any> ) {
    this.title = title;
    this.route = route;
    this.Icon = icon;
    this.component =typeof component != "undefined" ? component : undefined
    console.log(this.component)
}
}

export class SubmenuRoute extends RouteDef {
SubRoutes: RouteDef[] = [];
constructor(title: string, route: string, icon: any){
    super(title, route, icon);
}
public add_route(title: string, route: string, component?: ()=> ReactElement<any, any>){
    this.SubRoutes.push(new RouteDef(title, route, this.Icon, component))
}      
}


interface s {
    categories: SubmenuRoute[]
}
interface d {
    name: string,
    file: string,
    icon: MUIconKeys,
    components: any[]
}

export const get_schema = (context?: QueryFunctionContext): Promise<any> =>{
    
    return new Promise<any>((res, rej)=>{
            axios.get(`${base_url}/schema`).then((resp)=>{
                var tiny: s = {
                    categories: []
                }
                resp.data.categories.forEach((category: d , index: number)=>{
                    tiny.categories.push(new SubmenuRoute(category.name, category.name.toLocaleLowerCase(), GenerateMUIicon(category.icon)))
                    category.components.forEach((comp: any, ind: number)=>{
            
                        tiny.categories[index].add_route(comp.name, comp.name.toLocaleLowerCase(), require(`../Components/${category.name}/index.ts`)[comp.name])
                    })
                })

                res({
                    data: tiny
                })
                console.log(resp.data)
            }).catch((e)=>{
                rej(e)
                console.log(e)
            })
    })
}

