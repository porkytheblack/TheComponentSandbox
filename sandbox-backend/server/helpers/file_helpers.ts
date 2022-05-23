import  fs  from 'fs-extra';
import path from 'path';
import _ from 'lodash';

export const write_new_component = (pth: string, component_name: string): Promise<Boolean> =>{
    return new Promise<Boolean>((res, rej) => {
        fs.writeFile(pth, `import React from 'react'

function ${component_name}() {
    return (
                <div> ${component_name} </div>
            )
}
            
export default ${component_name}

//Boilerplate by Don 😁
        `).then(()=>{
            res(true)
        }).catch((e)=>{
            rej(e)
        })
    })
    
}

export const create_sub_component = (pth: string, component_name: string): Promise<Boolean> => {
    var _pth: string = `${pth}/${_.capitalize(component_name)}`
    
    return new Promise<Boolean>((res, rej)=>{
        fs.mkdir(path.resolve(_pth)).then(()=>{
            fs.writeFile(path.resolve(`${_pth}/Index.tsx`), `import React from 'react'

function ${component_name}() {
    return (
        <div> ${component_name} </div>
            )
}
                
export default ${component_name}

//Boilerplate by Don 😁
            `).then(()=>{
                res(true)
            }).catch((e)=>{
                rej(e)
            })
        }).catch((e)=>{
            rej(e)
        })
    })
}

export const update_file = (pth: string, data: Buffer): Promise<Boolean>=>{
    return new Promise<Boolean>((res, rej)=>{
        fs.writeFile(pth, data.toString()).then(()=>{
            res(true)
        }).catch((e)=>{
            rej(e)
        })
    })
    
}

