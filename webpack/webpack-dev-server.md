# 开发服务器 [webpack-dev-server](https://webpack.docschina.org/configuration/dev-server/)
webpack-dev-server 作为一个单独库来使用，即不是loader 也不是 plugin。 它可以提供开发阶段过程中打包、部署到本地服务器、检查刷新一系列过程的便捷功能。

webpack-dev-server 是官方提供的，几乎支持所有 webpack 命令参数，如 --config --env

## 实现过程
当执行 webpack-dev-server 命令后，它做了以下操作
1. 内部执行 webpack 命令，传递命令参数
2. 开启 watch
3. 注册 hooks：主要实现
  1. 将资源列表 asserts 保存起来
  2. 禁止 webpack 输出文件
4. 用 express 开启一个服务器，监听某个端口，当请求到达后，根据请求路径返回相应的资源。

## 常见配置

- port 监听端口
- proxy 代理，常用于跨域访问（确保接口和页面发布在同一个域名端口下时，调试阶段可以使用 proxy 代理解决跨域。当服务器认准请求 host 时，可能需要和 changeOrign 配置联合使用）
- stats 配置控制台输出内容