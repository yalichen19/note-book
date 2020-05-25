## typeof 返回值
number string boolean object function undefined

```js
typeof null // 'object'
```

## 显示类型转换
- Number(mix)
```js
Number(true) // 1
Number(false) // 0
Number(null) // 0
Number(undefined) // NaN
Number('a') // NaN
Number('-123') // 123
Number('123abc') // NaN
```

- parseInt(string, redix(2-36))
```js
parseInt(true) // NaN
parseInt(false) // NaN
parseInt(null) // NaN
parseInt(undefined) // NaN
parseInt('a') // NaN
parseInt('-123') // -123
parseInt('123abc') // 123 // 从数字位开始到非数字位
parseInt('123.9') // 123
parseInt('10', 16) // 16 以16进制为基底把 10 转成十进制数
parseInt('b', 16) // 11
parseInt('3', 2) // NaN 
parseInt('100px') // NaN 
parseInt('abc123') // NaN
```

- parseFloat(string)
```js
parseFloat('100.2abcd') // 100.2
```

- toString(mix)
```js
undefined.toString() // 报错
null.toString() // 报错
123.toString(8) // 把十进制数 123 转换成8进制数
```

- String(mix)
```js
String(true) // 'true'
String(false) // 'false'
String(null) // 'null'
String(undefined) // 'undefined'
```

- Boolean(mix)
```js
Boolean(false) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean('') // false
Boolean(0) // false
```

## 隐式类型转换
- isNaN: Number
```js
isNaN(NaN) // true
isNaN(123) // false
isNaN('123') // false
isNaN('abc') // true
isNaN(null) // false
isNaN(undefined) // true

Number('abc') --> NaN
```

- ++ -- + - : Number
```js
var a = 'abc';
a ++
Number(a) --> a++
```
```js
typeof(+ 'abc') // NaN
Number('abc') --> 
```
- '+': 一侧有 string 则调用 String() 转换

- '* / %': Number()

- && || ! Boolean()

- < > <= >= 有数字用 Number 全为字符串用 ASC码

- == != 
```js
1 == true // true
1 == '1' // true
false > true // false
2 > 1 > 3 // false
2 > 3 < 1 // true
undefined > 0 // false
undefined < 0 // false
undefined == 0 // false
null > 0 // false
null < 0 // false
null == 0 // false
undefined == null // true
NaN == NaN // false NaN 和任何比较都是 false
NaN === NaN // false NaN 和任何比较都是 false
```