import {classNames} from "../../helpers/ClassNames/ClassNames.ts";
import cls from './MyInput.module.scss';
import React, {InputHTMLAttributes} from "react";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    error?: string;
}

export const MyInput: React.FC<MyInputProps> = ({className, error, ...inputProps}) => {


    return (
        <div>
            {error && <div style={{color: 'red'}}>{error}</div>}

            <input
                {...inputProps}
                className={classNames(cls.MyInput, {}, [className])}
            />
        </div>
    );
};
