import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  registerUserApi,
  loginUserApi,
  currentUserApi,
} from "../../services/backendAPI";

export const register = createAsyncThunk(
  "authorized/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const userData = await registerUserApi({ name, email, password });
      return {
        user: {
          name: userData.name,
          email: userData.email,
          token: userData.token,
        },
      };
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error?.response?.data?.message ?? error.message);
    }
  }
);

export const login = createAsyncThunk(
  "authorized/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userData = await loginUserApi({ email, password });
      // setTimeout(() => {
      //   dispatch(getCurrentUserInfo());
      // }, 0);

      return {
        user: {
          name: userData.name,
          email: userData.email,
          token: userData.token,
        },
      };
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserInfo = createAsyncThunk(
  "authorized/getCurrentUserInfo",
  async (_, { getState, rejectWithValue, dispatch }) => {
    const { token } = getState().authorized.user;
    try {
      const userData = await currentUserApi(token);

      return {
        user: {
          uid: userData._id,
          name: userData.name,
          email: userData.email,
          token: userData.token,
        },
      };
    } catch (error) {
      alert(error.response.data.message);
      if ((error.response.data.message = "Unauthorized")) {
        return dispatch(logout());
      }
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { token } = getState().authorized.user;
      return Boolean(token);
    },
  }
);

export const logout = createAsyncThunk(
  "authorized/logout",
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().authorized.user;
    try {
      // await logoutUserApi(token);
      return null;
    } catch (error) {
      alert(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);
