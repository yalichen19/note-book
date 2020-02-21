const MyPlugin = require('./plugin/index')
const FileListPlugin = require('./plugin/FileListPlugin')
module.exports = {
  plugins: [
    new MyPlugin(),
    new FileListPlugin('文件列表.md')
  ]
}