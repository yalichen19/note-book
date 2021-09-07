let obj = {
    name: "yj",
    age: 18
};
let obj2 = obj;
const set = new WeakSet();
set.add(obj);

obj = null;
obj2 = null;
console.log(set)
