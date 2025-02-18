import { MyButton } from "@/_components/inputs";
import { styles } from ".";

import { RootState } from "@/state/store/store";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ExamStart = () => {
  const { exam_name } = useParams();
  const exams = useSelector((state: RootState) => state.examReducer);

  const exam = exams.find((exam) => exam.name === exam_name);
  return (
    <section className={`${styles} flex `}>
      <div className="w-1/2">
        <img src="/start-exam.jpg" className="h-auto w-full" alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="text-center w-2/3">
          <h3 className="font-bold text-2xl">{exam?.name}</h3>
          <p className="py-3 text-center">{exam?.description}</p>
          <p className="py-2 font-bold text-center">Time: {exam?.timeline}</p>
        </div>
        <MyButton
          className="bg-blue-500 w-1/2 mx-auto hover:bg-blue-400"
          type="button"
        >
          <Link to={`/exam/${exam?.name}`}>Begin my exam</Link>
        </MyButton>
      </div>
    </section>
  );
};
export default ExamStart;
