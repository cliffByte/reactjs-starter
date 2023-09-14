const secretKey: string = import.meta.env.VITE_APP_CRYPTO_KEY as string

/**
 * Encrypt a plain text using the given key collection and private key
 * @param {Object} plainText - The object to be encrypted
 * @return {string | null} The encrypted string or null if encryption fails
 */

const encrypt = (plainText: string): string | null => {
  try {
    const privateKey = secretKey
    const keyCollection: { [key: string]: string } = customKeyCollection
    const string = JSON.stringify(plainText)
    const encodedString = encodeURIComponent(string) // Encode the string to handle non-ASCII characters
    const asciiValue = [...encodedString].map((char) => char.charCodeAt(0))
    const asciiValueToString = asciiValue.map((value) => String.fromCharCode(value))
    const plainString = asciiValueToString.join('')
    const replaceString = [...plainString].map((char) => keyCollection[char] || char).join('')
    const base64 = btoa(replaceString)
    const privateKeyBase64 = btoa(privateKey)
    return privateKeyBase64 + base64
  } catch (err) {
    return null
  }
}

/**
 * Decrypt an encrypted string using the given key collection and private key
 * @param {string} encrypted - The encrypted string to be decrypted
 * @return {Object | null} The decrypted object or null if decryption fails
 */
const decrypt = (encrypted: string) => {
  try {
    const privateKey = secretKey
    const keyCollection: { [key: string]: string } = customKeyCollection
    const privateKeyBase64 = btoa(privateKey)
    const base64 = encrypted.replace(privateKeyBase64, '')
    const replaceString = atob(base64)
    const plainString = [...replaceString].map((char) => keyCollection[char] ?? char).join('')
    const asciiValueWithLength = [...plainString].map((char) => char.charCodeAt(0))
    const string = asciiValueWithLength.map((value) => String.fromCharCode(value)).join('')
    return JSON.parse(decodeURIComponent(string)) as object // Decode the string to handle non-ASCII characters
  } catch (err) {
    return null
  }
}

/**
 *
 * @variable {Object} keyCollection - A collection of keys to encrypt the string
 *
 */
const customKeyCollection = {
  '@': '-',
  '-': '@',
  '{': '!',
  '!': '}',
  '}': '#',
  '#': '}',
  ']': '%',
  '%': ']',
  '.': '|',
  '|': '.',
  ':': '~',
  '~': ':',
  ',': '>',
  '>': ',',

  1: '9',
  2: '8',
  3: '7',
  4: '6',
  5: '5',
  6: '4',
  7: '3',
  8: '2',
  9: '1',
  0: '0',

  A: 'X',
  X: 'A',
  B: 'H',
  H: 'B',
  C: 'Z',
  Z: 'C',
  D: 'N',
  N: 'D',
  E: 'Y',
  Y: 'E',
  F: 'S',
  S: 'F',
  G: 'W',
  W: 'G',
  J: 'Q',
  Q: 'J',
  K: 'T',
  T: 'K',
  L: 'U',
  U: 'L',
  M: 'V',
  V: 'M',

  a: 'x',
  x: 'a',
  b: 'h',
  h: 'b',
  c: 'z',
  z: 'c',
  d: 'n',
  n: 'd',
  e: 'y',
  y: 'e',
  f: 's',
  s: 'f',
  g: 'w',
  w: 'g',
  j: 'q',
  q: 'j',
  k: 't',
  t: 'k',
  l: 'u',
  u: 'l',
  m: 'v',
  v: 'm',
}

export default { encrypt, decrypt }
