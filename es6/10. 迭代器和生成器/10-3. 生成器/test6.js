function* t1(){
    console.log('1')
    yield "a"
    console.log('2')
    yield "b"
}

function* test() {
    yield t1();
    yield 1;
    yield 2;
    yield 3;
}

const generator = test();