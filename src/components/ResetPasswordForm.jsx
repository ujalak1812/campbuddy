const ResetPasswordForm = () => {
  const resetPassword = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <h3 className="z-2 mb-6 text-dark-green">Reset Password</h3>
      <form onSubmit={resetPassword} className="auth-form">
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
        <input type="submit" value="Send password reset email" />
      </form>
    </>
  );
};

export default ResetPasswordForm;
