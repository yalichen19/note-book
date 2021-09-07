const arr = [{
    name: "a",
    id: 1
},
{
    name: "b",
    id: 2
},
{
    name: "c",
    id: 3
},
{
    name: "d",
    id: 4
},
{
    name: "e",
    id: 5
},
{
    name: "f",
    id: 6
},
{
    name: "g",
    id: 7
}
]

//找到id为5的对象
const result = arr.find(item => item.id === 5)
const resultIndex = arr.findIndex(item => item.id === 5)

console.log(result, resultIndex);