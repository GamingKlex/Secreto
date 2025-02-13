import { WORDLIST } from './wordlist.js';

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=';
const DASH = '-';

/**
 * @param {{length: number, numbers: boolean, lowercase: boolean, uppercase: boolean, symbols: boolean}} param0 An object containing the length of the secret and whether to include numbers, lowercase, uppercase, and symbols.
 * @returns {string}
 */
export function generateSecret({
  length,
  numbers,
  lowercase,
  uppercase,
  symbols,
}) {
  let charset = '';
  let secret = '';
  if (numbers) charset += NUMBERS;
  if (lowercase) charset += LOWER;
  if (uppercase) charset += UPPER;
  if (symbols) charset += SYMBOLS;

  if (!charset) {
    return '¯\\_(ツ)_/¯';
  }

  for (let i = 0; i < length; i++) {
    secret += charset[randomInt(0, charset.length - 1)];
  }

  return secret;
}

/**
 * @param {{words: number, dashes: boolean}} param0 An object containing the length of the passphrase and whether to include dashes or spaces.
 * @returns {string}
 */
export function generatePassphrase({ words: length, dashes }) {
  let availableWords = WORDLIST.slice();
  let words = [];
  for (let i = 0; i < length; i++) {
    let index = randomInt(0, availableWords.length - 1);
    words.push(availableWords[index]);
    availableWords.splice(index, 1);
  }

  return words.join(dashes ? DASH : ' ');
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
