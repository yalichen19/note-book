import { Card, NormalCard, Joker } from './type';
import { Color, Mark } from './enum';

export class Deck {
  private cards: Card[] = []

  constructor(cards?: Card[]) {
    if (cards) {
      this.cards = cards
    } else {
      this.init()
    }
  }

  private init() {
    for (const c of Object.values(Color)) {
      for (const m of Object.values(Mark)) {
        const card: NormalCard = {
          color: c,
          mark: m,
          getString: () => {
            return c + '' + m;
          }
        }
        this.cards.push(card)
      }
    }
    this.cards.push({
      type: 'big',
      getString: () => {
        return 'big joker';
      }
    } as Joker)
    this.cards.push({
      type: 'small',
      getString: () => {
        return 'small joker';
      }
    } as Joker)
  }

  print() {
    let result = '';
    this.cards.forEach(card => {
      result += card.getString() + ' ';
    })
    console.log(result)
  }

  shuffle() {
    let length = this.cards.length;
    this.cards.forEach((card, index) => {
      const randomIndex = this.getRandom(index, length)
      this.cards[index] = this.cards[randomIndex]
      this.cards[randomIndex] = card;
    })
  }

  private getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  private takeCards(n: number):Deck {
    const cards:Card[] = [];
    const maxNum = this.cards.length;
    for(let i = 0; i< Math.min(n, maxNum); i++) {
      const randomIndex = this.getRandom(0, this.cards.length)
      cards.push(this.cards.splice(randomIndex, 1)[0])
    }
    return new Deck(cards);
  }

  license():[Deck, Deck, Deck, Deck] {
    const num = Math.floor(this.cards.length / 3) - 1;
    return [this.takeCards(num), this.takeCards(num), this.takeCards(num), this.takeCards(this.cards.length)];
  }
}