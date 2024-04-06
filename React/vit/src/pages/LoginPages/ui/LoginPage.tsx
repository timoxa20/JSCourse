import {classNames} from "../../../helpers/ClassNames/ClassNames.ts";
import cls from './LoginPage.module.scss'
import {MyInput} from "../../../components/MyInput/MyInput.tsx";
import {useTranslation} from "react-i18next";
import {authSlice} from "../../../store/reducer/AuthSlice.ts";
import {useAppDispatch} from "../../../hooks/redux.ts";
import {Button} from "../../../components/MyButton/MyButton.tsx";
import {useInput} from "../../../hooks/useInput/useInput.tsx";
import {MySwitcherLang} from "../../../components/MySwitсherLang/MySwitcherLang.tsx";
import {useAvatar} from "../../../hooks/useAvatar/useAvatar.tsx";
import {useEffect, useState} from "react";

interface LoginPageProps {
    className?: string;
}

const LoginPage = ({className}: LoginPageProps) => {
    const {t} = useTranslation()
    const {authToggle} = authSlice.actions
    const dispath = useAppDispatch()
    const {image, handleImageChange} = useAvatar({initialValue: null})
    const [errorRepeatPassword, setErrorRepeatPassword] = useState('Неправильно')

    const [isFormValid, setIsFormValid] = useState(false);


    const handleButtonClick = () => {
        dispath(authToggle());
        localStorage.setItem('isLoggedIn', 'true');
    };

    const login = useInput(
        {
            initialValue: '',
            validations: {
                minLength: 4,
                isEmail: true,
                maxLength: 13,
            },
        });
    const password = useInput(
        {
            initialValue: '',
            validations: {
                minLength: 5,
                maxLength: 13,
                isPassword: true
            }
        })
    const passwordRepeat = useInput(
        {
            initialValue: '',
            validations: {
                minLength: 5,
                maxLength: 13,
                isPassword: true,
            }
        })
    const saveToLocalStorage = () => {
        localStorage.setItem("inputValue", login.value)
    }

    useEffect(() => {
        saveToLocalStorage();
    }, [login.value]);

    useEffect(() => {
        if (password.value !== passwordRepeat.value && passwordRepeat.value.length > 0) {
            setErrorRepeatPassword('Неправильно');
        } else {
            setErrorRepeatPassword('');
        }
    }, [password.value, passwordRepeat.value]);

    useEffect(() => {
        setIsFormValid(login.value !== '' && password.value !== '' && passwordRepeat.value !== '' && image !== null);
    }, [login.value, password.value, passwordRepeat.value, image]);

    return (
        <form className={classNames(cls.LoginPage, {}, [className])}>
            {image
                ?
                <div className={cls.InputContainerNone}>
                    <img
                        className={cls.InputContainerImg}
                        src={URL.createObjectURL(image)}
                        alt="Uploaded"/>
                </div>
                :
                <div className={cls.InputContainer}>
                    <input
                        className={cls.InputFile}
                        type="file"
                        onChange={handleImageChange}/>
                </div>
            }
            {login.isDirty && (
                <>
                    {[
                        {id: 'sdgsdfsd', error: login.minLengthError},
                        {id: 'fsdsfsfs', error: login.maxLengthError},
                    ].map(({id, error}) => <div key={id} style={{color: 'red'}}>{error}</div>)}
                </>
            )}
            <MyInput
                className={cls.Input}
                onChange={e => login.onChange(e)}
                onBlur={() => login.onBlur()}
                value={login.value}
                type={'text'}
                placeholder={t('Логин')}
            />
            {password.isDirty && (
                <>
                    {[
                        {id: 'string', error: password.minLengthError},
                        {id: 'number', error: password.maxLengthError},
                        {id: 'number', error: password.passwordError},
                    ].map(({id, error},) => <div key={id} style={{color: 'red'}}>{error}</div>)}
                </>
            )}
            <MyInput
                className={cls.Input}
                onChange={e => password.onChange(e)}
                onBlur={() => password.onBlur()}
                value={password.value}
                type={'password'}
                placeholder={t('Введите пароль')}
            />
            {errorRepeatPassword && <div style={{ color: 'red' }}>{errorRepeatPassword}</div>}
            <MyInput
                className={cls.Input}
                onChange={e => passwordRepeat.onChange(e)}
                onBlur={() => passwordRepeat.onBlur()}
                value={passwordRepeat.value}
                type={'password'}
                placeholder={t('Повторите пароль')}
            />
            <div className={cls.Inner}>
                <MySwitcherLang/>
                <Button
                    disabled={!isFormValid}
                    className={cls.Button}
                    onClick={handleButtonClick}
                >{t('Войти')}</Button>
            </div>
        </form>
    );
};

export default LoginPage;



