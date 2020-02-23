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
