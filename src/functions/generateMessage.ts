interface IType {
  add: 'add'
  delete: 'delete'
  list: 'list'
  manage: 'manage'
}

const messages: any = {
  en: {
    add: (message: string) => `Add ${message}`,
    delete: (message: string) => `Delete ${message}`,
    list: (message: string) => `List of ${message}`,
    manage: (message: string) => `Manage ${message}`,
  },
  ne: {
    add: (message: string) => `${message} थप्नुहोस`,
    delete: (message: string) => `${message} मेटाउनुहोस`,
    list: (message: string) => `${message}को सूची`,
    manage: (message: string) => `${message} व्यवस्थापन`,
  },
}

export const getMessage = (message: string, type: keyof IType, lang: any) => {
  return messages[lang][type](message)
}

interface IPlaceholderType {
  input: 'input'
  dropDown: 'dropDown'
  count: 'count'
}

type Language = 'en' | 'ne'

type PlaceholderType = keyof IPlaceholderType

export const generatePlaceholder = (fieldName: string, lang: Language, type?: PlaceholderType): string => {
  const fieldType = type ?? 'input'
  const placeholders: Record<PlaceholderType, Record<Language, string>> = {
    input: {
      en: `Enter ${fieldName}`,
      ne: `${fieldName} लेख्नुहोस्`,
    },
    dropDown: {
      en: `Select ${fieldName}`,
      ne: `${fieldName} छान्नुहोस्`,
    },
    count: {
      en: `Enter number of ${fieldName}`,
      ne: `${fieldName}को संख्या लेख्नुहोस्`,
    },
  }
  return placeholders[fieldType][lang]
}
