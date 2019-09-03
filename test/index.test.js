import { araToCnNum, stringToArr } from '../src/index'

describe('all tools unit test',() => {
  describe('araToCnNum test',() => {
    test('translate Number 19 to 十九',() => {
      expect(araToCnNum(19)).toBe('十九')
    })

    test('translate Number 29 to 二十九',() => {
      expect(araToCnNum(29)).toBe('二十九')
    })

    test('translate String 29 to 二十九',() => {
      expect(araToCnNum('29')).toBe('二十九')
    })

    test('given an empty input',() => {
      expect(() => {araToCnNum()}).toThrowError()
    })

    test('given a string input',() => {
      expect(() => {araToCnNum('abc')}).toThrowError()
    })

    test('given a object input',() => {
      expect(() => {araToCnNum([123])}).toThrowError()
    })

  })

  describe('stringToArr test', () => {
    test('transform vin to [v,i,n]', () => {
      expect(stringToArr('vin')).toStrictEqual(['v','i','n'])
    })

    test('given non-string input',() => {
      expect(() => { stringToArr(123) }).toThrowError()
    })
  })
})