import {  Box, Container, Grid, Stack  } from '@mui/material'
import { grey } from '@mui/material/colors'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import SideMenu from './SideMenu'
import TopBar from './TopBar'


function Router() {
  
  return (
       <Box bgcolor={grey[900]} flexDirection={"column"}  height="100vh" width="100wh" alignItems="center" justifyContent={"flex-start"} >
        <TopBar/>
        <BrowserRouter>
          <Box flexDirection="row" className="flex flex-row!" alignItems={"flex-start"} justifyContent="flex-start" >
            <SideMenu/>
            <Box sx={{
              width: "80%",
            }} className="flex flex-col! bg-yellow-500 items-center justify-start h-full " ></Box>
          </Box>
        </BrowserRouter>
      </Box>
   
  )
}

export default Router


const Containerz = styled(Container)`

`