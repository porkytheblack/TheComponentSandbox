import { TextIncreaseOutlined } from '@mui/icons-material'
import { Menu } from 'antd'
import {Typography} from "@mui/material"
import {TextFields} from "@mui/icons-material"
import React from 'react'
import styled from 'styled-components'
import {  RouteDef, SubmenuRoute, SubMenuRoutes } from './routes'
import { useNavigate } from 'react-router'

function SideMenu() {

    const navigate = useNavigate()
    

  return (
    <CustomMenu mode="inline" title='Components' theme="dark"  >
            {
                SubMenuRoutes.map((route: SubmenuRoute, index: number)=>(
                    <Menu.SubMenu onTitleClick={()=>{
                        navigate(route.route)
                    }} key={route.title} icon={
                        <route.Icon color='primary' sx={{
                            fontSize: 50
                        }} />
                    } title={
                        <Typography color="white" variant="h5" >
                            {route.title}
                        </Typography>
                    } >
                        {
                            route.SubRoutes.map((sub_route: RouteDef)=>(
                                <Menu.Item  onMouseDown={()=>{
                                    navigate(`${route.route}/${sub_route.route}`)
                                }} title={sub_route.title} icon={
                                    <sub_route.Icon color="primary" sx={{
                                        fontSize: 50
                                    }} />
                                } >
                                    <Typography color="white" variant="button" >
                                        {sub_route.title}
                                    </Typography>
                                </Menu.Item>
                            ))
                        }
                    </Menu.SubMenu>
                ))
            }
            
    </CustomMenu>
  )
}

export default SideMenu

const CustomMenu = styled(Menu)`
    height: 100%;
    .MuiSvgIcon-root{
        height: 24px !important;
        width: 24px !important;
    }
`

