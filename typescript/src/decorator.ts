function test (target: new (...args: any[]) => object) {
  console.log(target)
}

function test2(str: string) {
  return function (target: new (...args: any[]) => object) {
    console.log(target)
  }
}


function d1() {
  console.log('d1')
  return function (target: new (...args: any[]) => object) {
    console.log('d1 decorator')
  }
}

function d2() {
  console.log('d2')
  return function (target: new (...args: any[]) => object) {
    console.log('d2 decorator')
  }
}
@test
@test2('描述信息') // 必须返回一个函数，且接受类的构造函数为参数
@d1()
@d2() // 输出d1 d2 d2 decorator d1 decorator
class K {
}


function d(target: any, key: string) {
  console.log(target, key)
}

class AA {
  @d
  props1: string = '111'

  @d
  static porps1: string

  // @enumerable
  method1() {

  }

  // @enumerable
  method2() {

  }
}

function enumerable(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.enumerable = true
}

const a = new AA()
for(const key in a) {
  console.log(key)
}

