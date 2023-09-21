import { createAsyncThunk } from "@reduxjs/toolkit";
import { addWord, createWord, getAllWords, getWordsCategories } from "../../services/backendAPI";
import { logout } from "../auth/authOperations";

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
)

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
)