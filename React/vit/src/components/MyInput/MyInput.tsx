import { classNames } from "../../helpers/ClassNames/ClassNames.ts";
import cls from './MyInput.module.scss';
import React, { InputHTMLAttributes } from "react";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    type: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
    accept?: string;
    error?: string;
}

export const MyInput = (props: MyInputProps) => {
    const {
        className,
        type,
        onChange,
        onBlur,
        value,
        placeholder,
        accept,
        error
    } = props;

    return (
        <div>
            {error && <div style={{color: 'red'}}>{error}</div>}

            <input
                onChange={onChange}
                onBlur={onBlur}
                className={classNames(cls.MyInput, {}, [className])}
                type={type}
                value={value}
                placeholder={placeholder}
                accept={accept}
            />
        </div>
    );
};
