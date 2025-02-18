import { IQuestion } from "@/types/exam";
import Question from "./Question";
import { useState } from "react";
import { MyButton } from "../inputs";
// import { ArrowRight } from "lucide-react";

const QuestionViewer = ({ questionList }: { questionList: IQuestion[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(questionList, "questionList");

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
    <section className="relative exam-page">
      <div>
        <Question
          question={questionList[currentIndex]}
          index={currentIndex + 1}
          length={questionList.length}
        />
      </div>

      <div
        id="#navigation-buttons"
        className="flex justify-end space-x-4 absolute bottom-8 right-7"
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
          <MyButton
            disabled={currentIndex === questionList.length - 1}
            onClickHandler={nextQuestion}
            className=""
            type="button"
          >
            Next
          </MyButton>
        )}

        {currentIndex == questionList.length - 1 && (
          <MyButton
            disabled={currentIndex !== questionList.length - 1}
            onClickHandler={handleExamSubmission}
            className=""
            type="button"
          >
            Submit
          </MyButton>
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
