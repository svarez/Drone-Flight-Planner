import { createStore, combineReducers } from "redux"
import { flightsReducer } from "../reducers/flightsReducer"

const reducers = combineReducers({
    flights: flightsReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)