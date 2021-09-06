function* test() {
    console.log("第1次运行")
    yield 1;
    console.log("第2次运行")
    yield 2;
    console.log("第3次运行");
    return 10;
}

const generator = test();