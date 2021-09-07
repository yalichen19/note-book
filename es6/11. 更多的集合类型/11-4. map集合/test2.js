const mp = new Map([
    ["a", 3],
    ["c", 10],
    ["b", 4],
    ["c", 5]
]);
const result = [...mp]
console.log(result);

// for (const [key, value] of mp) {
//     console.log(key, value)
// }

mp.forEach((value, key, mp) => {
    console.log(value, key, mp)
})
