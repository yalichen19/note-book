import { Deck } from './type';
import { Color, Mark } from './enum';

export function createDeck(): Deck {
  let deck: Deck = [];
  for (const c of Object.values(Color)) {
    for (const m of Object.values(Mark)) {
      deck.push({
        color: c,
        mark: m,
      })
    }
  }
  return deck
}

export function printDeck(deck: Deck) {
  let result = '';
  deck.forEach(card => {
    const { color, mark } = card;
    result += `${color}${mark} `;
  })
  console.log(result)
}