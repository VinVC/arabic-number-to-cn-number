import araToChineseNum from '../src/index'
import { stringToArr } from "../src/index";

test('translate 19 to 十九',() => {
  expect(araToChineseNum(19)).toBe('十九')
})

test('translate 29 to 二十九',() => {
  expect(araToChineseNum(29)).toBe('二十九')
})

test('vin to [v,i,n]', ()=> {
  expect(stringToArr('vin')).toStrictEqual(["v","i","n"])
})
