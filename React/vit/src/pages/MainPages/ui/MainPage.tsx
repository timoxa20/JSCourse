import {Navbar} from "../../../components/Navbar/Navbar.tsx";
import cls from './MainPage.module.scss'
import {BoxWeather} from "../../../components/BoxWeather/BoxWeather.tsx";


const MainPage = () => {

    return (
        <div className={cls.MainPage}>
            <div>
                <Navbar/>
            </div>
            <div>
                <BoxWeather/>
            </div>
        </div>
    );
};

export default MainPage;