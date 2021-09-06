//创建一个斐波拉契数列的迭代器
function* createFeiboIterator() {
    let prev1 = 1,
        prev2 = 1, //当前位置的前1位和前2位
        n = 1; //当前是第几位
    while (true) {
        if (n <= 2) {
            yield 1;
        } else {
            const newValue = prev1 + prev2
            yield newValue;
            prev2 = prev1;
            prev1 = newValue;
        }
        n++;
    }
}

const iterator = createFeiboIterator();