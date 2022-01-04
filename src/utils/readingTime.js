const MINS_IN_SECOND = 60
const WORDS_PER_SECOND = 4.8 // according to Ulysses writing app

/**
 * Takes a word-count and calcs the number of mins it would take
 * to read it on average
 */
export const wordsToMinutes = (n) => {
  const minutesToRead = n / WORDS_PER_SECOND / MINS_IN_SECOND
  return parseInt(minutesToRead.toFixed())
}

export const formatToString = (n) =>
  `${n} minute${n !== 1 ? 's' : ''} read`

/**
 * Formats a reading time to display e.g. 12 minutes read
 */
const readingTime = (n) => formatToString(wordsToMinutes(n))

export default readingTime
