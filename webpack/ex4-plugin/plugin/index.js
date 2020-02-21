module.exports = class MyPlugin {
  apply(compiler) {
    console.log('apply 执行了')
    compiler.hooks.done.tap('MyPlugin-done', function(compilation){
      // 事件处理函数
      console.log('编译完成')
    })
  }
}