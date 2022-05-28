import React from 'react'
import styled from "@emotion/styled"
import {Typography} from "@mui/material"

export function Text1() {
  return (
    <TextContainer variant='h4' >
        Test Text
    </TextContainer>
  )
}


const TextContainer = styled(Typography)`
    padding: 5px 10px;
    border: 1px solid yellow;
    border-radius: 4px;
`