import { LanguageEnum, type LabelType } from '@type/global.types'
import * as Yup from 'yup'

// Helper function to create a Yup schema for a number field
export function createNumberSchema(requiredMessage: LabelType): Yup.NumberSchema<number | null> {
  return Yup.number()
    .required(requiredMessage)
    .transform((value) => (Number.isNaN(value) ? null : value) as number)
}

export function createNumberOptionalSchema(): Yup.NumberSchema<number | null | undefined> {
  return Yup.number()
    .optional()
    .transform((value) => (Number.isNaN(value) ? null : value) as number)
}

export const getMultiLanguageMessage = (lang: LanguageEnum, messages: Record<LanguageEnum, string>) =>
  messages[lang] || 'Invalid input'
