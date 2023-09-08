import { Link } from "react-router-dom";
import { LOGIN } from "constants/UrlConstants.js";

const SignupForm = () => {
  const createAccount = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <h3 className="z-2 mb-6 text-dark-green">Let's create your account</h3>
      <form onSubmit={createAccount} className="auth-form">
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
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </fieldset>
        <fieldset>
          <div className="flex justify-between">
            <label htmlFor="confirm-password">Confirm Password:</label>
          </div>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Re-enter your password"
          />
        </fieldset>
        <input type="submit" value="Create Account" />
      </form>
      <p className="text-center">
        Already have an account?{" "}
        <Link to={`${LOGIN}`} className="font-bold text-dark-green underline">
          Login
        </Link>
      </p>
    </>
  );
};

export default SignupForm;
