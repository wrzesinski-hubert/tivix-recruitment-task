import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  selectedMinifig?: { name: string; set_num: string; set_img_url: string };
  randomMinifigs: {
    set_num: string;
    name: string;
    set_img_url: string;
    set_url: string;
  }[];
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
  },
});

export const { setMinifig, setRandomMinifigs, setLoadingMinifigs } =
  appSlice.actions;
export default appSlice.reducer;
