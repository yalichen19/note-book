function sum(a, b) {
    return a + b;
}

function validatorFunction(func, ...types) {
    return function(...argumentsList) {
        types.forEach((t, i) => {
            const arg = argumentsList[i]
            if (typeof arg !== t) {
                throw new TypeError(`第${i+1}个参数${argumentsList[i]}不满足类型${t}`);
            }
        })
        return func(...argumentsList)
    }
    // return proxy;
}

const sumProxy = validatorFunction(sum, "number", "number")
console.log(sumProxy(1, 2))