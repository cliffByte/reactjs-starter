import { useContext } from 'react'

import { LanguageContext } from '@contexts/Language'
const useLang = () => useContext<any>(LanguageContext)

export default useLang
