const loaderUtils = require('loader-utils')
module.exports = function (sourceCode) {
  // options 传入在 this 中，可用三方库 loader-utils 简单获取
  const options = loaderUtils.getOptions(this);
  const reg = new RegExp(options.changeVar, 'g');
  return sourceCode.replace(reg, 'var');
}