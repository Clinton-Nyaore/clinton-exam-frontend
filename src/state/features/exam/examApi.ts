import { BASE_BACKEND_URL } from "@/constants";
import { IExam } from "@/types/exam";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const examApi = createApi({
  reducerPath: "examApi",
  tagTypes: ["Exam"],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_BACKEND_URL }),
  endpoints: (builder) => ({
    getExams: builder.query<IExam[], "">({
      query: () => "exam/exam_api_view/",
      providesTags: ["Exam"],
    }),
  }),
});

export const { useGetExamsQuery } = examApi;
