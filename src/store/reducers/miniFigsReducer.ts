import { createSlice } from "@reduxjs/toolkit";
import { MinifigWithDetailType } from "../../types/types";

const initialState: {
  selectedMinifig?: MinifigWithDetailType;
  randomMinifigs: MinifigWithDetailType[];
  loadingMinifigs: boolean;
} = {
  selectedMinifig: undefined,
  randomMinifigs: [],
  loadingMinifigs: false,
};

export const appSlice = createSlice({
  name: "miniFigsReducer",
  initialState,
  reducers: {
    setMinifig: (state, action) => {
      state.selectedMinifig = action.payload;
    },
    setRandomMinifigs: (state, action) => {
      state.randomMinifigs = action.payload;
    },
    setLoadingMinifigs: (state, action) => {
      state.loadingMinifigs = action.payload;
    },
    setInitial: (state) => {
      state.selectedMinifig = undefined;
      state.randomMinifigs = [];
      state.loadingMinifigs = false;
    },
  },
});

export const { setMinifig, setRandomMinifigs, setLoadingMinifigs, setInitial } =
  appSlice.actions;
export default appSlice.reducer;
