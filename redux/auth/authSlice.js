import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUserInfo,
  login,
  logout,
  register,
} from "./authOperations";

const authSlice = createSlice({
  name: "authorized",
  initialState: {
    user: { uid: null, name: null, email: null, token: null },
    authorized: false,
    error: null,
  },
  reducers: {
    refreshError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.authorized = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.authorized = true;
      })
      .addCase(getCurrentUserInfo.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.authorized = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user.uid = null;
        state.user.name = null;
        state.user.email = null;
        state.user.token = null;
        state.authorized = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});
export const { refreshError } = authSlice.actions;

export default authSlice.reducer;
