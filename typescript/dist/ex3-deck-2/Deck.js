Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
class Deck {
    constructor(cards) {
        this.cards = [];
        if (cards) {
            this.cards = cards;
        }
        else {
            this.init();
        }
    }
    init() {
        for (const c of Object.values(enum_1.Color)) {
            for (const m of Object.values(enum_1.Mark)) {
                const card = {
                    color: c,
                    mark: m,
                    getString: () => {
                        return c + '' + m;
                    }
                };
                this.cards.push(card);
            }
        }
        this.cards.push({
            type: 'big',
            getString: () => {
                return 'big joker';
            }
        });
        this.cards.push({
            type: 'small',
            getString: () => {
                return 'small joker';
            }
        });
    }
    print() {
        let result = '';
        this.cards.forEach(card => {
            result += card.getString() + ' ';
        });
        console.log(result);
    }
    shuffle() {
        let length = this.cards.length;
        this.cards.forEach((card, index) => {
            const randomIndex = this.getRandom(index, length);
            this.cards[index] = this.cards[randomIndex];
            this.cards[randomIndex] = card;
        });
    }
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    takeCards(n) {
        const cards = [];
        const maxNum = this.cards.length;
        for (let i = 0; i < Math.min(n, maxNum); i++) {
            const randomIndex = this.getRandom(0, this.cards.length);
            cards.push(this.cards.splice(randomIndex, 1)[0]);
        }
        return new Deck(cards);
    }
    license() {
        const num = Math.floor(this.cards.length / 3) - 1;
        return [this.takeCards(num), this.takeCards(num), this.takeCards(num), this.takeCards(this.cards.length)];
    }
}
exports.Deck = Deck;
