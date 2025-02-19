import { IQuestion } from "@/types/exam";
import Question from "./Question";
import { useState } from "react";
import { MyButton, SignpostButton } from "../inputs";
import { Link } from "react-router-dom";

const QuestionViewer = ({ questionList }: { questionList: IQuestion[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuestion = () => {
    if (currentIndex < questionList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // const prevQuestion = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // };

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
        {/* <MyButton
          disabled={currentIndex === 0}
          onClickHandler={prevQuestion}
          className=""
          type="button"
        >
          Previous
        </MyButton> */}
        {currentIndex !== questionList.length - 1 && (
          <SignpostButton label={nextQuestion} />
        )}

        {currentIndex == questionList.length - 1 && (
          <Link className="text-blue" to={"/exam-end"}>
            <SignpostButton label={handleExamSubmission} />
          </Link>

          // <button
          //   onClick={handleExamSubmission}
          //   className="flex items-center justify-center p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-md"
          // >
          //   <ArrowRight className="w-6 h-6" />
          // </button>
        )}
      </div>
    </section>
  );
};
export default QuestionViewer;
