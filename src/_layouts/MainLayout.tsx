import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { RootState } from "@/state/store/store";

const MainLayout = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isLoggedIn
  );
  return <>{isLoggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />}</>;
};
export default MainLayout;
