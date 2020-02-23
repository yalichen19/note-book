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