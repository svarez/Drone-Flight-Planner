// draw multiples lines
export const drawFlight = (context, ListOfPoints, style = {}) => {

    let prevPoint = []

    ListOfPoints.map(point=> {

        const {x, y} = prevPoint && prevPoint
        const {x:x1, y:y1} = point
        prevPoint = point

        return (prevPoint.x ? drawLine(context, {x,y,x1,y1}, style) : null)

    })


}


// draw a line
export const drawLine = (context, info, style = {}) => {

    const { x, y, x1, y1 } = info
    const { color = 'black', width = 2 } = style

    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(x1, y1)
    context.strokeStyle = color
    context.lineWidth = width
    context.stroke()
}