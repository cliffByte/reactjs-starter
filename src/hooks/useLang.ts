import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";

const useLang = () => useContext(LanguageContext);

export default useLang;
