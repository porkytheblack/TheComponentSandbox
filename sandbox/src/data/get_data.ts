import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactElement } from 'react';
import axios from 'axios'
import * as MIcons from "@mui/icons-material"


interface SComponent {
    name: string,
    file: string,
    data: Buffer
}

interface Category {
    name: string,
    icon: string,
    entry: string,
    components: SComponent[]
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


export const base_url = "http://localhost:4000"
export const get_schema = () =>{
    axios.get(`${base_url}/schema`).then((res)=>{
        var sub_menu_routes: SubmenuRoute[] = []
        var data: Category[] = res.data.categories
        data.forEach((category, index: number)=>{
            sub_menu_routes.push(new SubmenuRoute(category.name,  category.name.toLocaleLowerCase() , require(`@mui/icons-material/${category.icon}`) ))
            category.components.forEach((sub)=>{
                sub_menu_routes[index].add_route(sub.name, sub.name.toLocaleLowerCase(), require(sub.file))
            })
            console.log(sub_menu_routes)
        })
        
    }).catch((e)=>{
        console.log(e)
    })
}