import {classNames} from "../../../helpers/ClassNames/ClassNames.ts";
import cls from './LoginPage.module.scss'
import {MyInput} from "../../../components/MyInput/MyInput.tsx";
import {useTranslation} from "react-i18next";
import {authSlice} from "../../../store/reducer/AuthSlice.ts";
import {useAppDispath} from "../../../hooks/redux.ts";
import {Button} from "../../../components/MyButton/MyButton.tsx";
import {useInput} from "../../../hooks/useInput/useInput.tsx";
import {MySwitcherLang} from "../../../components/MySwitherLang/MySwitcherLang.tsx";
import {useAvatar} from "../../../hooks/useAvatar/useAvatar.tsx";
import {useEffect} from "react";

interface LoginPageProps {
    className?: string;
}

const LoginPage = ({className}: LoginPageProps) => {
    const {t} = useTranslation()
    const {authToggle} = authSlice.actions
    const dispath = useAppDispath()
    const {image, handleImageChange} = useAvatar({initialValue: null})


    const handleButtonClick = () => {
        dispath(authToggle());
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
            { login.isDirty && (
                <>
                    {[
                        {id: 'sdgsdfsd', error: login.minLengthError },
                        {id: 'fsdsfsfs', error: login.maxLengthError },
                    ].map(({id, error }) =>  <div key={id} style={{ color: 'red' }}>{error}</div>)}
                </>
            )}
            <MyInput
                className={cls.Input}
                onChange={e => login.onChange(e)}
                onBlur={e => login.onBlur(e)}
                value={login.value}
                type={'text'}
                placeholder={t('Логин')}
            />
            { password.isDirty && (
                <>
                    {[
                        { id: 'string', error: password.minLengthError },
                        { id: 'number', error: password.maxLengthError },
                        { id: 'number', error: password.passwordError },
                    ].map(({ id, error }, ) =>  <div key={id} style={{ color: 'red' }}>{error}</div>)}
                </>
            )}
            <MyInput
                className={cls.Input}
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
                value={password.value}
                type={'password'}
                placeholder={t('Введите пароль')}
            />

            {password.value !== passwordRepeat.value && (
                <div style={{ color: 'red' }}>
                    Неправильно
                </div>
            )}
            <MyInput
                className={cls.Input}
                onChange={e => passwordRepeat.onChange(e)}
                onBlur={e => passwordRepeat.onBlur(e)}
                value={passwordRepeat.value}
                type={'password'}
                placeholder={t('Повторите пароль')}
            />
            <div className={cls.Inner}>
                <MySwitcherLang/>
                    <Button
                        className={cls.Button}
                        onClick={handleButtonClick}
                    >{t('Войти')}</Button>
            </div>
        </form>
    );
};

export default LoginPage;



