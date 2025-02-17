import { Navigate, Outlet } from "react-router-dom";

import { SwitchLoginSignUp } from "@/_components/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store/store";

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
          <div className="w-1/3 border shadow-2xl px-4 py-4 rounded-2xl">
            <div className="flex w-full justify-center">
              <img src="/logo.jpeg" className="rounded-full h-32" alt="" />
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
