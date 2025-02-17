import { MyButton } from "@/_components/inputs";
import { styles } from ".";

const ExamStart = () => {
  return (
    <section className={`${styles} flex `}>
      <div className="w-1/2">
        <img src="/start-exam.jpg" className="h-auto w-full" alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="text-center w-2/3">
          <h3 className="font-bold text-2xl">Exams</h3>
          <p className="py-3 text-center">
            Please select on start exam to begin your assessment. This test
            takes 3hrs only of non-renewable time
          </p>
        </div>
        <MyButton
          type="button"
          className="bg-blue-500 w-1/2 mx-auto hover:bg-blue-400"
        >
          Begin my exam
        </MyButton>
      </div>
    </section>
  );
};
export default ExamStart;
