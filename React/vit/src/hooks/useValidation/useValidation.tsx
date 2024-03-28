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
    isEmpty: boolean;
    minLengthError: boolean;
    maxLengthError?: boolean;
    emailError?: boolean;
    passwordError?: boolean
}

export const UseValidation = ({ value, validation }: UseValidationProps): UseValidationResult => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    useEffect(() => {
        for (const key in validation) {
            if (Object.prototype.hasOwnProperty.call(validation, key)) {
                switch (key) {
                    case 'minLength':
                        value.length < validation[key]!
                            ? setMinLengthError(true)
                            : setMinLengthError(false);
                        break;
                    case 'isEmpty':
                        value ? setIsEmpty(false) : setIsEmpty(true);
                        break;
                    case 'maxLength':
                        value.length > validation[key]!
                            ? setMaxLengthError(true)
                            : setMaxLengthError(false);
                        break;
                    case 'isEmail':
                        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                        re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                        break;
                    case 'isPassword':
                        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/;
                        passwordRegex.test(value) ? setPasswordError(false) : setPasswordError(true);
                        break;
                }
            }
        }
    }, [value]);

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        passwordError
    };
};
