## 基本语法
1. 插值表达式可以支持: 
- data 
- js 数据 （数字、字符串、布尔值、undefined、null、数组、对象）
- 表达式

注意点
- 问：为什么data会直接出现在vm实例对象中咧？
答：当创建vue实例时，vue会将data中的成员代理给vue实例，目的是为了实现响应式，监控数据变化，执行某个监听函数（怎么实现的？想一想，提示：Object.defineProperty，试着实现一下）

- 问：实例中除了data数据外，其他东西是啥子？
为了防止名称冲突。因为会将data中数据代理给vue，假如说我们自己写的data名称和vue中自带的属性冲突了，那么就会覆盖vue内部的属性，所以vue会把自己内部的属性成员名称前加上$或_，如果加上的是$，代表是我们可以使用的，如果加上的是_，是vue自己内部使用的方法或属性，我们不需要调用。
如果 data 中定义的是 _ 或者 $ 开头的数据不会响应式更新，因为被当作是内部属性了。

- 更改的数据必须是存在的数据，否则不能重新渲染页面，因为他监听不到

2. nextTick

- 好奇nextTick是怎么实现的吗？
异步任务分为宏任务（macro）和微任务（micro）。宏任务比较慢（如setTimeout等），微任务比较快（如Promise.then()等）。微任务在前，宏任务在后（eventloop，事件环）
在nextTick的实现源码中，会先判断是否支持微任务，不支持后，才会执行宏任务
```js
  if(typeof Promise !== 'undefined') {
    // 微任务
    // 首先看一下浏览器中有没有promise
    // 因为IE浏览器中不能执行Promise
    const p = Promise.resolve();

  } else if(typeof MutationObserver !== 'undefined') {
    // MutationObserver: 创建并返回一个新的 MutationObserver 它会在指定的DOM发生变化时被调用。 new MutationObserver(callback).observe(targetNode, config);
    // 微任务
    // 突变观察
    // 监听文档中文字的变化，如果文字有变化，就会执行回调
    // vue的具体做法是：创建一个假节点，然后让这个假节点稍微改动一下，就会执行对应的函数
  } else if(typeof setImmediate !== 'undefined') {
    // 宏任务
    // 只在IE下有
  } else {
    // 宏任务
    // 如果上面都不能执行，那么则会调用setTimeout
  }
```
曾经vue用过的宏任务
MessageChannel 消息通道 宏任务

3. Vue响应式原理之监听数据相应变化
利用Object.defineProperty实现响应式的劣势
- 天生就需要进行递归
- 监听不到数组不存在的索引的改变
- 监听不到数组长度的改变
- 监听不到对象的增删

4. 页面显示 {{ message }} 的问题? 
一开始会先渲染 {{xxx}} 之后才会替换

5. v-text
textContent VS innerText
- 设置文本替换时，两者都会把指定节点下的所有子节点也一并替换掉。
- textContent 会获取所有元素的内容，包括 `<script>` 和 `<style>` 元素，然而 innerText 不会。
- innerText 受 CSS 样式的影响，并且不会返回隐藏元素的文本，而textContent会。
- 由于 innerText 受 CSS 样式的影响，它会触发重排（reflow），但textContent 不会。
- innerText 不是标准制定出来的 api，而是IE引入的，所以对IE支持更友好。textContent虽然作为标准方法但是只支持IE8+以上的浏览器，在最新的浏览器中，两个都可以使用。
- 综上，Vue这里 v-text 使用 textContent 是从性能的角度考虑的。
