# webpack loader
webpack loader 的本质是一个函数，它的作用是在读取文件内容之后，生成AST之前，将某个源码字符串转换成另一个源码字符串。简单说就是字符串转换。

## loader 解析流程
1. 判断当前模块是否满足某个规则
2. 是，则读取规则中对应的 loaders 数组，否则创建空数组
3. 从后向前遍历数组内的 loader ，依次将执行 loader 函数转换源码

## 完整配置示例
```js
module.exports = {
  module: {
    // 模块匹配规则，可以存在多个规则
    rules: [
      // 每个规则一个对象
      { 
        test: /\.js$/, // 匹配正则
        use: [
          // 每个 loader 的使用是一个对象
          { 
            // 模块路径，通过 require(路径) 加载
            loader: './loaders/replaceVar',
            // 向对应模块传递的额外参数
            options: {
              changeVar: '定义'
            }
          }
        ],
        // or
        // use: [
        //   { 
        //     loader: './loaders/index?changeVar=定义',
        //   }
        // ],

        // or 
        // use: [
        //   './loaders/index?changeVar=定义',
        // ]
      },
      // 测试执行顺序，结果为 4 3 2 1
      {
        test: /\.js/,
        use: ['./loaders/loader1', './loaders/loader2']
      },
      {
        test: /index\.js/,
        use: ['./loaders/loader3', './loaders/loader4']
      },
      {
        test: /\.css/,
        use: ['./loaders/cssLoader']
      },
      {
        test: /\.(png)|(jpg)|(gif)/,
        use: [{
          loader: './loaders/imgLoader',
          options: {
            limit: 1000,
            filename: 'img-[contenthash:5].[ext]'
          }
        }]
      },
    ]
  }
}
```