import { Box, Button, Container, Divider, Grid, IconButton, Stack, TextField, Typography, CircularProgress } from '@mui/material'
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
import {get_schema, SubmenuRoute} from "../data/get_data"
import {useQuery} from "react-query"



function Router() {

  const categories_query = useQuery("fetch-categories", get_schema)


  const selected = useAppSelector((state)=>state.sandbox.bgColor)
  get_schema().then((data)=>{
    console.log(data)
  }).catch((e)=>{
    console.log(e)
  })

  if(categories_query.isLoading) return (
    <Grid container alignItems="center" direction="column" justifyContent="center" height={"100vh"} overflow="hidden" bgcolor="#0F172A"  >
        <Typography color="secondary" variant="h4" >
          The Component Sandbox 
        </Typography>
        <CircularProgress color="secondary" sx={{
          height: "100px",  
          width: "100px"
        }} />
    </Grid>
  )

  if(categories_query.isError) return (
    <Grid container height={"100vh"} alignItems="center" justifyContent="center" overflow="hidden" bgcolor="#0F172A"  >
        <Typography variant='h6'color="primary" >
          An Error Occured while fetching the data
        </Typography>
    </Grid>
  )


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
                  categories_query.data.data.categories.map(
                    (main_route: SubmenuRoute)=>(
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