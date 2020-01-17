import { wordsToMinutes } from './readingTime'

describe('wordsToMinutes', () => {
  it('returns some correct values', () => {
    // these are just taken from previous essays/blog posts I have written
    expect(wordsToMinutes(368)).toBe(1)
    expect(wordsToMinutes(5226)).toBe(18)
    expect(wordsToMinutes(2639)).toBe(9)
  })
})
