// 联合类型 和 类型推导
function print(strOrNum: string | number) {
  if (typeof strOrNum === 'string') {
    console.log(strOrNum.length)
  } else {
    console.log(strOrNum.toFixed(2))
  }
}

// viod 
function func ():void {
  console.log('xxx')
}

// never
function throwError():never {
  throw new Error();
}

function alwaysDoSomething():never {
  while(true) {

  }
}

// 字面量类型
let sex: '男' | '女'
sex = '女'

let emptyArr: []
emptyArr = []

let user: {
  name: string,
  age: number
} // 一般较少使用
user = {
  name: 'xxx',
  age: 1
}

// 元祖
let fixArr: [string, number];
fixArr = ['1', 3]

// any
let ccc:any
ccc = '123'
ccc = 3


// 函数重载
function combine(a:string, b: string): string;
function combine(a:number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === 'string' && typeof b === 'string' ) {
    return a + b;
  } else if (typeof a === 'number' && typeof b === 'number' ) {
    return a * b;
  }
  // 不能让函数有返回 undeined 的情况，需要抛出异常
  throw new Error('a 和 b 必须是相同类型');
}


// 可选参数
function add(a: number, b:number, c?:number) {
  if (c) {
    return  a + b + c;
  } else {
    return a + b;
  }
}

// 接口约束函数
// type Condition = (n: number) => boolean

// type Condition = { // 定界符
//   (n: number): boolean
// }

interface Condition {
  (n: number): boolean
}

function sum (numbers: number[], callback: Condition) {
  return numbers.reduce((pre, next) => {
    if ( callback(next)) {
      return pre + next
    }
    return pre;
  }, 0)
}

console.log(sum([2, 4, 5, 7, 8], n => n % 2 === 0))


// 接口继承
// interface A {
//   T1: string
// }

// interface B {
//   T2: number
// }

// interface C extends A,B {
//   T3: boolean
// }

// let c:C = {
//   T1: '1',
//   T2: 2,
//   T3: false
// }

type A = {
  T1: string
}

type B = {
  T2: number
}

type C = {
  T3: boolean
} & A & B

let c:C = {
  T1: '1',
  T2: 2,
  T3: false
}

interface User {
  readonly id: string, // 不可修改 id
  name: string,
  /**
   * 不可给 score 重新赋值，但可以修改数组元素值，不可调用 push 等方法
   * or
   * score: readonly string [],
   */
  score: ReadonlyArray<string>,
  // 即不可重新赋值，也不可修改数组元素值
  readonly fixScore: ReadonlyArray<string>,
}

interface Duck {
  sound: '嘎嘎嘎',
  swin(): void
}
let person = {
  name: '伪装成鸭子的人',
  age: 11,
  sound: '嘎嘎嘎' as '嘎嘎嘎', // 类型断言
  swin:() => {
    console.log('swin, swin')
  }
}
let duck: Duck = person;

class User2 {
  readonly id: Number
  _age: number
  gender: '男' | '女' = '男' // 属性默认值
  pid?: string

  constructor(public name: string, age: number) {
    this.id = Math.random();
    this.name = name;
    this._age = age;
  }

  // 访问器
  get age(){
    return this._age;
  }

  set age(value: number){
    if(value < 0) {
      this._age = 0
    } else if (value > 200) {
      this._age = 200
    } else {
      this._age = value;
    }
  }
}
const u = new User2('xxx', 23);
u.age = -10
console.log(u.age)

function take<T = number>(arr: T[], n: number): T[] {
  if(n > arr.length) {
    return arr
  }
  return arr.splice(0, n);
}
const result = take([1,2,3,5], 3)
console.log(result)

function mixArr<T, K>(arr1: T[], arr2: K[]): (T|K)[] {
  return [...arr1, ...arr2];
}
mixArr([1,2,3], ['3', '4'])

interface hasName {
  name: string
}
function nameToUpperCase<T extends hasName>(obj: T): T {
  obj.name.toUpperCase();
  return obj
}
const objj = {
  name: 'Kevin yuan',
  age:22
}
nameToUpperCase(objj)