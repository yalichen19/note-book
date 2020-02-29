function print(strOrNum) {
    if (typeof strOrNum === 'string') {
        console.log(strOrNum.length);
    }
    else {
        console.log(strOrNum.toFixed(2));
    }
}
function func() {
    console.log('xxx');
}
function throwError() {
    throw new Error();
}
function alwaysDoSomething() {
    while (true) {
    }
}
let sex;
sex = '女';
let emptyArr;
emptyArr = [];
let user;
user = {
    name: 'xxx',
    age: 1
};
let fixArr;
fixArr = ['1', 3];
let ccc;
ccc = '123';
ccc = 3;
function combine(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    throw new Error('a 和 b 必须是相同类型');
}
function add(a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
function sum(numbers, callback) {
    return numbers.reduce((pre, next) => {
        if (callback(next)) {
            return pre + next;
        }
        return pre;
    }, 0);
}
console.log(sum([2, 4, 5, 7, 8], n => n % 2 === 0));
let c = {
    T1: '1',
    T2: 2,
    T3: false
};
let person = {
    name: '伪装成鸭子的人',
    age: 11,
    sound: '嘎嘎嘎',
    swin: () => {
        console.log('swin, swin');
    }
};
let duck = person;
class User2 {
    constructor(name, age) {
        this.name = name;
        this.gender = '男';
        this.id = Math.random();
        this.name = name;
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            this._age = 0;
        }
        else if (value > 200) {
            this._age = 200;
        }
        else {
            this._age = value;
        }
    }
}
const u = new User2('xxx', 23);
u.age = -10;
console.log(u.age);
function take(arr, n) {
    if (n > arr.length) {
        return arr;
    }
    return arr.splice(0, n);
}
const result = take([1, 2, 3, 5], 3);
console.log(result);
function mixArr(arr1, arr2) {
    return [...arr1, ...arr2];
}
mixArr([1, 2, 3], ['3', '4']);
function nameToUpperCase(obj) {
    obj.name.toUpperCase();
    return obj;
}
const objj = {
    name: 'Kevin yuan',
    age: 22
};
nameToUpperCase(objj);
