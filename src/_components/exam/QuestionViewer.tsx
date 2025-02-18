import { IQuestion } from "@/types/exam";
import Question from "./Question";
import { useState } from "react";
import { MyButton } from "../inputs";

const QuestionViewer = ({ questionList }: { questionList: IQuestion[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuestion = () => {
    if (currentIndex < questionList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleExamSubmission = () => {};
  return (
    <section className="relative exam-page">
      <div>
        <Question question={questionList[currentIndex]} index={currentIndex} />
      </div>

      <div
        id="#navigation-buttons"
        className="flex justify-end space-x-4 absolute bottom-8 right-7"
      >
        <MyButton
          disabled={currentIndex === 0}
          onClickHandler={prevQuestion}
          className=""
          type="button"
        >
          Previous
        </MyButton>
        <MyButton
          disabled={currentIndex === questionList.length - 1}
          onClickHandler={nextQuestion}
          className=""
          type="button"
        >
          Next
        </MyButton>
        <MyButton
          disabled={currentIndex !== questionList.length - 1}
          onClickHandler={handleExamSubmission}
          className=""
          type="button"
        >
          Submit
        </MyButton>
      </div>
    </section>
  );
};
export default QuestionViewer;
