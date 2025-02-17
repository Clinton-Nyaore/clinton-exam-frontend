import React from "react";
import Routing from "./Routing";
import { ToastContainer, Bounce } from "react-toastify";

const App = () => {
  return (
    <React.Fragment>
      <Routing />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </React.Fragment>
  );
};
export default App;
