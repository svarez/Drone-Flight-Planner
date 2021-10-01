import { types } from "../types/types"
import { initialState } from "../helpers/initialState"

export const flightsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.addFlight:
            const { fid, points } = action.payload
            return [
                ...state,
                {fid, points}
            ]
        case types.activeFlight:
            return state.map(
                    flight => {

                    flight.active = flight.fid === action.payload
                    ?  true : false

                    return flight}
                )
        case types.removeFlight:
            return state.filter(
                flight => flight.fid !== action.payload
            )
        case types.addNewPointToFlight:
            return state.map(
                        flight => {

                        flight.points = flight.fid === action.payload.fid
                        ?  [...flight.points, action.payload.points] : flight.points

                        return flight}
                    )
    
        default:
            return state;
    }

}