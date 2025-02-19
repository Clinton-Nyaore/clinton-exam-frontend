import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { RootState } from "@/state/store/store";
import { Footer, Header } from "@/_components/navigation";

const MainLayout = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isLoggedIn
  );
  const {pathname}=useLocation()
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <Outlet />
          {pathname.includes("/exam-page") && <Footer />}
        </>
      ) : (
        <Navigate to={"/sign-in"} />
      )}
    </>
  );
};
export default MainLayout;
