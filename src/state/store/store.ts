import { configureStore } from "@reduxjs/toolkit";
import { authApi, authReducer } from "../features/auth";
import { examApi, examReducer, headerReducer } from "../features/exam";


const store = configureStore({
  reducer: {
    // Authentication
    [authApi.reducerPath]: authApi.reducer,
    authReducer: authReducer,

    // Exam
    examReducer: examReducer,
    [examApi.reducerPath]: examApi.reducer,

    // Header
    headerReducer: headerReducer,
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
