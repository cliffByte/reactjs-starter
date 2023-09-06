/**
 * Converts a number to its Nepali word representation.
 * Supports numbers up to 1 trillion (10^12).
 * @param n The number to be converted.
 * @returns The Nepali word representation of the number.
 */

const nepaliWords: Record<number, string> = {
  0: 'शून्य',
  1: 'एक',
  2: 'दुई',
  3: 'तीन',
  4: 'चार',
  5: 'पाँच',
  6: 'छ',
  7: 'सात',
  8: 'आठ',
  9: 'नौ',
  10: 'दस',
  11: 'एघार',
  12: 'बाह्र',
  13: 'तेह्र',
  14: 'चौध',
  15: 'पन्ध्र',
  16: 'सोह्र',
  17: 'सत्र',
  18: 'अठार',
  19: 'उन्नाइस',
  20: 'बीस',
  21: 'एक्काइस',
  22: 'बाइस',
  23: 'तेइस',
  24: 'चौबीस',
  25: 'पच्चीस',
  26: 'छब्बीस',
  27: 'सत्ताइस',
  28: 'अठ्ठाइस',
  29: 'उनन्तीस',
  30: 'तीस',
  31: 'एकतीस',
  32: 'बत्तीस',
  33: 'तेत्तीस',
  34: 'चौंतीस',
  35: 'पैंतीस',
  36: 'छत्तीस',
  37: 'सैंतीस',
  38: 'अठ्ठेटीस',
  39: 'उनन्चालीस',
  40: 'चालीस',
  41: 'एकचालीस',
  42: 'बयालीस',
  43: 'त्रियालीस',
  44: 'चौवालीस',
  45: 'पैँतालीस',
  46: 'छयालीस',
  47: 'सत्ताचालीस',
  48: 'अठ्ठाचालीस',
  49: 'उनन्पचास',
  50: 'पचास',
  51: 'एकाउन्नस',
  52: 'बाउन्नस',
  53: 'त्रिपन्नस',
  54: 'चउन्नस',
  55: 'पचपन्न',
  56: 'छपन्नस',
  57: 'सन्ताउन्नस',
  58: 'अन्ठाउन्नस',
  59: 'उनन्साठी',
  60: 'साठी',
  61: 'एकसट्ठी',
  62: 'बैसट्ठी',
  63: 'त्रिसट्ठी',
  64: 'चौसट्ठी',
  65: 'पैसट्ठी',
  66: 'छैसट्ठी',
  67: 'सत्सट्ठी',
  68: 'अठ्सट्ठी',
  69: 'उनन्सत्तरी',
  70: 'सत्तरी',
  71: 'एकहत्तर',
  72: 'बहत्तर',
  73: 'त्रिहत्तर',
  74: 'चौरहत्तर',
  75: 'पचहत्तर',
  76: 'छयहत्तर',
  77: 'सतहत्तर',
  78: 'अठहत्तर',
  79: 'उनासी',
  80: 'असी',
  81: 'एकासी',
  82: 'बयासी',
  83: 'त्रियासी',
  84: 'चौरासी',
  85: 'पचासी',
  86: 'छयासी',
  87: 'सतासी',
  88: 'अठासी',
  89: 'उनान्नब्बे',
  90: 'नब्बे',
  91: 'एकान्नब्बे',
  92: 'बान्नब्बे',
  93: 'त्रियान्नब्बे',
  94: 'चौरान्नब्बे',
  95: 'पन्चान्नब्बे',
  96: 'छयान्नब्बे',
  97: 'सन्तान्नब्बे',
  98: 'अन्ठान्नब्बे',
  99: 'उनान सय',
}
export const numberToWordConverter = (n: number): string => {
  if (n < 100) {
    return nepaliWords[n]
  } else if (n < 1000) {
    // Handle numbers in hundreds
    const hundreds = Math.floor(n / 100)
    const remainder = n % 100
    return nepaliWords[hundreds] + ' सय' + (remainder !== 0 ? ' ' + numberToWordConverter(remainder) : '')
  } else if (n < 100000) {
    // Handle numbers in thousands
    const thousands = Math.floor(n / 1000)
    const remainder = n % 1000
    return numberToWordConverter(thousands) + ' हजार' + (remainder !== 0 ? ' ' + numberToWordConverter(remainder) : '')
  } else if (n < 10000000) {
    // Handle numbers in millions
    const millions = Math.floor(n / 100000)
    const remainder = n % 100000
    return numberToWordConverter(millions) + ' लाख' + (remainder !== 0 ? ' ' + numberToWordConverter(remainder) : '')
  } else if (n < 1000000000) {
    // Handle numbers in billions
    const billions = Math.floor(n / 10000000)
    const remainder = n % 10000000
    return numberToWordConverter(billions) + ' करोड' + (remainder !== 0 ? ' ' + numberToWordConverter(remainder) : '')
  } else if (n < 1000000000000) {
    // Handle numbers in trillions
    const trillions = Math.floor(n / 1000000000)
    const remainder = n % 1000000000
    return numberToWordConverter(trillions) + ' अरब' + (remainder !== 0 ? ' ' + numberToWordConverter(remainder) : '')
  }

  return 'Number not supported'
}
