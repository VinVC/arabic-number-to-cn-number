/**
 *
 * @param {*} num number
 * @description 将阿拉伯数字转为汉字
 * 
 */
export default function araToChineseNum(num) {
  let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'] //changeNum[0] = "零"
  let unit = ['', '十', '百', '千', '万']
  num = parseInt(num)
  let getWan = (temp) => {
    let strArr = temp
      .toString()
      .split('')
      .reverse()
    let newNum = ''
    if (10 <= num && num < 20) {
      for (let i = 0; i < strArr.length; i++) {
        newNum =
          (i === 0 && strArr[i] === 0
            ? ''
            : i > 0 && strArr[i] === 0 && strArr[i - 1] === 0
            ? ''
            : (i === 0 ? changeNum[strArr[i]] : '') +
              (strArr[i] === 0 ? unit[0] : unit[i])) + newNum
      }
    } else {
      for (let i = 0; i < strArr.length; i++) {
        newNum =
          (i === 0 && strArr[i] === 0
            ? ''
            : i > 0 && strArr[i] === 0 && strArr[i - 1] === 0
            ? ''
            : changeNum[strArr[i]] + (strArr[i] === 0 ? unit[0] : unit[i])) +
          newNum
      }
    }
    return newNum
  }
  let overWan = Math.floor(num / 10000)
  let noWan = num % 10000
  if (noWan.toString().length < 4) noWan = '0' + noWan
  return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num)
}

export const stringToArr = (str) => {
  return str.split('')
}
