import { LanguageEnum } from '@type/global.types'
import { createContext, useEffect, useState, ReactNode } from 'react'

// Define the properties that can be passed to the LanguageProvider component.
interface LanguageProviderProps {
  children: ReactNode // The content to be wrapped by the LanguageProvider.
}

// Create a context to manage language settings.
export const LanguageContext = createContext<{
  lang: LanguageEnum
  setLang: (lang: LanguageEnum) => void
}>({
  lang: LanguageEnum.en,
  setLang: () => {
    return
  },
})

// A component to provide and manage language settings.
const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Initialize the language state with a default value from local storage or 'en'.
  const [language, setLanguage] = useState<LanguageEnum>(
    (localStorage.getItem('cliff__lang') as LanguageEnum) || LanguageEnum.en
  )

  // Update local storage whenever the language state changes.
  useEffect(() => {
    localStorage.setItem('cliff__lang', language)
  }, [language])

  return (
    // Provide the language state and setter function to child components.
    <LanguageContext.Provider value={{ lang: language, setLang: setLanguage }}>{children}</LanguageContext.Provider>
  )
}

export default LanguageProvider
