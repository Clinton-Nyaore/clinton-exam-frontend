import { RootState } from "@/state/store/store";
import { createSlice } from "@reduxjs/toolkit";

interface IHeaderState {
  examName: string;
}
const initialState: IHeaderState = {
  examName: "",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    addExamName: (state, action) => {
      state.examName = action.payload;
    },

    removeExamName: (state) => {
      state.examName = "";
    },
  },
});

export const { addExamName, removeExamName } = headerSlice.actions;

export default headerSlice.reducer;

export const examName = (state: RootState) => state.headerReducer.examName;
