import {createSlice} from "@reduxjs/toolkit";
import {DataProps} from "../../@types/weather.ts";
import {REHYDRATE} from 'redux-persist'
import { fetchWeatherApi} from "../../api/WeatherApi/fetchWeather.ts";
import {RehydrateAppAction} from "../store.ts";
import {LoadState} from "../utils/LoadState.tsx";

export interface WeatherState {
    weather: DataProps | null;
    loadState: LoadState;
    error: unknown;
}

export const weatherInitialState: WeatherState = {
    weather: null,
    loadState: LoadState.needLoad,
    error: null
};

export const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState : weatherInitialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(REHYDRATE, rehydrate)
            .addCase(fetchWeatherApi.pending, fetchWeatherApiPending)
            .addCase(fetchWeatherApi.fulfilled, fetchWeatherApiSuccess)
            .addCase(fetchWeatherApi.rejected, fetchWeatherApiFailed)
    },
})

const rehydrate = (state: WeatherState, rehydrateParams: RehydrateAppAction) => {
    return {
        ...state,
        ...(rehydrateParams.payload?.weather || {}),
        loadState: LoadState.idle,
    };
};

const fetchWeatherApiPending = (state: WeatherState) => {
    return {
        ...state,
        loadState: LoadState.firstLoad,
    };
};

const fetchWeatherApiSuccess = (state: WeatherState, action: { payload: DataProps }) => {
    return {
        ...state,
        loadState: LoadState.idle,
        weather: action.payload
    };
};

const fetchWeatherApiFailed = (state: WeatherState) => {
    return {
        ...state,
        loadState: LoadState.error,
        error: new Error("Bipbip"),
    };
};


export const {reducer: weatherReducer} = weatherSlice
