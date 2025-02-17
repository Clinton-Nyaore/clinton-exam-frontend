import { Link, useLocation } from "react-router-dom";

const SwitchLoginSignUp = () => {
  const { pathname } = useLocation();
  return (
    <div className="my-2">
      {pathname == "/sign-in" ? (
        <div>
          <span>You need an account? </span>
          <Link to={"/sign-up"} className="">
            <span className="text-blue-500 hover:text-blue-600">Click here to sign up.</span>
          </Link>
        </div>
      ) : (
        <div>
          <span>Already have an account ? </span>
          <Link to={"/sign-in"} className="">
            <span className="text-blue-500 hover:text-blue-600">Click here to sign in.</span>
          </Link>
        </div>
      )}
    </div>
  );
};
export default SwitchLoginSignUp;
