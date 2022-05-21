import styled from '@emotion/styled'
import { Container } from '@mui/material'
import React from 'react'

function Sandbox() {
  return (
    <Containera  sx={{
        width: "100%",
        height: "100%"
    }} >
        
    </Containera>
  )
}

export default Sandbox

const Containera = styled(Container)`
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    padding: 20px;
`