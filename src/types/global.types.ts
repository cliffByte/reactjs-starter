export enum Role {
  SUDO_ADMIN = 'SUDO_ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
  WARD_SUPER_ADMIN = 'WARD_SUPER_ADMIN',
  WARD_ADMIN = 'WARD_ADMIN',
  MUNICIPALITY_ADMIN = 'MUNICIPALITY_ADMIN',
}
export type LabelType = Record<string, Record<string, string>>

export type AuthType = {
  user: string
  setUser: React.Dispatch<React.SetStateAction<string>>
  rememberMe: string
  setRememberMe: React.Dispatch<React.SetStateAction<string>>
} | null

export enum LanguageEnum {
  en = 'en',
  ne = 'ne',
}

export type Language = keyof typeof LanguageEnum

export type LanguageType = {
  lang: LanguageEnum
  setLang: (lang: LanguageEnum) => void
}

export type AuthValues = {
  email: string
  password: string
  rememberMe?: boolean
}

export type SignUpValues = {
  firstName: string
  middleName?: string
  lastName: string
  email: string
  phoneNumber: string
  password: string
  confirmPassword: string
  termsAndCondition: boolean
}

export type FormErrors = Record<string, string>
