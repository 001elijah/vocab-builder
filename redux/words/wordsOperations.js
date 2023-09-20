import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWordsCategories } from "../../services/backendAPI";

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
