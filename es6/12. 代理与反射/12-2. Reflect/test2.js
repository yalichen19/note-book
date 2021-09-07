// function method(a, b){
    //     console.log("method", a, b);
    // }

    // // method(3, 4);

    // Reflect.apply(method, null, [3, 4])

    // const obj = {
    //     a: 1,
    //     b: 2
    // }

    // // delete obj.a;

    // Reflect.deleteProperty(obj, "a");

    // console.log(obj);

    // function Test(a, b) {
    //     this.a = a;
    //     this.b = b;
    // }

    // // const t = new Test(1, 3);
    // const t = Reflect.construct(Test, [1, 3]);
    // console.log(t)

    const obj = {
        a: 1,
        b: 2
    }

    // console.log("a" in obj);
    console.log(Reflect.has(obj, "a"));