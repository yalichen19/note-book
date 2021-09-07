const obj = {
    a: 1,
    b: 2
}

// Object.defineProperty(obj, "a", {
//     value: 3,
//     configurable: false,
//     enumerable: false,
//     writable: false
// })

Object.defineProperties(obj, {
    a: {
        value: 3,
        configurable: false,
        enumerable: false,
        writable: false
    }
})

obj.a = 10;
console.log(obj);

// console.log(obj)
// // for (const prop in obj) {
// //     console.log(prop);
// // }

// const props = Object.keys(obj)
// console.log(props)

// const values = Object.values(obj);
// console.log(values);

// const desc = Object.getOwnPropertyDescriptor(obj, "a")

// console.log(desc);