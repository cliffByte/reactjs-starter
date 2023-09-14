import { authLabel } from '@data/localization/common/auth'
import { getMultiLanguageMessage } from '@functions/yupSchema.extends.utils'
import { BLOCK_LETTER, PASSWORD, PHONE_NUMBER } from '@regex/index'
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

export const signUpSchema = (lang: LanguageEnum) => {
  const schema = Yup.object({
    firstName: Yup.string()
      .required(
        getMultiLanguageMessage(lang, {
          en: 'First name is required',
          ne: 'पहिलो नाम आवश्यक छ',
        })
      )
      .test(
        'is-uppercase',
        getMultiLanguageMessage(lang, {
          en: 'Please enter in block letter',
          ne: 'कृपया ब्लक अक्षरमा लेख्नुहोस्',
        }),
        function (value) {
          if (!BLOCK_LETTER.test(value)) {
            return this.createError({
              path: 'firstName',
              message: getMultiLanguageMessage(lang, {
                en: 'First name must be in block letters',
                ne: 'पहिलो नाम ब्लक अक्षरमा हुनुपर्छ',
              }),
            })
          }
          return true
        }
      ),

    middleName: Yup.string().test(
      'is-uppercase',
      getMultiLanguageMessage(lang, {
        en: 'Please enter in block letter',
        ne: 'कृपया ब्लक अक्षरमा लेख्नुहोस्',
      }),
      function (value) {
        if (!value) return true
        return BLOCK_LETTER.test(value)
      }
    ),
    lastName: Yup.string()
      .required(
        getMultiLanguageMessage(lang, {
          en: 'Last name is required',
          ne: 'थर नाम आवश्यक छ',
        })
      )
      .test(
        'is-uppercase',
        getMultiLanguageMessage(lang, {
          en: 'Please enter in block letter',
          ne: 'कृपया ब्लक अक्षरमा लेख्नुहोस्',
        }),
        function (value) {
          if (!BLOCK_LETTER.test(value)) {
            return this.createError({
              path: 'lastName',
              message: getMultiLanguageMessage(lang, {
                en: 'Last name must be in block letters',
                ne: 'थर ब्लक अक्षरमा हुनुपर्छ',
              }),
            })
          }
          return true
        }
      ),

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
    phoneNumber: Yup.string()
      .matches(
        PHONE_NUMBER,
        getMultiLanguageMessage(lang, {
          en: 'Please enter valid phone number',
          ne: 'कृपया मान्य फोन नम्बर लेख्नुहोस्',
        })
      )
      .required(
        getMultiLanguageMessage(lang, {
          en: 'Phone number is required',
          ne: 'फोन नम्बर आवश्यक छ',
        })
      ),
    password: Yup.string()
      .matches(PASSWORD, getMultiLanguageMessage(lang, authLabel?.passwordSuggestion))
      .required(
        getMultiLanguageMessage(lang, {
          en: 'Password is required',
          ne: 'पासवर्ड आवश्यक छ',
        })
      ),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref('password')],
        getMultiLanguageMessage(lang, {
          en: 'Both password must be same',
          ne: 'दुबै पासवर्ड एउटै हुनुपर्छ',
        })
      )
      .required(
        getMultiLanguageMessage(lang, {
          en: 'Confirm password is required',
          ne: 'पासवर्ड आवश्यक छ',
        })
      ),
    termsAndCondition: Yup.boolean()
      .oneOf(
        [true],
        getMultiLanguageMessage(lang, {
          en: 'Please accept terms and condition',
          ne: 'कृपया नियम र शर्तहरू स्वीकार गर्नुहोस्',
        })
      )
      .required(
        getMultiLanguageMessage(lang, {
          en: 'Please accept terms and condition',
          ne: 'कृपया नियम र शर्तहरू स्वीकार गर्नुहोस्',
        })
      ),
  })

  return schema
}
