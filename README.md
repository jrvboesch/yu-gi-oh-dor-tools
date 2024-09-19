# Yu-Gi-Oh Duelists of the Roses

![npm version](https://img.shields.io/npm/v/npm)
![React version](https://img.shields.io/badge/react-18.3.1-blue)
![Redux version](https://img.shields.io/badge/redux-9.1.2-purple)
![Ant Design version](https://img.shields.io/badge/ant--design-5.20.5-green)

I’ve always been a huge fan of Yu-Gi-Oh!, especially the game "Duel of Roses." However, one of the most frustrating aspects of playing was trying to figure out the fusions. Searching through wikis and forums was a nightmare, and it took far too long to find what I needed. This project is my way of solving that issue, creating a more accessible and user-friendly fusion guide for Duel of Roses.

## Project information

```
// This is the information used into this project

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

```

## Project Live

This project is live on GitHub Pages! You can use the application directly by visiting the following link:

[Visit Duel of Roses Fusion Guide](https://jrvboesch.github.io/yu-gi-oh-dor-tools/)

## Thanks

- Big thanks to [Yu-Gi-Oh! Wiki](https://yugioh.fandom.com/wiki/Yu-Gi-Oh!_Wiki) for providing essential info about cards and gameplay.
- Special thanks to the creators of the [YGO-DotR-FusionCalc](https://github.com/Solumin/YGO-DotR-FusionCalc) repo for the comprehensive fusion database that made this project possible.
