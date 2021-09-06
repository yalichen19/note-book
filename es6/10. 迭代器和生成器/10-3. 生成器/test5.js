function* test() {
    console.log("函数开始")

    let info = yield 1;
    console.log(info)
    info = yield 2 + info;
    console.log(info)
}

const generator = test();