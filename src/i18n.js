import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import translationEN from "../public/locales/en/ common.json";
import translationRU from "../public/locales/ru/common.json";

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        returnEmptyString: false,
        debug: true,
        resources,
        fallbackLng: 'en',
    });

// i18n.services.formatter.add('DATE_LONG', (value, lng, _options) => {
//     return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
// });
i18n.changeLanguage('en')
export default i18n;