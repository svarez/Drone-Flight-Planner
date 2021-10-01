import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeFlight, addFlight, removeFlight } from '../actions/flights'

import { Box } from '@mui/system'
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Toolbar } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export const ListOfFlights = () => {

    
    const { flights } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleActiveFlight = (fid) => {
        return dispatch( activeFlight(fid) )
    }

    const handleRemoveFlight = (fid) => {
        return dispatch( removeFlight(fid) )
    }
    
    const handleAddFlight = () => {
        const fid = Date.now()
        dispatch( addFlight(fid) )
        return dispatch( activeFlight(fid) )
    }

    const drawerWidth = 240;

    return (
        
      <Drawer
        variant="permanent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            zIndex: 900,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List
                    sx={{ 
                        width: '100%', 
                        maxWidth: 360
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                        <h2>Flights</h2>
                        </ListSubheader>
                    }
                >
                <Divider />
                    
                    {flights.map(({fid, active}) => {

                        return (
                            <ListItem 
                                key={ fid }
                                secondaryAction={
                                        <IconButton 
                                            onClick={() => handleRemoveFlight(fid)}
                                            edge="end" 
                                            aria-label="delete"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                            >
                                <ListItemButton
                                    selected={ active }
                                    onClick={() => handleActiveFlight(fid)} 
                                >
                                    <ListItemText 
                                        primary={`F-${fid}`} 
                                    />
                                </ListItemButton>
                            </ListItem>
                            )

                    })}
                    <Divider />
                    <ListItem>
                        <ListItemButton
                            onClick={ handleAddFlight } 
                        >
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary="Add a new flight" 
                            />
                        </ListItemButton>

                    </ListItem>

                </List>
            </Box>
        </Drawer>
    )
}
