import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locales/en/Translation.json';
import translationsInGerman from '../locales/de/Translation.json';
import translationsInRussian from '../locales/ru/Translation.json';


const resources = {
  en: {
    translation: translationsInEng
  },
  de: {
    translation: translationsInGerman
  },
  ru: {
    translation: translationsInRussian
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources, 
    lng: "en",  
    debug: true,
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false
    },
    ns: "translation", 
    defaultNS: "translation"
  });

export default i18n;

