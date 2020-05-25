## major browsers
IE trident
Chrome webkit/blink
Firefox Gecko
Opera presto
Safari webkit

## 变量
命名规则：
1. 字母 数字 _ $ 组成
2. _ $ 字母 开头
3. 不能用系统的关键字、保留字

## 基本数据类型、值类型、原始值，值直接存在 stack 中，不能改变，改变的是变量的地址
字符串 数字 布尔值 undefined null Symbol(es6)
A primitive value is a member of one of the following built‑in types: Undefined, Null, Boolean, Number, String, and Symbol.

stack: first in last on
stack 中的赋值是拷贝
数组的 stack 内存中会存放 heap 的 address，而数组内容会存在heap中，从而找到最终内容

引用值的拷贝：
| arr2 = arr | stack	| heap	 |
| ----  | ----      | ---- | 
| 1001(arr) | heap1001	| 	[1, 2, 3]   |
| 1002 (arr2)	| heap1001| 	|   |


## 引用数据类型，值存在 heap 中，值的引用地址存在 stack 中
包括 object、array、fundtion、正则、Date，也可以统成为对象