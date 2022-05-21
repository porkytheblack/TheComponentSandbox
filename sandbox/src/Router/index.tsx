import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Sandbox from '../SandBox'
import SideMenu from './SideMenu'
import TopBar from './TopBar'

function Router() {
  return (
    <Grid container height={"100vh"} overflow="hidden" bgcolor="#0F172A"  >
      
      <TopBar/>
      <Grid  height={"100%"} item xs={2}  >
        <SideMenu/>
      </Grid>
      <Grid direction="row" padding={20} alignItems="center" justifyContent="center" height="100%" item xs={10}>
        <Sandbox/>
      </Grid>
    </Grid>
  )
}

export default Router


const Containerz = styled(Container)`

`