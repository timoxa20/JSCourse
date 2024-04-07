import cls from "./BoxWeather.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {fetchWeatherApi} from "../../api/WeatherApi/fetchWeather.ts";
import {FC, useEffect} from "react";
import {Loader} from "../Loader/Loader.tsx";
import {useTranslation} from "react-i18next";
import {IParams} from "../../@types/weather.ts";


export const WeatherOneDayList: FC<IParams> = ( ) => {
    const city = useAppSelector(state => state.auth.city);
    const weather = useAppSelector(state => state.weather);
    const dispatch = useAppDispatch();
    const {t} = useTranslation()
    useEffect(() => {
        const params = {
            q:  city,
            appid: '7e56ecfdfba4576dad0f22b5d28528d7',
            lang: t("ru"),
        };
        if (city.trim() !== '') {
            dispatch(fetchWeatherApi(params));

        }
    }, [dispatch, t, city]);

    return (
            <div className={cls.BoxWeatherItem}>
                <span>
                    <div className={cls.InnerFive}>
                        {weather.loadState === 'firstLoad' && <p><Loader/></p>}
                        {weather.loadState === 'idle' && weather.weather?.list
                            .slice(0, 1)
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
    );
};
