import cls from "../WeatherOneDayList/BoxWeather.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {FC, useEffect} from "react";
import {Loader} from "../Loader/Loader.tsx";
import {useTranslation} from "react-i18next";
import {IParams} from "../../@types/weather.ts";


export const WeatherFiveDayList: FC<IParams> = () => {
    const city = useAppSelector(state => state.city.city);
    const weather = useAppSelector(state => state.weather);
    const dispatch = useAppDispatch();
    const {t} = useTranslation()
    useEffect(() => {

    }, [dispatch, t, city]);

    return (
        <div className={cls.BoxWeatherItem}>
                <span>
                    <div className={cls.InnerFive}>
                        {weather.loadState === 'firstLoad' && <p><Loader/></p>}
                        {weather.loadState === 'idle' && weather.weather?.list
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
    );
};
