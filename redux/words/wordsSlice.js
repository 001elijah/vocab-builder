import { createSlice } from "@reduxjs/toolkit";
import { createNew, getCategories } from "./wordsOperations";

const wordsSlice = createSlice({
  name: "words",
  initialState: {
    categories: null,
    all: null,
    own: [],
    statistics: null,
    tasks: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(createNew.fulfilled, (state, { payload }) => {
        state.own.push(payload);
      });
  },
});

export default wordsSlice.reducer;
