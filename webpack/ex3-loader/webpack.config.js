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
      // 测试执行顺序
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