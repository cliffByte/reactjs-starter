import { createContext, useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
}
export const LanguageContext = createContext<any>(null)

const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState(localStorage.getItem('planning__lang') ?? 'ne')

  useEffect(() => {
    localStorage.setItem('planning__lang', language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ lang: language, setLang: setLanguage }}>{children}</LanguageContext.Provider>
  )
}

export default LanguageProvider
