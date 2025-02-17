import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

interface initialStateTypes {
  isLoggedIn: boolean;
  token: string | null;
}

const initialState: initialStateTypes = {
  isLoggedIn: !!localStorage.getItem("clintonAuthToken"),
  token: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("clintonAuthToken");
      state.isLoggedIn = false;
      state.token = null;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (state, action) => {
        const { token } = action.payload;
        localStorage.setItem("clintonAuthToken", token);
        state.token = token;
        state.isLoggedIn = true;
      }
    );
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
