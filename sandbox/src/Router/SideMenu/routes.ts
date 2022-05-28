import { Input, ListAlt, RadioButtonChecked, TextFields } from "@mui/icons-material";
import { ContainerTypeMap, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactComponentElement, ReactElement, ReactNode } from "react";
import {Container} from "@mui/material"
import * as Texts from "../../Components/Texts"
import * as MButtons from "../../Components/Buttons"

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

var Text: SubmenuRoute = new SubmenuRoute("Text", "text", TextFields)
Text.add_route("Text1", "Text1", Texts.Text1)
var Buttons: SubmenuRoute = new SubmenuRoute("Buttons", "buttons", RadioButtonChecked)
Buttons.add_route("SpotifyButton1", "SpotifyButton1", MButtons.SpotifyButton1)
var Containers: SubmenuRoute = new SubmenuRoute("Containers", "containers", ListAlt)
var Inputs: SubmenuRoute = new SubmenuRoute("Inputs", "inputs", Input)


export const SubMenuRoutes: SubmenuRoute[] = [
    Text,
    Buttons,
    Containers,
    Inputs
]
