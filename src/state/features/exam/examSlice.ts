import { IExam } from "@/types/exam";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IExam[] = [
  {
    name: "Chemistry Paper II",
    description: "This exam covers everything you need to know",
    questions: [
      {
        question: "What is the molecular mass of water?",
        answers: [
          { answer: "2grams", correct: false, selected: false },
          { answer: "5grams", correct: true, selected: false },
          { answer: "7grams", correct: false, selected: true },
          { answer: "9grams", correct: false, selected: false },
        ],
      },

      {
        question: "How many moles of energy do we have in 5kg of solid fat?",
        answers: [
          { answer: "100KJ/mol", correct: false, selected: false },
          { answer: "105KJ/mol", correct: true, selected: false },
          { answer: "10050KJ/mol", correct: false, selected: true },
          { answer: "1KJ/mol", correct: false, selected: false },
        ],
      },
    ],
  },
];

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {},
});

export default examSlice.reducer;
