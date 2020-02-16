/**
 * 结果：合并两个模块
 *  ./src/a.js
 *  ./src/index.js
 * 
 * 1. 为了不污染全局变量，每个模块应该是一个函数，
 *    且接受require, module, exports 三个参数，因为这三个方法可以在函数内直接调用
 * 2. 最终打包结果的 主要功能 就是 执行入口模块并处理所有模块，因此可以用一个全局的匿名函数实现
 *    执行入口模块，即执行 require('./src/index.js')，require中要执行入口模块对应的函数，
 *    所以要同时要构造出require、module、exports 参数
 * 3. 模块还需要缓存，所以需要一个对象记录模块导出结果，执行模块时，已有结果则不再执行，直接返回记录的值
 * 4. 模块执行的代码默认情况是放在 eval 中执行，主要原因是为了方便浏览器调试时定位错误
 *    直接执行，错误代码会定位到打包之后的整个 main.js 中
 *    eval 执行，则会定位到 eval 代码中，做为单独的执行环境，还支持根据 # sourceURL 来指定文件路径
 * 5. 模块相互引用的情况：缓存时不是在模块执行之后才给缓存复职，而是在即将执行前先初始化缓存结果为空，
 *    这样避免了死循环。但是会出现导出模块为空对象的情况，因为还没执行完成。
 * 
 */
(function (modules) {
  let moduleExports = {} // 记录模块导出结果
  /**
   * 运行模块，得到模块的导出结果
   * @param {*} moduleId 
   */
  function __webpack_require (moduleId) {
    if (moduleExports[moduleId]) {
      return moduleExports[moduleId];
    }
    moduleExports[moduleId] = {}; // 避免模块相互引用造成死循环
    const moduleFunc = modules[moduleId]
    let module = {
      exports: {}
    };
    moduleFunc(module, module.exports, __webpack_require)
    moduleExports[moduleId] = module.exports
    return module.exports;
  }
  // 执行入口模块
  return __webpack_require('./src/index.js');
}({
  './src/a.js': function (module, exports, __webpack_require) {
    console.log('module a')
    console.log(__webpack_require('./src/index.js'))
    module.exports = 'a'
  },
  './src/index.js': function (module, exports, __webpack_require) {
    console.log('module index')
    // 用统一路径 './src/a.js' 替换 './a'
    const a = __webpack_require('./src/a.js')
    __webpack_require('./src/a.js')
    console.log(a)
  },
}))

