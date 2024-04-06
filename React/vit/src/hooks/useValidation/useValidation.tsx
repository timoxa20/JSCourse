import { useEffect, useState } from "react";

export interface IValidation {
    minLength?: number;
    maxLength?: number;
    isEmail?: boolean;
    isPassword?: boolean;
}

 interface useValidationProps {
    value: string;
    validation: IValidation;
}

export interface useValidationResult {
    minLengthError: null | string;
    maxLengthError?:null | string;
    passwordError?: null | string;
    inputValid?: boolean
}

export const useValidation = ({ value, validation }: useValidationProps): useValidationResult => {
    const [minLengthError, setMinLengthError] = useState<string | null>(null);
    const [maxLengthError, setMaxLengthError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

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



    return {
        minLengthError,
        maxLengthError,
        passwordError,
    };
};
