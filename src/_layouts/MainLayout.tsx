import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { RootState } from "@/state/store/store";
import { Footer, Header } from "@/_components/navigation";

const MainLayout = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isLoggedIn
  );
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Navigate to={"/sign-in"} />
      )}
    </>
  );
};
export default MainLayout;
