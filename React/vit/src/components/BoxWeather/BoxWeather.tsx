import {useEffect, useState} from "react";
import axios from "axios";
import cls from './BoxWeather.module.scss'
import {useAppSelector} from "../../hooks/redux.ts";
import {useTranslation} from "react-i18next";
import useDebounce from "../../hooks/useDebounce/useDebounce.tsx";
import {Loader} from "../Loader/Loader.tsx";


interface ICoord {
    lat: number;
    lon: number;
}

interface City {
    id: number
    name: string
    country: string
    coord: ICoord
}

interface Main {
    temp_kf: number
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string
}


interface ListItem {
    dt_txt: number;
    weather: Weather[];
    main: Main
}

interface DataProps {
    city: City
    list: ListItem[]
}

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

interface AirPollution {
    list: AirPollutionData[]
}

export const BoxWeather = () => {
    const [data, setData] = useState<DataProps | null>(null)
    const [data2, setData2] = useState<AirPollution | null>(null);
    const [weatherForFiveDays, setweatherForFiveDays] = useState<DataProps | null>(null);
    const path = 'http://api.openweathermap.org/data/2.5'
    const {t} = useTranslation()
    const [isLoading, setIsLoading] = useState(false);
    const city = useAppSelector(state => state.authReducer.city)

    const fetchData = async () => {
        try {
            const response = await axios.get(`${path}/forecast?q=${city}&lat=55.7522&lon=37.6156&cnt=1&lang=${t('ru')}&appid=7e56ecfdfba4576dad0f22b5d28528d7`);
            setData(response.data);

            const weatherFiveDays = await axios.get(`${path}/forecast?lat=${response.data.city.coord.lat}&lon=${response.data.city.coord.lon}&lang=${t('ru')}&appid=7e56ecfdfba4576dad0f22b5d28528d7`);
            setweatherForFiveDays(weatherFiveDays.data);


            const airPollution = await axios.get(`${path}/air_pollution?lat=${response.data.city.coord.lat}&lon=${response.data.city.coord.lon}&appid=7e56ecfdfba4576dad0f22b5d28528d7`);
            setData2(airPollution.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
        }
    };

    const debounceWeather = useDebounce(fetchData, 3000)

    useEffect(() => {
        setIsLoading(true);
        // @ts-ignore
        debounceWeather();
    }, [city, t, data, data2]);

    useEffect(() => {
        setIsLoading(false);
    }, [data, data2]);
    return (
        <div className={cls.BoxWeather}>
            {isLoading ? (
                <Loader/>
            ) : (
                <>
                    <div className={cls.BoxWeatherItem}>
                            <span>
                                <div className={cls.InnerFive}>
                                   {weatherForFiveDays?.list
                                       .filter((_, index) => [1, 8, 16, 24, 32]
                                           .includes(index))
                                       .map((elem, index) => (
                                           <div key={index}>
                                               {elem.weather.map((e) => (
                                                   <div key={e.id}>
                                                       <img src={`http://openweathermap.org/img/wn/${e.icon}.png`}
                                                            alt="Weather Icon"/>
                                                       <p>{e.description}</p>
                                                       <p>{e.main}</p>
                                                   </div>
                                               ))}
                                               <p>{elem.dt_txt}</p>
                                               <p>{elem.main.temp_kf}</p>
                                           </div>
                                       ))}
                                </div>
                            </span>
                    </div>
                    <div className={cls.BoxWeatherItem}>
                <span>
                    <div className={cls.Inner}>
                        <p className={cls.City}> {data?.city.name}</p>
                    <div> {data2?.list.map((elem, index) => (
                        <div key={index}>
                            <p>CO: {elem.components.co}, </p>
                            <p>no2: {elem.components.no2}, </p>
                            <p>nh3: {elem.components.nh3}, </p>
                            <p>o3: {elem.components.o3}, </p>
                            <p>so2: {elem.components.so2}, </p>
                            <p>pm2_5: {elem.components.pm2_5}, </p>
                            <p>pm10: {elem.components.pm10}, </p>
                            <p>no: {elem.components.no}</p>
                        </div>
                    ))}
                    </div>
                    </div>
                    </span>
                    </div>
                    <div className={cls.BoxWeatherItem}>
                    <span>
                        <div className={cls.Inner}>
                           {data?.list.map((elem, index) => (
                               <div key={index}>
                                   {elem.weather.map((e) => (
                                       <div key={e.id}>
                                           <img src={`http://openweathermap.org/img/wn/${e.icon}.png`}
                                                alt="Weather Icon"/>
                                           <p>{e.description}</p>
                                           <p>{e.main}</p>
                                       </div>
                                   ))}
                                   <p>{elem.dt_txt}</p>
                                   <p>{elem.main.temp_kf}</p>
                               </div>
                           ))}
                        </div>
                    </span>
                    </div>
                </>
            )}
        </div>)
}



