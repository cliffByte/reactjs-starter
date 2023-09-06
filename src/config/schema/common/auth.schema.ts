import * as Yup from 'yup'

export const loginSchema = Yup.object({
  email: Yup.string()
    .email({
      en: 'Email is required',
      ne: 'इमेल आवश्यक छ',
    })
    .required({
      en: 'Email is required',
      ne: 'इमेल आवश्यक छ',
    }),
  password: Yup.string().required({
    en: 'Password is required',
    ne: 'पासवर्ड आवश्यक छ',
  }),
  rememberMe: Yup.boolean().optional(),
})
