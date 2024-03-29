import { useEffect, useState } from "react";

export interface IValidation {
    isEmpty?: boolean;
    minLength?: number;
    maxLength?: number;
    isEmail?: boolean;
    isPassword?: boolean;
}

 interface UseValidationProps {
    value: string;
    validation: IValidation;
}

export interface UseValidationResult {
    isEmpty: null | string;
    minLengthError: null | string;
    maxLengthError?:null | string;
    emailError?: null | string;
    passwordError?: null | string;
    inputValid?: boolean
}

export const UseValidation = ({ value, validation }: UseValidationProps): UseValidationResult => {
    const [isEmpty, setIsEmpty] = useState<string | null>(null);
    const [minLengthError, setMinLengthError] = useState<string | null>(null);
    const [maxLengthError, setMaxLengthError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const key in validation) {
            if (Object.prototype.hasOwnProperty.call(validation, key)) {
                switch (key) {
                    case 'minLength':
                        setMinLengthError(value.length < validation[key]! ? "мало" : null)
                        break;
                    case 'isEmpty':
                        value ? setIsEmpty(null) : setIsEmpty('Пустая строка');
                        break;
                    case 'maxLength':
                        value.length > validation[key]!
                            ? setMaxLengthError("Много")
                            : setMaxLengthError(null);
                        break;
                    case 'isEmail':
                        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                        re.test(String(value).toLowerCase()) ? setEmailError(null) : setEmailError("Некоректный email")
                        break;
                    case 'isPassword':
                        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/;
                        passwordRegex.test(value) ? setPasswordError(null) : setPasswordError("Проверьте правильность пароля");
                        break;
                }
            }
        }
    }, [value]);

    useEffect(() => {
        if(isEmpty || maxLengthError || minLengthError || emailError || passwordError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, maxLengthError, emailError, passwordError]);

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        passwordError,
        inputValid
    };
};
