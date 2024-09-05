import { combineReducers } from "@reduxjs/toolkit";
import cards from "./reducers/cards.reducer";
import fusions from "./reducers/fusions.reducer";

const rootReducer = combineReducers({
  cards,
  fusions,
});

export default rootReducer;
