import React, {InputHTMLAttributes, useState} from "react";
import {IValidation, UseValidation, UseValidationResult} from "../useValidation/useValidation.tsx";

interface useInputResult extends UseValidationResult{
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
    isDirty: boolean,
    saveToLocalStorage?: (() => void) | undefined
}

interface useInputProps extends InputHTMLAttributes<HTMLInputElement> {
    initialValue: string;
    validations: IValidation
    saveToLocalStorage?: string
}

export const useInput = ({initialValue, validations,}: useInputProps): useInputResult => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false)
    const {
        minLengthError,
        maxLengthError,
        passwordError
    } = UseValidation({ value, validation: validations });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    // @ts-ignore
    const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDirty(!isDirty)
    }




    return {
        value,
        onChange,
        onBlur,
        isDirty,
        minLengthError,
        maxLengthError,
        passwordError,
    };
};


