import {Navbar} from "../../../components/Navbar/Navbar.tsx";
import cls from './MainPage.module.scss'
import {WeatherOneDayList} from "../../../components/WeatherOneDayList/WeatherOneDayList.tsx";
import {AirPollution} from "../../../components/AirPollution/AirPollution.tsx";
import {WeatherFiveDayList} from "../../../components/WeatherFiveDayList/WeatherFiveDayList.tsx";


const MainPage = () => {

    return (
        <div className={cls.MainPage}>
            <div>
                <Navbar/>
            </div>
            <div  className={cls.BoxWeather}>
                <WeatherOneDayList />
                <AirPollution/>
                <WeatherFiveDayList/>
            </div>
        </div>
    );
};

export default MainPage;