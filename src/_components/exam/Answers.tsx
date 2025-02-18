import { IAnswer } from "@/types/exam";

const Answers = ({ answers, question }: { answers: IAnswer[]; question:string }) => {
  function chooseAnswer(index: number) {
    console.log(`Selected answer: ${answers[index].text}`);
  }
  return (
    <div>
      {answers.map((answer, index) => (
        <div className="flex space-x-3 place-items-center" key={index}>
          <div>
            <input
              type="radio"
              id={question}
              name={question}
              className="cursor-pointer"
              onChange={() => chooseAnswer(index)}
            />
          </div>
          <div className="flex space-y-2">
            {/* <span>{`${String.fromCharCode(65 + index)}.  `} </span> */}
            <p> {answer.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Answers;
