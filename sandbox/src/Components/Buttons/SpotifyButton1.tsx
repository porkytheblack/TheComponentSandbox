import styled from '@emotion/styled'
import { Button } from '@mui/material'
import "@fontsource/montserrat"
import React from 'react'
//1ed760
function SpotifyButton1() {
  return (
    <CustomButton disableFocusRipple={true}  >
        Premium
    </CustomButton>
  )      
}

export default SpotifyButton1

const CustomButton = styled(Button)`
    color: white;
    :hover{
        background: none;
        color: #1ed760 !important;
        font-family: "Montserrat";
        fontSize: 16px;
    }
`