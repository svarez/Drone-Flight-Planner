import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { drawFlight } from '../helpers/drawLines'

import { addNewPointToFlight } from '../actions/flights'

import { Box } from '@mui/system'
import { Toolbar, Typography } from '@mui/material'

export const MapScreen = () => {

    const canvasRef = useRef()
    const containerRef = useRef()
    
    const dispatch = useDispatch()

    const [canvas, setCanvas] = useState([])
    const [context, setContext] = useState([])
    const [points, setPoints] = useState([])

    
    const { flights } = useSelector(state => state)

    const activeFlightFid = flights.filter(({active})=>active)[0] ? flights.filter(({active})=>active)[0].fid : null
   
    // initialize the canvas
    useEffect(() => {  

        setCanvas(canvasRef.current)

    }, [canvasRef]) 

    // initialize the canvas context
    useEffect(() => {  
        
        if(canvas === canvasRef.current) {
            canvas.width = containerRef.current.offsetWidth
            canvas.height = window.innerHeight
            setContext(canvas.getContext('2d'))
        }

    }, [canvas]) 

    // drawFlight after get canvas context
    useEffect(() => {  
        
        if(context && context.canvas) {

            context.clearRect(0, 0, canvas.width, canvas.height)

            flights.filter(({active})=>active).map(({points})=>{

                return drawFlight(context, points, { color: 'red' })

            })
            
        }

    }, [context, flights, canvas.width, canvas.height]) 
    

    const handleClick = (e) => {
        
        // Get the target
        const { target } = e

        // Get the bounding rectangle of target
        const rect = target.getBoundingClientRect()

        // Mouse position
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        setPoints([...points,{x,y}])
        
        if(context && context.canvas) {
                
                const activeFlightPoints = flights.filter(({active})=>active).map(({points})=>points)[0]
                
                dispatch( addNewPointToFlight(activeFlightFid, {x,y}) )
                drawFlight(context, [...activeFlightPoints,{x,y}], { color: 'red' })

        }
        
    }
 
    return (
        <Box 
            className="boxMap"
            ref={ containerRef } 
            component="main" 
            sx={{ flexGrow: 1 }}
        >
        <Toolbar />
            <Typography
                variant="h4"
                sx={{
                    position: 'absolute',
                    margin: 1
                }}
            >
                { activeFlightFid && `F-${activeFlightFid}` }
            </Typography>
            <canvas 
                onClick={handleClick} 
                ref={canvasRef}
            ></canvas>
        </Box>
    );
}