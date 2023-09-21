import { createSlice } from "@reduxjs/toolkit";
import { addWordFromUser, createNew, getAll, getCategories } from "./wordsOperations";

const wordsSlice = createSlice({
  name: "words",
  initialState: {
    categories: null,
    all: {
      results: [],
      totalPages: null,
      page: null,
      perPage: null
    },
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
      })
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.all.results.push(...payload.results);
        state.all.totalPages = payload.totalPages;
        state.all.page = payload.page;
        state.all.perPage = payload.perPage;
      })
      .addCase(addWordFromUser.fulfilled, (state, { payload }) => {
        state.own.push(payload);
      });
  },
});

export default wordsSlice.reducer;
