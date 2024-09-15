export interface Cards {
  id: string;
  name: string;
  deckcost: string;
  cardtype: string;
  attribute: string;
  type: string;
  level: string;
  attack: string;
  defense: string;
  imageUrl: string;
  effect?: string;
}

export interface Fusions {
  left: string;
  right: string;
  output: string;
  type: string;
  untested: string;
}
export interface Decks {
  id: string;
  name: string;
  leader: Cards;
  cards: Cards[];
}
