import { types } from "../types/types"

export const activeFlight = (fid) => ({
    type: types.activeFlight,
    payload : fid
    
})
export const removeFlight = (fid) => ({
    type: types.removeFlight,
    payload : fid
    
})
export const addFlight = (fid) => ({
    type: types.addFlight,
    payload : {
        fid: fid,
        points: [],
        active: true
    }
    
})
export const addNewPointToFlight = (fid,point) => ({
    type: types.addNewPointToFlight,
    payload : {
        fid: fid,
        points: point
    }
    
})