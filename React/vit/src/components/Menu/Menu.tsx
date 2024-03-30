import {classNames} from "../../helpers/ClassNames/ClassNames.ts";
import cls from './Menu.module.scss'
import {MySwitherTheme} from "../MySwitcherTheme/MySwitherTheme.tsx";
import {MySwitcherLang} from "../MySwitherLang/MySwitcherLang.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

interface MenuProps {
    className?: string;
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>
}

export const Menu = ({className, active}: MenuProps) => {
    const [login, setLogin] = useState<string | null>(null);

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
                <MySwitherTheme/>
                <MySwitcherLang/>
            </div>
        </div>
    );
};



