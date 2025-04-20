import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { I18nManager } from 'react-native';

import en from './en';
import ar from './ar';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: "ar", // if you're using a language detector, do not define the lng option
    fallbackLng: "ar",
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false 
    }
  });

// Initialize RTL for Arabic
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export const changeLanguage = lng => {
  i18n.changeLanguage(lng);
  I18nManager.allowRTL(lng === 'ar');
  I18nManager.forceRTL(lng === 'ar');
};

export default i18n;
