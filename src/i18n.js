import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arTranslation from './locales/ar.json';
import enTranslation from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: arTranslation },
      en: { translation: enTranslation }
    },
    lng: 'ar',
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

// Handle document direction and lang on language change
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;
