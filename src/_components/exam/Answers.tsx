import { IAnswer } from "@/types/exam";
import { Checkbox } from "../inputs";

const Answers = ({ answers }: { answers: IAnswer[] }) => {
  function chooseAnswer() {}
  return (
    <div>
      {answers.map((answer, index) => (
        <div className="flex space-x-3" key={index}>
          <div>
            <Checkbox
              checked={answer.selected}
              id={index.toString()}
              className=""
              name={index.toString()}
              onChange={chooseAnswer}
            />
          </div>
          <div className="flex space-y-2">
            <span>{`${String.fromCharCode(65 + index)}.  `} </span>
            <p> {answer.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Answers;
