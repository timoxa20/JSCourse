import cls from "../WeatherOneDayList/BoxWeather.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {fetchWeatherAirPollutionApi} from "../../api/WeatherApi/fetchWeather.ts";
import {FC, useEffect} from "react";
import {Loader} from "../Loader/Loader.tsx";
import {useTranslation} from "react-i18next";
import {IParams} from "../../@types/weather.ts";




export const AirPollution: FC<IParams> = ( ) => {
    const city = useAppSelector(state => state.auth.city);
    const weather = useAppSelector(state => state.weather);
    const airPollution = useAppSelector(state => state.airPollution);
    const dispatch = useAppDispatch();
    const {t} = useTranslation()
    console.log(weather)
    useEffect(() => {
        const params = {
            lat: weather.weather?.city.coord.lat,
            lon: weather.weather?.city.coord.lon,
            appid: '7e56ecfdfba4576dad0f22b5d28528d7',
            lang: t("ru"),
        };
        dispatch(fetchWeatherAirPollutionApi(params));
    }, [dispatch, t, city, weather.weather]);

    return (
            <div className={cls.BoxWeatherItem}>
                <span>
                    <div className={cls.Inner}>
                        {airPollution.loadState === 'firstLoad' && <Loader/>}
                        <p className={cls.City}>{airPollution.loadState === 'idle' && weather.weather?.city.name}</p>
                            <div>
                            {airPollution.loadState === 'idle' && airPollution?.airPollution?.list.map((elem, index) => (
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
    );
};
