const arr = [5, 7, 2, 3, 6];

// const iterator = arr[Symbol.iterator]();
// let result = iterator.next();
// while (!result.done) {
//     const item = result.value; //取出数据
//     console.log(item);
//     //下一次迭代
//     result = iterator.next();
// }

for (const item of arr) {
    console.log(item)
}