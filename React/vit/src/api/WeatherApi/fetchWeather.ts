import {createAsyncThunk} from "@reduxjs/toolkit";
import {$apiWeather} from "../api.ts";
import {AirPollution, DataProps, IParams} from "../../@types/weather.ts";


export const fetchWeatherApi = createAsyncThunk<DataProps, IParams>(
    'weather/fetchWeatherData',
    async (params: IParams) => {
        const response = await $apiWeather.get('/forecast', {params})
        return response.data
    }
)

export const fetchWeatherAirPollutionApi = createAsyncThunk<AirPollution, IParams>(
    'airPollution/fetchAirPollutionData',
    async (params: IParams) => {
        const response = await $apiWeather.get('/air_pollution', {params})
        return response.data
    }
)