import { Box, Button, Container, Divider, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Sandbox from '../SandBox'
import SideMenu from './SideMenu'
import { SubMenuRoutes } from './SideMenu/routes'
import TopBar from './TopBar'
import {Routes, Route} from "react-router"
import { BrowserRouter } from 'react-router-dom'
import { ArrowForward } from '@mui/icons-material'
import {css} from "@emotion/react"
import { useAppSelector } from '../redux/hooks'
import { get_schema } from '../data/get_data'

function Router() {
  const selected = useAppSelector((state)=>state.sandbox.bgColor)
  get_schema()
  return (
    <BrowserRouter>
    <Grid container height={"100vh"} overflow="hidden" bgcolor="#0F172A"  >
      
      <TopBar/>
      <Grid  height={"100%"} item xs={2}  >
        <SideMenu/>
      </Grid>
      <Grid direction="column" padding={"20px"} classes={css`
        overflow-y: scroll;
        ::-webkit-scrollbar{
          background: transparent;
          width: 5px;
        }
        ::-webkit-scrollbar-thumb{
          background: blue;
        }
      `} alignItems="center" justifyContent="flex-start" height="100%" item xs={10}>
        
        
          <Routes>
            <Route path="" element={<Sandbox/>} >
                {
                  SubMenuRoutes.map(
                    (main_route)=>(
                    main_route.SubRoutes.length == 0 ? (
                      <Route path={main_route.route} element={<Container  sx={{
                        width: "100%",
                        height: "100%"
                      }} >
                          <Typography variant="h4"  >
                              No {main_route.title} Component has been created
                          </Typography>
                      </Container>} />
                      ) : (main_route.SubRoutes.map((sub_route)=>(
                        <Route path={`/${main_route.route}/${sub_route.route}`} element={typeof sub_route.component != "undefined" ? <sub_route.component/> : <Container >
                          <Typography variant="h4"  >
                              No {sub_route.title} Component has been defined or linked
                          </Typography>
                        </Container> } />
                      )))
                    )
                  
                  )
                }
            </Route>
          </Routes>  
          
      </Grid>
    </Grid>
    </BrowserRouter>
  )
}

export default Router


const Containerz = styled(Container)`

`