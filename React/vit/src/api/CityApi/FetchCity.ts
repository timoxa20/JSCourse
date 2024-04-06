import {createAsyncThunk} from "@reduxjs/toolkit";
import {$apiCity} from "../api.ts";
import {City, ICityParams} from "../../@types/city.ts";

export const fetchCityApi = createAsyncThunk<City, ICityParams>(
    'city/fetchCityData',
    async (params) => {
        const response = await $apiCity.get('/city', {
            params: params,
            headers: { 'X-Api-Key': 'qBp16x6JNuuqybKVoQWFdQ==g593kyubtOmB5XnE' }
        });
        return response.data;
    }
)