console.log('module a')
console.log(require('./index')) // 相互引用，不会死循环，但引用结果会为空
module.exports = 'a'