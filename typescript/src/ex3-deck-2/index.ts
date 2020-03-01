import { Deck } from './Deck'
let deck = new Deck();
console.log('===========初始化===========')
deck.print()

deck.shuffle()
console.log('===========洗牌后===========')
deck.print()

console.log('===========发牌结果===========')
const result = deck.license()
result.forEach(deck=> deck.print())

console.log('===========剩余牌===========')
deck.print()
