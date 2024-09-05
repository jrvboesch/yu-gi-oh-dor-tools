import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cards } from "../interfaces/cards.interface";

interface State {
  list: Cards[];
}

const initialState: State = {
  list: [],
};

const cardsSlice = createSlice({
  name: "Cards",
  initialState,
  reducers: {
    setCardData(state, action: PayloadAction<Cards[]>) {
      state.list = action.payload;
    },
  },
});

export const { setCardData } = cardsSlice.actions;
export default cardsSlice.reducer;
