import { ReactComponent as Logo } from "assets/logo-dark.svg";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/UrlConstants";

const Auth = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-auth bg-cover bg-right bg-no-repeat xl:bg-left">
      <div className="relative flex w-full flex-col items-center justify-center  bg-overlay-white px-6 2xl:container xl:w-1/2">
        <Link to={`${BASE_URL}`}>
          <Logo className="absolute left-6 top-4" />
        </Link>
        {children}
      </div>
      <div className="relative hidden w-1/2 xl:block"></div>
    </div>
  );
};

export default Auth;
