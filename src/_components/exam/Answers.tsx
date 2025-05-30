import { IAnswer } from "@/types/exam";

const Answers = ({
  answers,
  question,
  question_id,
  handleUpdateAnswers,
}: {
  answers: IAnswer[];
  question: string;
  question_id: number;
  handleUpdateAnswers: (arg1: number, arg2: number) => void;
}) => {
  function chooseAnswer(index: number) {
    handleUpdateAnswers(question_id, index);
    console.log(handleUpdateAnswers(question_id, index));
    return index;
  }

  // console.log(answers)
  return (
    <div>
      {answers.map((answer, index) => (
        <div
          className="flex space-x-4 place-items-center  justify-items-center"
          key={index}
        >
          <label className="flex space-y-2 h-[20px] gap-2 cursor-pointer">
            <input
              className=""
              type="radio"
              id={question}
              name={`question-${question_id}`}
              checked={answer.selected}
              onClick={() => chooseAnswer(answer.id)}
              // onChange={() => handleUpdateAnswers(question_id, answer.id)}
            />
            {/* <span className="w-5 h-5 rounded-full border-2 border-primary-2 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-2 scale-0 peer-checked:scale-100 transition-transform duration-200"></span>
            </span> */}
          </label>

          <div className="flex space-y-2">
            <p> {answer.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Answers;
