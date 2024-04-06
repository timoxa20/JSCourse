import {City} from "./city.ts";

interface Components {
    co: number
    nh3: number
    no: number
    no2: number
    o3: number
    pm2_5: number
    pm10: number
    so2: number
}

interface AirPollutionData {
    components: Components;
}
export interface AirPollution {
    list: AirPollutionData[]
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string
}

interface Main {
    temp_kf: number
}

interface ListWeather {
    dt_txt: number;
    weather: Weather[];
    main: Main
}
export interface DataProps {
    city: City
    list: ListWeather[]
}

export interface IParams {
    q?: string;
    cnt?: number;
    appid?: string;
    lang?: string;
    lon?: number;
    lat?: number
}