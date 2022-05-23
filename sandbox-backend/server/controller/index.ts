import { create_sub_component, update_file, write_new_component } from './../helpers/file_helpers';
import  path  from 'path';
import { Request, Response } from "express";
import fs from "fs-extra";
import { Components, get_all_dirs } from '../helpers/get_all_dirs';

const base_path = path.resolve(`../sandbox/src/components`)
import _ from "lodash"




export const ping = (req: Request, res: Response) => {
    res.status(200).send({
        msg: "Ping Successful"
    })
}


export const create_new_category = (req: Request, res: Response) => {
    get_all_dirs().then((state)=>{
        var current_components = state.components.map((component)=>component.name)
        var body = req.body
        if(current_components.indexOf(body.new_component) == -1){
            var new_comp = path.resolve(`${base_path}/${body.new_component}`)
            fs.mkdir(new_comp).then(()=>{
                fs.writeJson(path.resolve(`${new_comp}/config.json`), {
                    title: body.new_component,
                    Icon: body.icon,
                    route: body.route
                }).then(()=>{
                    res.status(200).send({
                        msg: `${body.new_component} created successfully`
                    })
                }).catch((e)=>{
                    res.status(500).send({
                        Error: e || "Failed to write to config"
                    })
                })
            }).catch((e)=>{
                res.status(500).send({
                    Error: e || "Failed to write to config"
                })
            })
        }else{
            res.status(500).send({
                Error: "This Category already exists"
            })
        }
    }).catch((e)=>{
        res.status(500).send({
            Error: "An Error Occured"
        })
    })
    
}

export const create_new_component_file = (req: Request, res: Response) =>{
    var body = req.body;
    
    get_all_dirs().then((state)=>{
        console.log("Starting component creation", "Length", state.components.length)
        var chosen_component = state.components.filter(component=>component.name = body.category)
        if(chosen_component.length > 0){
            if(body.type == "file"){
                write_new_component(path.resolve(`${chosen_component[0].entry_file}/${_.capitalize(body.component)}.tsx`), _.capitalize(body.component)).then((n)=>{
                    if(n){
                        res.status(200).send({
                            Message: "Component Created Successfully"
                        })
                    }else{
                        res.status(500).send({
                            Error: "Unable to Create the file"
                        })
                    }
                }).catch((e)=>{
                    res.status(500).send({
                        Error: e || "Unable to Create the file"
                    })
                })
            }else{
                create_sub_component(path.resolve(`${chosen_component[0].entry_file}`), _.capitalize(body.component)).then((n)=>{
                    if(n){
                        res.status(200).send({
                            Message: "Component Created Successfully"
                        })
                    }else{
                        res.status(500).send({
                            Error: "Unable to Create the file"
                        })
                    }
                }).catch((e)=>{
                    res.status(500).send({
                        Error: e || "Unable to Create the file"
                    })
                })
            }
        }else{
            res.status(404).send({
                Error: "No such category exists, create one"
            })
        }
    }).catch((e)=>{
        res.status(500).send({
            Error:  "An error occured while creating the new component"
        })
    })
}

export const update_components = (req: Request, res: Response) =>{
    var body = req.body;
    var component_name = req.params.component_name;
    var category = req.params.category;
    var data = req.body.data;
    get_all_dirs().then((state)=>{
        var chosen_category = state.components.filter(c=>c.name == category)
        if(chosen_category.length > 0){
            var component = chosen_category[0].SubComponents.filter(sc=>sc.name == component_name)
            if(component.length > 0){
                    update_file(component[0].entry_file, data).then((r)=>{
                        res.status(200).send({
                            msg: "Updated file successfully"
                        })
                    }).catch((e)=>{
                        res.status(500).send({
                            Error: e || "An error occured"
                        })
                    })
               
            }else{
                res.status(200).send({
                    Error: "No Component with that name was found"
                })
            }
            
        }else{
            res.status(404).send({
                Error: "Category not found"
            })
        }
    }).catch((e)=>{
        res.status(500).send({
            Error: "An error occured while looping through the dirs"
        })
    })
}

export const fetch_component = (req: Request, res: Response)=>{
    var body = req.body;
    var component_name = req.params.component_name;
    var category = req.params.category;

    get_all_dirs().then((state)=>{
        var chosen_category = state.components.filter(c=>c.name == category)
        if(chosen_category.length > 0){
            var component = chosen_category[0].SubComponents.filter(c=>c.name == component_name)
            if(component.length > 0){
                fs.readFile(component[0].entry_file).then((data: Buffer)=>{
                    res.status(200).send({
                        data
                    })
                }).catch((e)=>{
                    res.status(500).send({
                        Error: e || "Unable to read the specified file"
                    })
                })
            }else{
                res.status(404).send({
                    Error: "Component not found"
                })
            }
        }else{
            res.status(404).send({
                Error: "Category not found"
            })
        }
    }).catch((e)=>{
        res.status(500).send({
            Error: "An error occured while looping through the dirs"
        })
    })
}

export const fetch_schema = (req: Request, res: Response) =>{
    get_all_dirs().then((state)=>{
        var schema = state.components.map((component)=>({
            name: component.name,
            icon: component.iconName,
            entry: component.entry_file,
            components: component.SubComponents.map((sub)=>({
                name: sub.name,
                file: sub.entry_file,
                data: sub.get_data()
            }))
        }))
        
        res.status(200).send({
            categories: schema,
        })
    }).catch((e)=>{
        res.status(500).send({
            Error:  "An error occured while looping through the dirs"
        })
    })
}