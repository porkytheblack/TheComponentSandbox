import styled from '@emotion/styled'
import { Button, Container, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Outlet, Router, Routes } from 'react-router'
import { change_bg } from '../redux/actions/sandbox.actions'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

function Sandbox() {
  const dispatch = useAppDispatch()
  const selected = useAppSelector((state)=>state.sandbox.bgColor)
  const [chosen_color, set_chosen_color] = useState<string>("")
  useEffect(()=>{
    set_chosen_color(selected)
    console.log(selected)
  }, [])
  const change_color = () =>{
    dispatch(change_bg(chosen_color))
  }
  return (
    <Grid container direction="column" >
        <Grid direction="column" sx={{
          marginBottom: "20px"
        }} >  
          <Typography  color="white" variant="overline" >
            Sandbox Controls
          </Typography>
          <Divider color='white'  />
          <Grid sx={{
              width: "100%",
              marginTop: "10px"
            }} direction="row" >
              <Grid item xs={4} direction="column" flexDirection="column" >
                <Stack direction="column" >
                  <Typography color="white" variant="overline" >
                    Sandbox Background
                  </Typography>
                  <TextField  value={chosen_color} onChange={(e)=>{
                    set_chosen_color(e.target.value)
                  }} InputProps={{
                    color: "primary"
                  }} InputLabelProps={{
                      
                    }} size='small' sx={{
                      color: "white",
                      width: "250px"
                    }} variant="outlined" id="color" 
                    label="Sandbox Background Color"  />
                </Stack>
                  <Button onClick={()=>{
                    change_color()
                  }} variant="contained" sx={{
                    marginTop: "10px"
                  }} component="span" >
                    CHANGE
                  </Button>
                  
              </Grid>
            </Grid>
        </Grid> 
        <Containera background={selected}   sx={{
            width: "100%",
            height: "350px",
        }} >
            <Outlet/>
        </Containera>
    </Grid>
    
  )
}

export default Sandbox

const Containera = styled(Container)<{background: string}>`
    background-color: ${({background}: {background: string})=> background};
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`