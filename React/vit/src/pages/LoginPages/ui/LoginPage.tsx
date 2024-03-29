import {classNames} from "../../../helpers/ClassNames/ClassNames.ts";
import cls from './LoginPage.module.scss'
import {MyInput} from "../../../components/MyInput/MyInput.tsx";
import {useTranslation} from "react-i18next";
import {authSlice} from "../../../store/reducer/AuthSlice.ts";
import {useAppDispath} from "../../../hooks/redux.ts";
import {Button} from "../../../components/MyButton/MyButton.tsx";
import {useInput} from "../../../hooks/useInput/useInput.tsx";
import {MySwitcherLang} from "../../../components/MySwitherLang/MySwitcherLang.tsx";
import {useState} from "react";

interface LoginPageProps {
    className?: string;
}

const LoginPage = ({className}: LoginPageProps) => {
    const {t} = useTranslation()
    const {authToggle} = authSlice.actions
    const dispath = useAppDispath()
    const [image, setImage] = useState(null);


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
    const passwordRepeat = useInput(
        {
            initialValue: '',
            validations: {
                isEmpty: true,
                minLength: 5,
                maxLength: 13,
                isPassword: true
            }
        })

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
            { email.isDirty && (
                <>
                    {[
                        { error: email.isEmpty },
                        { error: email.minLengthError },
                        { error: email.maxLengthError },
                        { error: email.emailError },
                    ].map(({ error }) =>  <div style={{ color: 'red' }}>{error}</div>)}
                </>
            )}
            <MyInput
                className={cls.Input}
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                value={email.value}
                type={'text'}
                placeholder={t('Введите email')}
            />
            { password.isDirty && (
                <>
                    {[
                        { error: password.isEmpty },
                        { error: password.minLengthError },
                        { error: password.maxLengthError },
                        { error: password.passwordError },
                    ].map(({ error }) =>  <div style={{ color: 'red' }}>{error}</div>)}
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
                        disabled={!email.inputValid || !password.inputValid || !passwordRepeat.inputValid}
                        className={cls.Button}
                        onClick={handleButtonClick}
                    >{t('Войти')}</Button>
            </div>
        </form>
    );
};

export default LoginPage;



