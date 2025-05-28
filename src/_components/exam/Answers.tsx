import { IAnswer } from "@/types/exam";

const Answers = ({ answers, question }: { answers: IAnswer[]; question:string }) => {
  function chooseAnswer(index: number) {
    return index
  }
  return (
    <div>
      {answers.map((answer, index) => (
        <div
          className="flex space-x-4 space-y-4  justify-items-center"
          key={index}
        >
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id={question}
              name={question}
              className="peer hidden"
              onChange={() => chooseAnswer(index)}
            />
            <span className="w-5 h-5 rounded-full border-2 border-primary-2 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-2 scale-0 peer-checked:scale-100 transition-transform duration-200"></span>
            </span>
            <span className="text-sm text-gray-700">{question}</span>
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
