import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fr from "./locales/fr/translation.json";
import ru from "./locales/ru/translation.json";

i18n
  .use(LanguageDetector) // détecte + mémorise la langue
  .use(initReactI18next) // branche i18next à React
  .init({
    resources: {
      fr: { translation: fr },
      ru: { translation: ru }
    },
    fallbackLng: "fr",
    supportedLngs: ["fr", "ru"],

    // Détection: on veut prioriser le choix utilisateur, puis navigateur
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "lang"
    },

    interpolation: {
      escapeValue: false // React échappe déjà
    }
  });

export default i18n;
