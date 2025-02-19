import { examName, removeExamName } from "@/state/features/exam/headerSlice";
import { CrossIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const examHeaderName = useSelector(examName);
  const dispatch = useDispatch();

  function handleClearHeader() {
    dispatch(removeExamName());
  }

  const { pathname } = useLocation();

  console.log(pathname, "pathname");

  console.log(examHeaderName, "examHeaderName");
  return (
    <>
      <div className="relative flex place-items-center justify-between w-[80%] mx-auto ">
        <img src="/logo.jpeg" className="h-24" alt="" />

        {pathname.includes("/exam-page") && (
          <div>
            <p className="font-bold text-2xl text-gray-600">{examHeaderName}</p>
          </div>
        )}

        {pathname.includes("/exam-page") && (
          <Link onClick={handleClearHeader} to={"/"}>
            <div
              className="bg-gray-300 p-2 hover:cursor-pointer flex space-x-2 rounded"
              id="#user-profile"
            >
              <div className="rotate-45">
                <CrossIcon />
              </div>
              <span>CLOSE</span>
            </div>
          </Link>
        )}
      </div>

      <div className="ribbon w-full mt-2"></div>
    </>
  );
};
export default Header;
