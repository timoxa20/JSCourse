import {LoadState} from "../utils/LoadState.tsx";
import {createSlice} from "@reduxjs/toolkit";
import {REHYDRATE} from "redux-persist";
import {RehydrateAppAction} from "../store.ts";
import {City} from "../../@types/city.ts";
import {fetchCityApi} from "../../api/CityApi/FetchCity.ts";

export interface cityState {
    city:  null | City ;
    loadState: LoadState;
    error: unknown;
}

export const cityInitialState: cityState = {
    city: null,
    loadState: LoadState.needLoad,
    error: null
};

export const citySlice = createSlice({
    name: 'citySlice',
    initialState : cityInitialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(REHYDRATE, rehydrate)
            .addCase(fetchCityApi.pending, fetchCityApiPending)
            .addCase(fetchCityApi.fulfilled, fetchCityApiSuccess)
            .addCase(fetchCityApi.rejected, fetchCityApiFailed)
    },
})

const rehydrate = (state: cityState, rehydrateParams: RehydrateAppAction) => {
    return {
        ...state,
        ...(rehydrateParams.payload?.city || {}),
        loadState: LoadState.idle,
    };
};

const fetchCityApiPending = (state: cityState) => {
    return {
        ...state,
        loadState: LoadState.firstLoad,
    };
};

const fetchCityApiSuccess = (state: cityState, action: { payload: City}) => {
    return {
        ...state,
        loadState: LoadState.idle,
        city: action.payload
    };
};

const fetchCityApiFailed = (state: cityState) => {
    return {
        ...state,
        loadState: LoadState.error,
        error: { code: "Bipbip" },
    };
};


export const {reducer: cityReducer} = citySlice;