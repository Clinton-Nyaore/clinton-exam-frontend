import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { RootState } from "@/state/store/store";
import { Footer, Header } from "@/_components/navigation";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isLoggedIn
  );
  const [selectedColor, setSelectedColor] = useState(
    localStorage.getItem("selectedBg")
  );

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "selectedBg") {
        setSelectedColor(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newColor = localStorage.getItem("selectedBg");
      setSelectedColor((prev) => (prev !== newColor ? newColor : prev));
    }, 500); // You can debounce this if needed

    return () => clearInterval(interval);
  }, []);

  console.log(selectedColor, "selectedColor main");

  const { pathname } = useLocation();
  return (
    <main className={`${selectedColor} pb-8`}>
      {isLoggedIn ? (
        <>
          <Header />
          <Outlet />
          {pathname.includes("/exam-page") && <Footer />}
        </>
      ) : (
        <Navigate to={"/sign-in"} />
      )}
    </main>
  );
};
export default MainLayout;
