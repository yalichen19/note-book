console.log('module index')
require('./a')
const a = require('./a') // 重复导入也只执行一次
console.log(a)
module.exports = 'b'