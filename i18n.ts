import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import faTranslation from './src/assets/locales/fa.json';
import enTranslation from './src/assets/locales/en.json';

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: (cb: any) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

export default i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'fa',
    debug: false,
    lng: 'fa',
    resources: {
      en: {
        translation: enTranslation,
      },
      fa: {
        translation: faTranslation,
      },
    },
  })
  .then(() => {
    // this called after the init finished
    i18next.services.pluralResolver.addRule('pl', {
      numbers: [1, 2, 3],
      plurals: function (n) {
        return Number(
          n === 1
            ? 0
            : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
            ? 1
            : 2,
        );
      },
    });
  })
  .catch(e => {
    console.error('asas', e);
  });
