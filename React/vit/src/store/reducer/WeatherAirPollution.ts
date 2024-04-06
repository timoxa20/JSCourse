import {AirPollution} from "../../@types/weather.ts";
import {LoadState} from "../utils/LoadState.tsx";
import {createSlice} from "@reduxjs/toolkit";
import {REHYDRATE} from "redux-persist";
import {fetchWeatherAirPollutionApi} from "../../api/WeatherApi/fetchWeather.ts";
import {RehydrateAppAction} from "../store.ts";

export interface AirPollutionState {
    airPollution: AirPollution | null;
    loadState: LoadState;
    error: unknown;
}

export const weatherInitialState: AirPollutionState = {
    airPollution: null,
    loadState: LoadState.needLoad,
    error: null
};

export const airPollutionSlice = createSlice({
    name: 'airPollutionSlice',
    initialState : weatherInitialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(REHYDRATE, rehydrate)
            .addCase(fetchWeatherAirPollutionApi.pending, fetchWeatherAirPollutionApiPending)
            .addCase(fetchWeatherAirPollutionApi.fulfilled, fetchWeatherAirPollutionApiSuccess)
            .addCase(fetchWeatherAirPollutionApi.rejected, fetchWeatherAirPollutionApiFailed)
    },
})

const rehydrate = (state: AirPollutionState, rehydrateParams: RehydrateAppAction) => {
    return {
        ...state,
        ...(rehydrateParams.payload?.weather || {}),
        loadState: LoadState.idle,
    };
};

const fetchWeatherAirPollutionApiPending = (state: AirPollutionState) => {
    return {
        ...state,
        loadState: LoadState.firstLoad,
    };
};

const fetchWeatherAirPollutionApiSuccess = (state: AirPollutionState, action: { payload: AirPollution }) => {
    return {
        ...state,
        loadState: LoadState.idle,
        airPollution: action.payload
    };
};

const fetchWeatherAirPollutionApiFailed = (state: AirPollutionState) => {
    return {
        ...state,
        loadState: LoadState.error,
        error: { code: "Bipbip" },
    };
};


export const {reducer: airPollutionReducer} = airPollutionSlice;