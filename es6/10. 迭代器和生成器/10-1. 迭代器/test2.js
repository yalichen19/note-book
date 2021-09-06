const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

// 迭代器创建函数  iterator creator
function createIterator(arr) {
    let i = 0;//当前的数组下标
    return { 
        next() {
            var result = {
                value: arr[i],
                done: i >= arr.length
            }
            i++;
            return result;
        }
    }
}

const iter1 = createIterator(arr1);
const iter2 = createIterator(arr2);