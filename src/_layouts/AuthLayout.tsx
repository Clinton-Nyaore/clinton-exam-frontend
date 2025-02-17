import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="flex justify-center items-center w-full h-screen main-bg">
      <div>
        <Outlet />
      </div>
    </section>
  );
};
export default AuthLayout;
