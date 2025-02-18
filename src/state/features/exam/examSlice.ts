import { IExam } from "@/types/exam";
import { createSlice } from "@reduxjs/toolkit";
import { examApi } from "./examApi";

const initialState: IExam[] = [];

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      examApi.endpoints.getExams.matchFulfilled,
      (state, action) => {
        console.log(action.payload, "all exams");
        return action.payload;
      }
    );
  },
});

export default examSlice.reducer;
