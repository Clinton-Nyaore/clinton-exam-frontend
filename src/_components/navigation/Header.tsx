import { examName, removeExamName } from "@/state/features/exam/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import headerLogo from '@/assets/logo.jpeg'

const Header = () => {
  const examHeaderName = useSelector(examName);
  const dispatch = useDispatch();

  function handleClearHeader() {
    dispatch(removeExamName());
  }

  const { pathname } = useLocation();

  return (
    <section className="border-t-red-400 border-t-4">
      <div className="relative flex place-items-center justify-between w-[80%] mx-auto ">
        <div className="flex place-items-center justify-around w-1/4">
          <img src={headerLogo} className="h-22 mr-auto" alt="" />

          {pathname.includes("/exam-page") && (
            <div>
              <p className="font-bold text-xl text-gray-600">
                {examHeaderName}
              </p>
            </div>
          )}
        </div>

        {pathname.includes("/exam-page") && (
          <Link onClick={handleClearHeader} to={"/"}>
            <div
              className="bg-gray-300 p-2.5 hover:cursor-pointer place-items-center flex space-x-2"
              id="#user-profile "
            >
              <div className="bg-black rounded-full w-6 h-6 flex place-items-center justify-center items-center">
                <span className="text-white text-lg font-extrabold">x</span>
              </div>
              <span className="font-bold">CLOSE</span>
            </div>
          </Link>
        )}
      </div>

      <div className="ribbon w-full mt-2"></div>
    </section>
  );
};
export default Header;
