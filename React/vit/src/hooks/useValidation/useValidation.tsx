import { useEffect, useState } from "react";

export interface IValidation {
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
    minLengthError: null | string;
    maxLengthError?:null | string;
    passwordError?: null | string;
    inputValid?: boolean
}

export const UseValidation = ({ value, validation }: UseValidationProps): UseValidationResult => {
    const [minLengthError, setMinLengthError] = useState<string | null>(null);
    const [maxLengthError, setMaxLengthError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const key in validation) {
            if (Object.prototype.hasOwnProperty.call(validation, key)) {
                switch (key) {
                    case 'minLength':
                        setMinLengthError(value.length < validation[key]! ? "мало" : null)
                        break;
                    case 'maxLength':
                        value.length > validation[key]!
                            ? setMaxLengthError("Много")
                            : setMaxLengthError(null);
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
        if(maxLengthError || minLengthError ||  passwordError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [minLengthError, maxLengthError, passwordError]);

    return {
        minLengthError,
        maxLengthError,
        passwordError,
        inputValid
    };
};
