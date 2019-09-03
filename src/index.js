/**
 *
 * @param {*} num number
 * @description 将阿拉伯数字转为汉字
 * 
 */
export function araToCnNum(num) {
  if(!num && num !== 0) throw new Error('入参不能为空')
  if(typeof num === 'object' || parseInt(num) !== parseInt(num)) throw new Error('入参必须为Number或Number字符串')
  let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
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
  if(typeof str !== 'string') throw new Error('请传入String')
  return str.split('')
}
