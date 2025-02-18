import { configureStore } from "@reduxjs/toolkit";
import { authApi, authReducer } from "../features/auth";
import { examApi, examReducer } from "../features/exam";


const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authReducer: authReducer,

    // Exam
    examReducer: examReducer,
    [examApi.reducerPath]: examApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, examApi.middleware]),
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
