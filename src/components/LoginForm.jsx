import { Link } from "react-router-dom";
import { SIGNUP, RESET_PASSWORD } from "constants/UrlConstants.js";

const LoginForm = () => {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <h3 className="z-2 mb-6 text-dark-green">Welcome Back!</h3>
      <form onSubmit={handleLoginSubmit} className="auth-form">
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            autoFocus
            placeholder="Enter your email"
          />
        </fieldset>
        <fieldset>
          <div className="flex justify-between">
            <label htmlFor="password">Password:</label>
            <Link
              to={`${RESET_PASSWORD}`}
              className="mb-1 inline-block text-sm font-bold tracking-wide text-dark-green underline"
              href="#"
            >
              Forgot Password?
            </Link>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </fieldset>
        <input type="submit" value="Login" />
      </form>
      <p className="text-center">
        Don't have an account?{" "}
        <Link to={`${SIGNUP}`} className="font-bold text-dark-green underline">
          Create Account
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
