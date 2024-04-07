import {createAsyncThunk} from "@reduxjs/toolkit";
import {$apiCity} from "../api.ts";
import {City, ICityParams} from "../../@types/city.ts";

export const fetchCityApi = createAsyncThunk<City, ICityParams>(
    'city/fetchCityData',
    async (params: ICityParams) => {
        const response = await $apiCity.get('/city', {
            params: params,
        });
        return response.data;
    }
)