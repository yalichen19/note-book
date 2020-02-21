# webpack plugin
webpack plugin 是也是为了提供一些功能，而对比 loader 只是用于转换模块代码，plugin 则需要介入 webpack 编译流程中。比如：
- 当 webpack 生成文件时，多生成一个描述文件
- 当 webpack 编译启动时，控制台输出一句话表示已启动
- 当 xxx 时，xxx
- ...

可以简单理解为 plugin 就是用来注册事件的

## plugin 的实现
本质是一个带有 apply 方法的对象
```js
var plugin = {
  apply: function (compiler) {
    // ...
  }
}
```

通常会写成构造函数的形式
```js
class MyPlugin {
  apply(compiler) {
    // 在这里注册事件，类似 windoe.onload
    compiler.hooks.事件名称.事件类型(name, functon(compilation) {
      // 事件处理函数
    })
  }
}

var plugin = new MyPlugin()
```

使用插件
```js
const MyPlugin = require('./plugin/index')
module.exports = {
  plugins: [
    new MyPlugin()
  ]
}
```

## compiler
compiler 对象是在初始化阶段创建的，并贯穿生存于整个 webpack 打包的流程中。整个打包期间只会创建一个 compiler 对象，打包工作是由 compiler 对象内创建的 compilation 完成的。

apply 方法会在初始化阶段，**创建好 compiler 对象后调用**时调用，并向方法传入一个complier 对象。

watch 后每次文件更新会重新创建 compilation ，但不会重新创建 compiler 

所有事件（钩子）参照：https://webpack.js.org/api/compiler-hooks/