import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from './reducer/AuthSlice.ts'
import {RehydrateAction} from "redux-persist/es/types";
import {weatherReducer} from "./reducer/WeatherSlice.ts";
import {airPollutionReducer} from "./reducer/WeatherAirPollution.ts";
import {cityReducer} from "./reducer/CitySlice.ts";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import {createLogger, ReduxLoggerOptions} from "redux-logger";


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

const options: ReduxLoggerOptions = {
    diff: true,
    collapsed: true,
};

const logger = createLogger(options);

const persistConfig = {
    key: "root",
    storage,
    version: 1,
    timeout: 3000,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(logger),
});

 export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export interface RehydrateAppAction extends RehydrateAction {
    payload?: RootState;
}
