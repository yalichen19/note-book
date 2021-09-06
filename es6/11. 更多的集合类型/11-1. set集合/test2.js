
const s1 = new Set();

s1.add(1);
s1.add(2);
s1.add(3);
s1.add(1); //无效
s1.add(+0);
s1.add(-0); //无效

// for (const item of s1) {
//     console.log(item)
// }

s1.forEach((item, index, s) => {
    console.log(item, index, s);
})
console.log(s1);
console.log("总数为：", s1.size);
