import { IQuestion } from "@/types/exam";
import Question from "./Question";
import { useState } from "react";
import { SignpostButton } from "../inputs";
import { Link } from "react-router-dom";

const QuestionViewer = ({ questionList }: { questionList: IQuestion[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuestion = () => {
    if (currentIndex < questionList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleExamSubmission = () => {};
  return (
    <section className="">
      <div>
        <Question
          question={questionList[currentIndex]}
          index={currentIndex + 1}
          length={questionList.length}
        />
      </div>

      <div
        id="#navigation-buttons"
        className="flex justify-end space-x-4 my-12"
      >
        {currentIndex !== questionList.length - 1 && (
          <SignpostButton label={nextQuestion} />
        )}

        {currentIndex == questionList.length - 1 && (
          <Link className="text-blue" to={"/exam-end"}>
            <SignpostButton label={handleExamSubmission} />
          </Link>
        )}
      </div>
    </section>
  );
};
export default QuestionViewer;
