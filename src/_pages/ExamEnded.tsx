import { Link } from "react-router-dom";

const ExamEnded = () => {
  return (
    <section className="w-[90%] mx-auto">
      <div className="flex flex-col text-center justify-center items-center h-[500px]">
        <h3 className="text-3xl">Exam completed</h3>
        <p>
          You can select another exam{" "}
          <Link className="text-blue-500" to={"/"}>
            here
          </Link>
          .
        </p>
      </div>
    </section>
  );
};
export default ExamEnded;
