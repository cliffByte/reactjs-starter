export const NEPALI_REGEX = /^[\u0900-\u097F\s]+$/
export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const BLOCK_LETTER = /^^[A-Z]+$/
export const PHONE_NUMBER = /^([\s\\(\\)\\-]*\d[\s\\(\\)\\-]*){10}$/
export const PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/
export const FISCAL_YEAR = /^\d{4}\/\d{2}$/g
export const DATE = /^(?:(?:1[6-9]|[2-9]\d)\d{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01]))$/
export const NUMBER = /^\d+(\.\d+)?$/
