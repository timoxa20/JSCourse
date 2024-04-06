import {classNames} from "../../helpers/ClassNames/ClassNames.ts";
import cls from './Menu.module.scss'
import {MySwitcherTheme} from "../MySwitcherTheme/MySwitсherTheme.tsx";
import {MySwitcherLang} from "../MySwitсherLang/MySwitcherLang.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {authSlice} from "../../store/reducer/AuthSlice.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
import {Button} from "../MyButton/MyButton.tsx";

interface MenuProps {
    className?: string;
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>
}

export const Menu = ({className, active}: MenuProps) => {
    const [login, setLogin] = useState<string | null>(null);
    const {authToggle} = authSlice.actions
    const dispath = useAppDispatch()
    const handleButtonClick = () => {
        dispath(authToggle());
        localStorage.clear()
    };
    useEffect(() => {
        const fetchLogin = () => {
            const loginValue = localStorage.getItem('inputValue');
            setLogin(loginValue);
        };

        fetchLogin();
    }, []);

    const imgData = localStorage.getItem("imgData");


    return (
        <div className={classNames(cls.Menu, {}, [className])}>
            <div className={ active ? cls.MenuContent : cls.MenuContentActive}>
                    {imgData && (
                        <div className={cls.MenuImg}>
                            <img src={imgData} alt="Saved Image" />
                        </div>
                    )}
                <div className={cls.MenuLogin}>
                    {login}
                </div>
                <MySwitcherTheme/>
                <MySwitcherLang/>
                <Button className={cls.Button} onClick={handleButtonClick}>Выйти</Button>
            </div>
        </div>
    );
};



