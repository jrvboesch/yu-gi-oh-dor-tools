import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Fusions } from "../interfaces/cards.interface";

interface State {
  list: Fusions[];
}

const initialState: State = {
  list: [],
};

const fusionsSlice = createSlice({
  name: "Fusions",
  initialState,
  reducers: {
    setFusionsData(state, action: PayloadAction<Fusions[]>) {
      state.list = action.payload;
    },
  },
});

export const { setFusionsData } = fusionsSlice.actions;
export default fusionsSlice.reducer;
