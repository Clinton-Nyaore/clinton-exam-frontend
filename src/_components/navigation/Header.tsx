import { examName, removeExamName } from "@/state/features/exam/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import headerLogo from "@/assets/logo.jpeg";
import Logout from "@/_forms/Logout";

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
        <div className="flex place-items-center space-x-6 w-2/4">
          
          {pathname == "/" ? (
            <Logout />
          ) : (
            <img src={headerLogo} className="h-22" alt="" />
          )}

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clip-rule="evenodd"
                />
              </svg>

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
