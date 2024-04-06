import {classNames} from "../../helpers/ClassNames/ClassNames.ts";
import cls from './MySwitcherLang.module.scss'
import {Button} from "../MyButton/MyButton.tsx";
import {useTranslation} from "react-i18next";

interface MySwitcherLangProps {
    className?: string;
}

export const MySwitcherLang = ({className}: MySwitcherLangProps) => {
    const {t, i18n} = useTranslation()
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            onClick={toggle}
            className={classNames(cls.MySwitcherLang, {}, [className])}>
            {t('Язык')}
        </Button>
    );
};



