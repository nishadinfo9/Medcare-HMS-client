import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: true,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      state.loading = false;
    },
    currentUser(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
  },
});
export const { login, logout, currentUser } = authSlice.actions;
export default authSlice.reducer;
