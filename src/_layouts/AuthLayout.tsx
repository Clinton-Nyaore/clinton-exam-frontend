import { Navigate, Outlet } from "react-router-dom";

import { SwitchLoginSignUp } from "@/_components/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store/store";
import { icons } from "@/lib/icons";

const AuthLayout = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isLoggedIn
  );

  return (
    <>
      {isLoggedIn ? (
        <Navigate to={"/"} />
      ) : (
        <section className="flex justify-center items-center w-full h-screen main-bg">
          <div className="sm:w-1/3 shadow-2xl px-4 py-4 rounded-2xl">
            <div className="flex w-full justify-center">
              <img src={icons.headerLogo} className="rounded-full h-32" alt="" />
            </div>
            <Outlet />
            <SwitchLoginSignUp />
          </div>
        </section>
      )}
    </>
  );
};
export default AuthLayout;
