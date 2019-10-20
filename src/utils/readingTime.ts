type WordsToMinutes = (n: number) => number
/**
 * Takes a word-count and calcs the number of mins it would take
 * to read it on average
 */
export const wordsToMinutes: WordsToMinutes = n => {
  const minsInSecond = 60
  const wordPerSecond = 4.8 // according to Ulysses writing app
  const minutesToRead = n / wordPerSecond / minsInSecond
  return parseInt(minutesToRead.toFixed())
}

type FormatToString = (n: number) => string
export const formatToString: FormatToString = n =>
  `${n} minute${n !== 1 ? 's' : ''} read`

/**
 * Formats a reading time to display e.g. 12 minutes read
 */
const readingTime = (n: number) => formatToString(wordsToMinutes(n))

export default readingTime
