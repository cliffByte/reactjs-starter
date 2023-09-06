import { useContext } from 'react'
import { type LanguageType } from '@type/global.types'

import { LanguageContext } from '@contexts/Language'
const useLang = () => useContext<LanguageType>(LanguageContext)

export default useLang
