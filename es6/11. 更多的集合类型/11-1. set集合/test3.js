// 数组去重
const arr = [45, 7, 2, 2, 34, 46, 6, 57, 8, 55, 6, 46];
const result = [...new Set(arr)];
console.log(result);


// 字符串去重
const str = "asf23sdfgsdgfsafasdfasfasfasfsafsagfdsfg";
const s = [...new Set(str)].join("");
console.log(s);
