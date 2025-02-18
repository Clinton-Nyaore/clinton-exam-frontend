import { QuestionViewer } from "@/_components/exam";
import { RootState } from "@/state/store/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ExamPage = () => {
  const { exam_name } = useParams();
  const exam = useSelector((state: RootState) => state.examReducer).find(
    (exam) => exam.name == exam_name
  );

  console.log(exam, "exam");

  return (
    <section className="w-[90%] mx-auto">
      {exam?.questions && <QuestionViewer questionList={exam.questions} />}
    </section>
  );
};
export default ExamPage;
