import { TextIncreaseOutlined } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Typography } from '@mui/material'
import React from 'react'

function SideMenu() {
  return (
    <MenuList >
        <Typography variant="h5" color="white" align='center' >
            Components
        </Typography>
        <MenuItem  >
            <ListItemButton sx={{
            background: "#334155"
        }}  >
                <ListItemIcon>
                    <TextIncreaseOutlined sx={{
                        color: "#5d6c83"
                    }} />
                </ListItemIcon>
                <ListItemText>
                    <Typography color="white" variant="button"  >
                        Text
                    </Typography>
                </ListItemText>
            </ListItemButton>
            
        </MenuItem>
    </MenuList>
  )
}

export default SideMenu