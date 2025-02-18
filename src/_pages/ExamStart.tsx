import { MyButton } from "@/_components/inputs";
import { styles } from ".";

import { RootState } from "@/state/store/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ExamStart = () => {
  const exam = useSelector((state: RootState) => state.examReducer);

  const exam1 = exam[0];
  return (
    <section className={`${styles} flex `}>
      <div className="w-1/2">
        <img src="/start-exam.jpg" className="h-auto w-full" alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="text-center w-2/3">
          <h3 className="font-bold text-2xl">{exam1.name}</h3>
          <p className="py-3 text-center">{exam1.description}</p>
          <p className="py-2 font-bold text-center">Time: {exam1.timeline}</p>
        </div>
        <MyButton
          className="bg-blue-500 w-1/2 mx-auto hover:bg-blue-400"
          type="button"
        >
          <Link to={`/exam/${exam1.name}`}>Begin my exam</Link>
        </MyButton>
      </div>
    </section>
  );
};
export default ExamStart;
