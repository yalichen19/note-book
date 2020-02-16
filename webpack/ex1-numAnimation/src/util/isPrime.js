/**
 * 判断 n 是否是素数
 * 素数：仅能被 1 和自身整除
 * @param {*} n 
 */
export default function (n) {
  for (let i = 2; i <= n - 1; i++) {
    if (i < 2) {
      return false;
    }
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}