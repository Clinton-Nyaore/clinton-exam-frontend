import { IQuestion } from "@/types/exam";
import Question from "./Question";
import { useState } from "react";
import { SignpostButton } from "../inputs";
import { Link } from "react-router-dom";

const QuestionViewer = ({ questionList }: { questionList: IQuestion[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [questions, setQuestions] = useState(questionList);

  const nextQuestion = () => {
    if (currentIndex < questionList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  console.log(questions, "questions");

  const handleUpdateAnswers = (question_id: number, answer_id: number) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        if (question.id !== question_id) return question;

        return {
          ...question,
          answers: question.answers.map((answer) => ({
            ...answer,
            is_correct: answer.id === answer_id,
            selected: answer.id === answer_id, // optional if you’re tracking `selected`
          })),
        };
      })
    );
  };
  

  const handleExamSubmission = () => {};
  return (
    <section className="">
      <div>
        <Question
          question={questions[currentIndex]}
          index={currentIndex + 1}
          length={questionList.length}
          handleUpdateAnswers={handleUpdateAnswers}
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
