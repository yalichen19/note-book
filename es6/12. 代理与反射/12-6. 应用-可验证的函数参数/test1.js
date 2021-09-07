function sum(a, b) {
    return a + b;
}

function validatorFunction(func, ...types) {
    const proxy = new Proxy(func, {
        apply(target, thisArgument, argumentsList) {
            types.forEach((t, i) => {
                const arg = argumentsList[i]
                if (typeof arg !== t) {
                    throw new TypeError(`第${i+1}个参数${argumentsList[i]}不满足类型${t}`);
                }
            })
            return Reflect.apply(target, thisArgument, argumentsList);
        }
    })
    return proxy;
}

const sumProxy = validatorFunction(sum, "number", "number")
console.log(sumProxy(1, 2))