/**
 * Takes a word-count and calcs the number of mins it would take
 * to read it on average
 */
export const wordsToMinutes = n => {
  const minsInSecond = 60
  const wordPerSecond = 4.8 // according to Ulysses writing app
  const minutesToRead = n / wordPerSecond / minsInSecond
  return parseInt(minutesToRead.toFixed())
}

export const formatToString = n =>
  `${n} minute${n !== 1 ? 's' : ''} read`

/**
 * Formats a reading time to display e.g. 12 minutes read
 */
const readingTime = s => formatToString(wordsToMinutes(s))

export default readingTime
