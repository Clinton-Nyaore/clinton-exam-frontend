// import { BASE_IMAGE_URL } from "@/constants";
import { useGetExamsQuery } from "@/state/features/exam/examApi";
import { Link } from "react-router-dom";

import logo from "@/assets/logo.jpeg";

const ExamList = () => {
  const { data: examList } = useGetExamsQuery("");
  return (
    <section className="w-[90%] mx-auto">
      <h3 className="my-3 text-2xl">Please select an exam</h3>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 ">
        {examList?.map((exam, index) => {
          return (
            <Link key={index} to={`/exam-start/${exam.name}`}>
              <section className="rounded shadow-md hover:cursor-pointer">
                <img className="w-44 rounded-md text-2xl" src={logo} alt="" />
                <div className="p-2 text-center">
                  <p className="font-bold text-md ">{exam.name}</p>
                  <p className="text-sm">{exam.description}</p>
                  <p className="font-bold text-gray-500">{exam.timeline}</p>
                </div>
              </section>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default ExamList;
