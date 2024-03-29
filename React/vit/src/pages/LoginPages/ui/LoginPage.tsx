import {classNames} from "../../../helpers/ClassNames/ClassNames.ts";
import cls from './LoginPage.module.scss'
import {MyInput} from "../../../components/MyInput/MyInput.tsx";
import {useTranslation} from "react-i18next";
import {authSlice} from "../../../store/reducer/AuthSlice.ts";
import {useAppDispath} from "../../../hooks/redux.ts";
import {Button} from "../../../components/MyButton/MyButton.tsx";
import {useInput} from "../../../hooks/useInput/useInput.tsx";
import {MySwitcherLang} from "../../../components/MySwitherLang/MySwitcherLang.tsx";
import { useState} from "react";

interface LoginPageProps {
    className?: string;
}

const LoginPage = ({className}: LoginPageProps) => {
    const {t} = useTranslation()
    const {authToggle} = authSlice.actions
    const dispath = useAppDispath()
    const handleButtonClick = () => {
        dispath(authToggle());
    };
    const email = useInput(
        {
            initialValue: '',
            validations: {
                isEmpty: true,
                minLength: 4,
                isEmail: true,
                maxLength: 13,
            }
        });
    const password = useInput(
        {
            initialValue: '',
            validations: {
                isEmpty: true,
                minLength: 5,
                maxLength: 13,
                isPassword: true
            }
        })
    const [image, setImage] = useState(null);

    // @ts-ignore
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };


    return (
        <form className={classNames(cls.LoginPage, {}, [className])}>
                {image
                    ?
                    <div className={cls.InputContainerNone}>
                    <img className={cls.InputContainerImg} src={URL.createObjectURL(image)} alt="Uploaded"/>
                    </div>
                    : <div className={cls.InputContainer}>
                    <input
                    className={cls.InputFile}
                    type="file"
                    onChange={handleImageChange}
                />
                    </div>
                }
            {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Пустая </div>}
            {(email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>мало </div>}
            {(email.isDirty && email.maxLengthError) && <div style={{color: 'red'}}>много </div>}
            {(email.isDirty && email.emailError) && <div style={{color: 'red'}}>reg </div>}
            <MyInput
                className={cls.Input}
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                value={email.value}
                type={'text'}
                placeholder={t('Введите email')}
            />
            {(password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>Пустая </div>}
            {(password.isDirty && password.minLengthError) && <div style={{color: 'red'}}>мало </div>}
            {(password.isDirty && password.maxLengthError) && <div style={{color: 'red'}}>много </div>}
            {(password.isDirty && password.passwordError) && <div style={{color: 'red'}}>reg </div>}
            <MyInput
                className={cls.Input}
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
                value={password.value}
                type={'password'}
                placeholder={t('Введите пароль')}
            />
            <div className={cls.Inner}>
                <MySwitcherLang/>
                <Button className={cls.Button} onClick={handleButtonClick}>{t('Войти')}</Button>
            </div>
        </form>
    );
};

export default LoginPage;



