import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addWord,
  createWord,
  deleteWord,
  editWord,
  getAllWords,
  getOwnWords,
  getStatistics,
  getTasks,
  getWordsCategories,
  postAnswers,
} from "../../services/backendAPI";
import { logout } from "../auth/authOperations";

export const getCategories = createAsyncThunk(
  "words/getCategories",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const categories = await getWordsCategories();
      return categories;
    } catch (error) {
      alert(error.response.data.message);
      if ((error.response.data.message = "Unauthorized")) {
        return dispatch(logout());
      }
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const createNew = createAsyncThunk(
  "words/createNew",
  async (newWordData, { rejectWithValue, dispatch }) => {
    try {
      const response = await createWord(newWordData);
      console.log("words/createNew =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      if ((error.response.data.message = "Unauthorized")) {
        return dispatch(logout());
      }
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const getAll = createAsyncThunk(
  "words/getAll",
  async (queryParams, { rejectWithValue, dispatch }) => {
    try {
      const response = await getAllWords(queryParams);
      // console.log("words/getAll =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      if ((error.response.data.message = "Unauthorized")) {
        return dispatch(logout());
      }
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const getOwn = createAsyncThunk(
  "words/getOwn",
  async (queryParams, { rejectWithValue, dispatch }) => {
    try {
      const response = await getOwnWords(queryParams);
      // console.log("words/getOwn =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      if ((error.response.data.message = "Unauthorized")) {
        return dispatch(logout());
      }
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const getOwnFiltered = createAsyncThunk(
  "words/getOwnFiltered",
  async (queryParams, { rejectWithValue, dispatch }) => {
    try {
      const response = await getOwnWords(queryParams);
      // console.log("words/getOwnFiltered =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      if ((error.response.data.message = "Unauthorized")) {
        return dispatch(logout());
      }
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const getAllFiltered = createAsyncThunk(
  "words/getAllFiltered",
  async (queryParams, { rejectWithValue, dispatch }) => {
    try {
      const response = await getAllWords(queryParams);
      console.log("words/getAllFiltered =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      if ((error.response.data.message = "Unauthorized")) {
        return dispatch(logout());
      }
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const addWordFromUser = createAsyncThunk(
  "words/addWordFromUser",
  async (queryParams, { rejectWithValue, dispatch }) => {
    try {
      const response = await addWord(queryParams);
      console.log("words/addWordFromUser =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      if ((error.response.data.message = "Unauthorized")) {
        return dispatch(logout());
      }
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const deleteOwnWord = createAsyncThunk(
  "words/deleteOwnWord",
  async (queryParams, { rejectWithValue, dispatch }) => {
    try {
      const response = await deleteWord(queryParams);
      console.log("words/deleteOwnWord =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      if ((error.response.data.message = "Unauthorized")) {
        return dispatch(logout());
      }
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const editOwnWord = createAsyncThunk(
  "words/editOwnWord",
  async (newWordData, { rejectWithValue, dispatch }) => {
    try {
      const response = await editWord(newWordData);
      console.log("words/editOwnWord =>", response);
      alert("Edit success!");
      return response;
    } catch (error) {
      alert(error.response.data.message);
      if ((error.response.data.message = "Unauthorized")) {
        return dispatch(logout());
      }
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const getUserStatistics = createAsyncThunk(
  "words/getUserStatistics",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await getStatistics();
      console.log("words/getUserStatistics =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      if ((error.response.data.message = "Unauthorized")) {
        return dispatch(logout());
      }
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const getUserTasks = createAsyncThunk(
  "words/getUserTasks",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await getTasks();
      console.log("words/getUserTasks =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      if ((error.response.data.message = "Unauthorized")) {
        return dispatch(logout());
      }
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const postUserAnswers = createAsyncThunk(
  "words/postUserAnswers",
  async (answersArray, { rejectWithValue, dispatch }) => {
    try {
      const response = await postAnswers(answersArray);
      console.log("words/postUserAnswers =>", response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
      // console.log(error.response.data.message === 'Unauthorized');
      if (error.response.data.message === "Unauthorized") {
        return dispatch(logout());
      }
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);
