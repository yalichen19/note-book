const loaderUtils = require('loader-utils')

function getBase64 (buffer) {
  return `data:image/jpg;base64,${buffer.toString('base64')}`
}

function getFilePath (buffer, filenameRule) {
  const fileName = loaderUtils.interpolateName(this, filenameRule, {
    content: buffer
  });
  this.emitFile(fileName, buffer);
  return fileName;
}

function loader (buffer) {
  const {limit = 1000, filename = '[contenthash:5].[ext]'} = loaderUtils.getOptions(this) || {};
  let src = ''
  if (buffer.byteLength < limit) {
    src = getBase64(buffer)
  } else {
    src = getFilePath.call(this, buffer, filename);
  }
  return `module.exports = \`${src}\``
}

loader.raw = true; // loader 需要处理原生数据

module.exports = loader;