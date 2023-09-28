import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/logo-dark.svg";
import { BASE_URL } from "constants/UrlConstants";

const Auth = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-faded-green">
      <div className="relative flex w-full flex-col items-center  justify-center px-6 2xl:container xl:w-1/2">
        <Link to={`${BASE_URL}`}>
          <Logo className="absolute left-6 top-4" />
        </Link>
        {children}
      </div>
      <div className="relative hidden w-1/2 pb-2 pr-2 pt-2 xl:block">
        <div className="h-full rounded-xl bg-auth bg-cover bg-left-top"></div>
      </div>
    </div>
  );
};

export default Auth;
