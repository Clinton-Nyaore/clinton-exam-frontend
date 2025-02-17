import { SwitchLoginSignUp } from "@/_components/navigation";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="flex justify-center items-center w-full h-screen main-bg">
      <div className="w-1/3 border shadow-2xl px-4 py-4 rounded-2xl">
        <div className="flex w-full justify-center">
          <img src="/logo.jpeg" className="rounded-full h-32" alt="" />
        </div>
        <Outlet />
        <SwitchLoginSignUp />
      </div>
    </section>
  );
};
export default AuthLayout;
