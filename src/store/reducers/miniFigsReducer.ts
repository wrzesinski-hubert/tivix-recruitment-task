import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  selectedMiniFig?: { name: string; set_num: string; set_img_url: string };
  randomMiniFigs: {
    set_num: string;
    name: string;
    set_img_url: string;
    set_url: string;
  }[];
} = {
  selectedMiniFig: undefined,
  randomMiniFigs: [],
};

export const appSlice = createSlice({
  name: "miniFigsReducer",
  initialState,
  reducers: {
    setMiniFig: (state, action) => {
      state.selectedMiniFig = action.payload;
    },
    setRandomMiniFigs: (state, action) => {
      state.randomMiniFigs = action.payload;
    },
  },
});

export const { setMiniFig, setRandomMiniFigs } = appSlice.actions;
export default appSlice.reducer;
