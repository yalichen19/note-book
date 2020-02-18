# node 基础知识

## ./ 和 __dirname
./:
- 在模块化代码中，引入模块，如 require('./xxx')，表示当前 js 的目录
- 在路径处理中，'./' 表示 node 运行目录

__dirname: 表示当前的 js 所在目录，是一个绝对路径，一般通过 `path.resolve(__dirname, 'xxx')` 获取当前 js 所在目录下的 xxx 目录的绝对地址

