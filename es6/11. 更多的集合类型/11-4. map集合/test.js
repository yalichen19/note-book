
const mp1 = new Map([["a", 3], ["b", 4], ["c", 5]]);
const obj = {};
mp1.set(obj, 6456);
mp1.set("a", "abc");
mp1.set(obj, 111);

console.log(mp1)
console.log("总数：", mp1.size);
console.log("get('a')", mp1.get("a"));
console.log("has('a')", mp1.has("a"));
 