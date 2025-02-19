import { IAnswer } from "@/types/exam";

const Answers = ({ answers, question }: { answers: IAnswer[]; question:string }) => {
  function chooseAnswer(index: number) {
    console.log(`Selected answer: ${answers[index].text}`);
  }
  return (
    <div>
      {answers.map((answer, index) => (
        <div
          className="flex space-x-4 space-y-4  justify-items-center"
          key={index}
        >
          <div>
            <input
              type="radio"
              id={question}
              name={question}
              className="cursor-pointer w-6 h-6"
              onChange={() => chooseAnswer(index)}
            />
          </div>
          <div className="flex space-y-2">
            <p> {answer.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Answers;
