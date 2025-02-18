import { IQuestion } from "@/types/exam";
import Answers from "./Answers";

const Question = ({
  question,
  index,
}: {
  question: IQuestion;
  index: number;
}) => {
  return (
    <div>
      <div className="flex font-bld text-2xl space-x-4">
        <span>{index + 1}. </span>
        <p className="">{question.question}</p>
      </div>

      <div className="ml-8 mt-2">
        <Answers answers={question.answers} />
      </div>
    </div>
  );
};
export default Question;
