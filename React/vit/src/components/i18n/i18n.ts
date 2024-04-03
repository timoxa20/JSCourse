import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationru from "../../public/locales/ru/ns1.json"
import translationen from "../../public/locales/en/ns1.json"

export const defaultNS = 'ns1';
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        defaultNS,
        debug: true,
        resources: {
            ru: {
                ns1: translationru
            },
            en: {
                ns1: translationen
            },
        },

        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;