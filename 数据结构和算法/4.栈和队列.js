// 栈的特点，先进后出
// js 模拟战

function Stack() {
  var arr = []
  this.push = arr.push;
  this.pop = arr.pop;
}

var s = new Stack();
s.push(3)
s.push(4)
s.push(5)
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())

// 队列的特点，先进先出

function Queue() {
  var arr = []
  this.push = arr.push;
  this.pop = arr.shift;
}

var q = new Queue();
q.push(3)
q.push(4)
q.push(5)
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())