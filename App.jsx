import React, { useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/languages/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
export default function App() {

  // get language from Async memory
  useEffect(() => {
    const setInitialLanguage = async () => {
      const lang = await AsyncStorage.getItem('lang');
      if (lang) {
        await i18n.changeLanguage(lang);
        I18nManager.allowRTL(lang === 'ar');
        I18nManager.forceRTL(lang === 'ar');
      }
    };
    setInitialLanguage();
  }, []);

  // app
  return (
    <I18nextProvider i18n={i18n}>
      <AppNavigator />
    </I18nextProvider>
  );
}
