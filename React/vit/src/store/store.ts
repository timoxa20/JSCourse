import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from './reducer/AuthSlice.ts'
import {RehydrateAction} from "redux-persist/es/types";
import {weatherReducer} from "./reducer/WeatherSlice.ts";
import {airPollutionReducer} from "./reducer/WeatherAirPollution.ts";
import {cityReducer} from "./reducer/CitySlice.ts";


const rootReducer = combineReducers({
    auth: authReducer,
    weather: weatherReducer,
    airPollution: airPollutionReducer,
    city: cityReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export interface RehydrateAppAction extends RehydrateAction {
    payload?: RootState;
}
