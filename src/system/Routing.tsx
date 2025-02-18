import { SignInForm, SignUpForm } from "@/_forms";
import { AuthLayout, MainLayout } from "@/_layouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExamEnded, ExamList, ExamPage, ExamStart } from "@/_pages";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        
        <Route element={<MainLayout />}>
          <Route index path="/" element={<ExamList />} />
          <Route index path="/exam-end" element={<ExamEnded />} />
          <Route index path="/exam/:exam_name" element={<ExamPage />} />
          <Route index path="/exam-start/:exam_name" element={<ExamStart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
