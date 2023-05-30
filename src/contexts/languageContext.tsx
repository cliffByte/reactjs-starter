import { ReactNode, createContext, useEffect, useState } from "react";

export const LanguageContext = createContext<any>(null);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ lang: language, setLang: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
