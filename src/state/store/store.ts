import { configureStore } from "@reduxjs/toolkit";
import { authApi, authReducer } from "../features/auth";

// ...

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authReducer: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
