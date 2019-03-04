import readingTime, {
  stringToMinutes,
  formatToString,
} from '../readingTime'
import faker from 'faker'

function getRandomInt(min, max) {
  const minInt = Math.ceil(min)
  const maxInt = Math.floor(max)
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt
}

const randomPost = length =>
  faker.random.words(length || getRandomInt(1, 2000))

export default getRandomInt
describe('readingTime()', () => {
  it('returns a string', () => {
    expect(readingTime('this is some text')).toEqual(
      expect.any(String)
    )
  })
})

describe('formatToString', () => {
  it('returns a string', () => {
    expect(formatToString(12)).toEqual(expect.any(String))
  })
})

describe('stringToMinutes()', () => {
  it('returns a number', () => {
    expect(stringToMinutes(randomPost())).toEqual(expect.any(Number))
    expect(stringToMinutes(randomPost())).toEqual(expect.any(Number))
    expect(stringToMinutes(randomPost())).toEqual(expect.any(Number))
  })

  it('returns an int', () => {
    const notFloat = /\d*\.\d*/gu
    expect(stringToMinutes(randomPost()).toString()).not.toMatch(
      notFloat
    )
    expect(stringToMinutes(randomPost()).toString()).not.toMatch(
      notFloat
    )
    expect(stringToMinutes(randomPost()).toString()).not.toMatch(
      notFloat
    )
  })

  it('returns some correct values', () => {
    // these are just taken from previous essays/blog posts I have written
    expect(stringToMinutes(randomPost(368))).toBe(2)
    expect(stringToMinutes(randomPost(5226))).toBe(22)
    expect(stringToMinutes(randomPost(2639))).toBe(11)
  })
})
