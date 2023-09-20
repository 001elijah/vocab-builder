import { createAsyncThunk } from "@reduxjs/toolkit";
import { createWord, getWordsCategories } from "../../services/backendAPI";
import { logout } from "../auth/authOperations";

export const getCategories = createAsyncThunk(
  "words/getCategories",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const categories = await getWordsCategories();
      return categories;
    } catch (error) {
      alert(error.response.data.message);
      dispatch(logout());
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const createNew = createAsyncThunk(
  "words/createNew",
  async (newWordData, { rejectWithValue }) => {
    try {
      const response = await createWord(newWordData);
      console.log(response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);
