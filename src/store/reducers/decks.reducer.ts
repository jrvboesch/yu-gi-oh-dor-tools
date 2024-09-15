import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Decks } from "../interfaces/cards.interface";

interface State {
  list: Decks[];
}

const initialState: State = {
  list: [],
};

const decksSlice = createSlice({
  name: "Decks",
  initialState,
  reducers: {
    addDecksData(state, action: PayloadAction<Decks>) {
      state.list = [...state.list, action.payload];
    },
    editDecksData(state, action: PayloadAction<Decks>) {
      state.list = state.list.map((deck) =>
        deck.id === action.payload.id ? action.payload : deck
      );
    },
  },
});

export const { addDecksData, editDecksData } = decksSlice.actions;
export default decksSlice.reducer;
