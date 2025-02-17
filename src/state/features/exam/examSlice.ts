import { IExam } from "@/types/exam";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IExam[] = [];

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {},
});

export default examSlice.reducer;
