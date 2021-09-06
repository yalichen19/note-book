const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

// 迭代器创建函数  iterator creator
function* createIterator(arr) {
    for (const item of arr) {
        yield item;
    }
}

const iter1 = createIterator(arr1);
const iter2 = createIterator(arr2);

console.log(iter1.next())
