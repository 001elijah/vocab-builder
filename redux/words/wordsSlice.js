import { createSlice } from "@reduxjs/toolkit";
import {
  addWordFromUser,
  createNew,
  deleteOwnWord,
  getAll,
  getCategories,
  getOwn,
  getOwnFiltered,
} from "./wordsOperations";
import { logout } from "../auth/authOperations";

const wordsSlice = createSlice({
  name: "words",
  initialState: {
    categories: null,
    all: {
      results: [],
      totalPages: null,
      page: null,
      perPage: null,
    },
    own: {
      results: [],
      totalPages: null,
      page: null,
      perPage: null,
    },
    statistics: null,
    tasks: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(createNew.fulfilled, (state, { payload }) => {
        state.own.results.push(payload);
      })
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.all.results.push(...payload.results);
        state.all.totalPages = payload.totalPages;
        state.all.page = payload.page;
        state.all.perPage = payload.perPage;
      })
      .addCase(getOwn.fulfilled, (state, { payload }) => {
        state.own.results.push(...payload.results);
        state.own.totalPages = payload.totalPages;
        state.own.page = payload.page;
        state.own.perPage = payload.perPage;
      })
      .addCase(getOwnFiltered.fulfilled, (state, { payload }) => {
        state.own.results = payload.results;
        state.own.totalPages = payload.totalPages;
        state.own.page = payload.page;
        state.own.perPage = payload.perPage;
      })
      .addCase(addWordFromUser.fulfilled, (state, { payload }) => {
        console.log("before", state.own.results.length);
        state.own.results.push(payload);
        console.log("after", state.own.results.length);
      })
      .addCase(deleteOwnWord.fulfilled, (state, { payload }) => {
        state.own.results = state.own.results.filter(
          (word) => word._id !== payload.id
        );
      })
      .addCase(logout.fulfilled, (state) => {
        state.categories = null;
        state.all.results = [];
        state.all.totalPages = null;
        state.all.page = null;
        state.all.perPage = null;
        state.own.results = [];
        state.own.totalPages = null;
        state.own.page = null;
        state.own.perPage = null;
        state.statistics = null;
        state.tasks = null;
      });
  },
});

export default wordsSlice.reducer;
