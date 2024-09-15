import { combineReducers } from "@reduxjs/toolkit";
import cards from "./cards.reducer";
import fusions from "./fusions.reducer";
import decks from "./decks.reducer";

const rootReducer = combineReducers({
  cards,
  fusions,
  decks,
});

export default rootReducer;
