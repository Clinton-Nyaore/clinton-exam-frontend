// import { IAnswer } from "@/types/exam";

// const Answers = ({
//   answers,
//   question,
//   question_id,
//   handleUpdateAnswers,
// }: {
//   answers: IAnswer[];
//   question: string;
//   question_id: number;
//   handleUpdateAnswers: (arg1: number, arg2: number) => void;
// }) => {
//   function chooseAnswer(index: number) {
//     handleUpdateAnswers(question_id, index);
//     console.log(handleUpdateAnswers(question_id, index));
//     return index;
//   }

//   return (
//     <div>
//       {answers.map((answer, index) => (
//         <div
//           className="flex space-x-4 place-items-center  justify-items-center"
//           key={index}
//         >
//           <label className="flex space-y-2 h-[20px] gap-2 cursor-pointer">
//             <input
//               className=""
//               type="radio"
//               id={question}
//               name={`question-${question_id}`}
//               checked={answer.selected}
//               onClick={() => chooseAnswer(answer.id)}
//               // onChange={() => handleUpdateAnswers(question_id, answer.id)}
//             />
//             {/* <span className="w-5 h-5 rounded-full border-2 border-primary-2 flex items-center justify-center">
//               <span className="w-2.5 h-2.5 rounded-full bg-primary-2 scale-0 peer-checked:scale-100 transition-transform duration-200"></span>
//             </span> */}
//           </label>

//           <div className="flex space-y-2">
//             <p> {answer.text}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Answers;
import { IAnswer } from "@/types/exam";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Answers = ({
  answers,
  question_id,
  handleUpdateAnswers,
}: // question,
{
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
  return (
    <RadioGroup defaultValue="option-one" className="">
      {answers.map((answer, index) => (
        <div key={index} className="flex items-center space-x-2">
          <RadioGroupItem
            onClick={() => chooseAnswer(answer.id)}
            checked={answer.selected}
            className="w-8 h-8 border border-blue-500 bg-gray-300"
            value={index.toString()}
            id={`radio-${index}`}
          />
          <Label htmlFor="option-two">{answer.text}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};
export default Answers;
