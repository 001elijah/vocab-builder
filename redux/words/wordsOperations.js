import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addWord,
  createWord,
  deleteWord,
  getAllWords,
  getOwnWords,
  getWordsCategories,
} from "../../services/backendAPI";

export const getCategories = createAsyncThunk(
  "words/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await getWordsCategories();
      return categories;
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const createNew = createAsyncThunk(
  "words/createNew",
  async (newWordData, { rejectWithValue }) => {
    try {
      const response = await createWord(newWordData);
      console.log("words/createNew =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const getAll = createAsyncThunk(
  "words/getAll",
  async (queryParams, { rejectWithValue }) => {
    try {
      const response = await getAllWords(queryParams);
      // console.log("words/getAll =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const getOwn = createAsyncThunk(
  "words/getOwn",
  async (queryParams, { rejectWithValue }) => {
    try {
      const response = await getOwnWords(queryParams);
      // console.log("words/getOwn =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const getOwnFiltered = createAsyncThunk(
  "words/getOwnFiltered",
  async (queryParams, { rejectWithValue }) => {
    try {
      const response = await getOwnWords(queryParams);
      // console.log("words/getOwnFiltered =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const addWordFromUser = createAsyncThunk(
  "words/addWordFromUser",
  async (queryParams, { rejectWithValue }) => {
    try {
      const response = await addWord(queryParams);
      console.log("words/addWordFromUser =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const deleteOwnWord = createAsyncThunk(
  "words/deleteOwnWord",
  async (queryParams, { rejectWithValue }) => {
    try {
      const response = await deleteWord(queryParams);
      console.log("words/deleteOwnWord =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);
