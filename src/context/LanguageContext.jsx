import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../locales/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check if there's a stored preference, otherwise default to "es"
    return localStorage.getItem("app_lang") || "es";
  });

  useEffect(() => {
    localStorage.setItem("app_lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  const t = (keyStr) => {
    const keys = keyStr.split(".");
    let result = translations[language];
    for (const key of keys) {
      if (result[key] === undefined) {
        return keyStr;
      }
      result = result[key];
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
