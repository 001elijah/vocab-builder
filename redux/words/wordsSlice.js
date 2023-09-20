import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./wordsOperations";

const wordsSlice = createSlice({
  name: "words",
  initialState: {
    categories: null,
    all: null,
    own: null,
    statistics: null,
    tasks: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
    });
  },
});

export default wordsSlice.reducer;
