import { create_new_category, create_new_component_file, fetch_component, fetch_schema, update_components } from './../controller/index';
import { Router } from "express";
import { ping } from "../controller";


const router = Router()

//ping the server
router.get("/", ping)
//new dir
router.post("/categories", create_new_category)
//new component file
router.post("/components", create_new_component_file)
//update component
router.put("/components/:category/:component_name", update_components)
//fetch file data in component
router.get("/components/:category/:component_name", fetch_component )
//route
router.get("/schema", fetch_schema)


module.exports = router