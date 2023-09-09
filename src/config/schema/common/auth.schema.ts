import { getMultiLanguageMessage } from '@functions/yupSchema.extends.utils'
import { LanguageEnum } from '@type/global.types'

import * as Yup from 'yup'

export const loginSchema = (lang: LanguageEnum) => {
  const schema = Yup.object({
    email: Yup.string()
      .email(
        getMultiLanguageMessage(lang, {
          en: 'Please enter valid email',
          ne: 'कृपया मान्य इमेल लेख्नुहोस्',
        })
      )
      .required(
        getMultiLanguageMessage(lang, {
          en: 'Email is required',
          ne: 'इमेल आवश्यक छ',
        })
      ),
    password: Yup.string().required(
      getMultiLanguageMessage(lang, {
        en: 'Password is required',
        ne: 'पासवर्ड आवश्यक छ',
      })
    ),
    rememberMe: Yup.boolean().optional(),
  })

  return schema
}
