import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from 'react-native';
import en from './en';
import ar from './ar';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';



const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

// Initialize RTL settings
I18nManager.allowRTL(true);
I18nManager.forceRTL(false); // Set to false for English (LTR)

i18n
  .use(initReactI18next)
  .init({
    resources,
    // defult languge is English
    lng: "en", 
    // Fallback to English if translation is missing
    fallbackLng: "en", 
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false
    }
  });

  export const changeLanguage = async (lng) => {
    await AsyncStorage.setItem('lang', lng);
    i18n.changeLanguage(lng).then(() => {
      I18nManager.allowRTL(lng === 'ar');
      I18nManager.forceRTL(lng === 'ar');
      RNRestart.Restart();
    });
  };

export default i18n;
