import { SignInForm, SignUpForm } from "@/_forms";
import { AuthLayout, MainLayout } from "@/_layouts";
import { ExamList, ExamPage, ExamStart } from "@/_pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Route index path="/exam-start/:exam_name" element={<ExamStart />} />
          <Route index path="/exam/:exam_name" element={<ExamPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
