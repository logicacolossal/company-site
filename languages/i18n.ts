import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import enJson from "./locales/en.json";
import ptBrJson from "./locales/pt-br.json";
import ptPtJson from "./locales/pt-pt.json";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: enJson,
      "pt-BR": ptBrJson,
      "pt-PT": ptPtJson,
    },
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
