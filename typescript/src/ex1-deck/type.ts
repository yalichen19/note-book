import { Color, Mark } from './enum';

export type Card = {
  color: Color,
  mark: Mark,
}

export type Deck = Card[]