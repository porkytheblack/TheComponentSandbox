import React from "react"


export const LoadIcon = ({icon, className}:{icon: string, className?: string}): React.CElement<any, any> =>{
    var resolved = require(`@mui/icons-material/${icon}`).default
    if(resolved){
        return React.createElement(resolved, {className: typeof className == "string" ? className : ""})
    }else{
        return React.createElement(require(`@mui/icons-material/Circle`).default, {className: typeof className == "string" ? className : ""})
    }
    
}