import styled from '@emotion/styled'
import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import "@fontsource/koulen"

import React from 'react'

function TopBar() {
  return (
    <AppBar sx={{
      height: "48px"
    }} color="primary" position="static">
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: '100%',
          height: "48px"
        }} >
          <Grid item sx={{
            width: 200,
            alignItems: "center",
            justifyContent: "center"
          }}   >
            <Button   variant="text" >
              <Typography variant="h5" align="center" fontFamily={"Koulen"} >
                The Sandbox
              </Typography>
            </Button>
          </Grid>
        </Box>
    </AppBar>
  )
}

export default TopBar

const CustomAppBar = styled(AppBar)`

`