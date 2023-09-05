import * as Yup from 'yup'

// Helper function to create a Yup schema for a number field
export function createNumberSchema(requiredMessage: any) {
  return Yup.number()
    .required(requiredMessage)
    .transform((value) => (Number.isNaN(value) ? null : value))
}

export function createNumberOptionalSchema() {
  return Yup.number()
    .optional()
    .transform((value) => (Number.isNaN(value) ? null : value))
}
