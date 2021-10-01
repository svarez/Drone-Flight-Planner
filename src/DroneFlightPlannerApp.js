import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'

import { ListOfFlights } from './components/ListOfFlights'
import { MapScreen } from './components/MapScreen'
import { Box } from '@mui/system'
import { AppBar, Toolbar, Typography } from '@mui/material'

export const DroneFlightPlannerApp = () => {
    return (
        <Provider store={store}>
                <Box sx={{ display: 'flex' }}>
                    <AppBar>
                        <Toolbar>
                            <Typography variant="h6" noWrap component="div">
                                Drone Flight Planner App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <ListOfFlights />
                    <MapScreen />
                </Box>
        </Provider>
    )
}
