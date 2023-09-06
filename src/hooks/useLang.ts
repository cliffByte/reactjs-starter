import { useContext } from 'react'
import { LanguageContext } from '@contexts/Language'
import { LanguageType } from '@type/global.types'

// A custom hook to access the language context value.
const useLang = () => {
  // Use the useContext hook to access the LanguageContext and obtain the language settings.
  // The return value of this hook is the current language settings.
  const contextValue = useContext(LanguageContext)

  if (!contextValue) {
    throw new Error('useLang must be used within a LanguageProvider')
  }

  // Convert the context value to the LanguageType
  const languageType: LanguageType = {
    lang: contextValue.lang,
    setLang: contextValue.setLang,
  }

  return languageType
}

export default useLang
