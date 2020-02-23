Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
function createDeck() {
    let deck = [];
    for (const c of Object.values(enum_1.Color)) {
        for (const m of Object.values(enum_1.Mark)) {
            deck.push({
                color: c,
                mark: m,
            });
        }
    }
    return deck;
}
exports.createDeck = createDeck;
function printDeck(deck) {
    let result = '';
    deck.forEach(card => {
        const { color, mark } = card;
        result += `${color}${mark} `;
    });
    console.log(result);
}
exports.printDeck = printDeck;
