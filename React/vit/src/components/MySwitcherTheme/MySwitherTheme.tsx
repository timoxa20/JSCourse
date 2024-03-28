/// <reference types="vite-plugin-svgr/client" />
import {classNames} from "../../helpers/ClassNames/ClassNames.ts";
import cls from './MySwitherTheme.module.scss'
import {Button} from '../MyButton/MyButton.tsx'
import {useTheme} from "../../hooks/useTheme/useTheme.tsx";
import {Theme} from "../ThemeContext/ThemeContext.tsx";
// @ts-ignore
import IconDark from '../../style/assets/moon.svg?react'
// @ts-ignore
import IconLight from '../../style/assets/sun.svg?react'



interface MySwitherProps {
    className?: string;
}

export const MySwitherTheme = ({className,}: MySwitherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            type={"button"}
            className={classNames(cls.MySwither, {}, [className, cls['active']])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                ? <IconLight className={cls.Sun}/>
                : <IconDark className={cls.Moon}/>
            }
        </Button>
    );
};







