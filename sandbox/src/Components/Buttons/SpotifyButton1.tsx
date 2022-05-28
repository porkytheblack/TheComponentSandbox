import styled from '@emotion/styled'
import { Button } from '@mui/material'
import "@fontsource/montserrat"
import React from 'react'
//1ed760
export function SpotifyButton1() {
  return (
    <CustomButton disableFocusRipple={true}  >
        Premium
    </CustomButton>
  )      
}



const CustomButton = styled(Button)`
    color: white;
    :hover{
        background: none;
        color: #1ed760 !important;
        font-family: "Montserrat";
        fontSize: 16px;
    }
`


