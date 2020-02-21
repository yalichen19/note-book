# webpack的配置

## 配置方式
默认情况下， webpack 读取 webpack.config.js 作为配置文件，但也可以通过 cli 参数 --config 来指定某个配置文件

配置文件中通过 commonjs 模块导出一个对象，对象的各个属性对应不同配置

**注意：** 配置文件中的代码，必须是有效的 node 代码，因为配置文件在 node 中执行

**注意：** 当命令行参数与配置文件参数冲突时，以命令行参数为准

## 基本配置
```js
const path = require('path')
module.exports = {
  /**
   * 编译结果代码的执行环境： development / production
   */
  mode: 'development',
  /**
   * 配置代码报错后的提示模式，主要为解决调试困难， chrome 浏览器率先支持了 source map，其他浏览器也纷纷支持了。
   * 注： source map 应在开发环境中使用。做为一种调试手段，而不应该在生产环境中使用，一方面会导致额外的网络传输，另一方面会暴露原始代码。就算要使用，也需要做 ip 限制处理等（运维配置）。
   */
  devtool: 'source-map',
  /**
   * chunk 入口
   * 格式为 chunk名称: chunk 入口文件的相对路径
   * 默认配置如下，和 entry: './src/index' 效果一样，因为默认单 chunk 名称为 main
   */
  entry: {
    main: './src/index.js',
    a: ['./src/a.js', './src/index.js'], // 两个启动模块，最终结果 js , require 了两个模块
  },
  /**
   * chunk 出口
   * path 必须是一个绝对路径，默认是 ./dist 对应的绝对路径
   * filename 配置的是: 一个 chunk 打包出来的 js 文件，它的文件名规则
   * [name]: chunk name
   * [hash]: 总资源的 hash ，用于标记本次打包，使得每次发布，js 名称都会变化，不让浏览器读缓存
   * [chunkhash]: chunk 的 hash
   * [id]: 不建议使用，开发环境中为 [name]，生产为数字，不一致
   */
  output: {
    /**
     * 入口的执行结果暴露给 output 对象
     */
    library: 'output',
    /**
     * 与 library 联用，配置对象的声明方式
     */
    libraryTarget: 'var',
    path: path.resolve(__dirname, 'target'),
    filename: '[name].[chunkhash:5].js',
  },
  /**
   * 该配置会影响入口和 loaders 的解析，入口和 loaders 的相对路径会以 context 配置作为基准路径，你的配置会独立于 cwd (current wroking direcyory)
   */
  context: path.resolve(__dirname, 'app'),
  /**
   * 配置代码运行环境，会影响依赖的解析，如 web 环境对于 node modules 内置模块引用会报错
   */
  target: 'web',
  module: {
    rules: [],
    /**
     * 不对 a 模块做任何处理，直接读内容，甚至不解析依赖（只是优化构建性能）
     * 用于如 jquery 这样没有其他依赖且是打包后的模块
     */
    noParse: /a\.js/,
  },
  resolve: {
    /**
     * 配置寻找依赖的文件，会先从当前目录下的 modules 寻找，再往上级寻找
     */
    modules: ['node_modules'], // 越前面的配置越优先，可用于将三方库移植到 src 中
    /**
     * 用于忽略后缀名
     */
    extensions: ['.js', '.json'],
    /**
     * 路径别名
     */
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  /**
   * 忽略 jquery 模块的引用，不再打包模块（用的cdn），用全局对象 $ 替换使用
   */
  externals: {
    jquery: '$'
  },
}
```

## [loader](./ex3-loader/README.md)

## [plugin](./ex4-plugin/README.md)

## 配置文件中导出方法
[exporting-a-function](https://webpack.js.org/configuration/configuration-types/#exporting-a-function)
[environment-options](https://webpack.js.org/api/cli/#environment-options)

## 常用插件
- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin): 清除打包目录
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin): 自动生成 html
- [copy-webpack-plugin]()
- webpack.DefinePlugin: 定义全局变量
- webpack.BannerPlugin: 添加头部注释，如版权信息等
- webpack.ProvidePlugin: 帮助导入模块，代码中无需引入

