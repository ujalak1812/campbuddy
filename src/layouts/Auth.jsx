const Auth = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-full items-center justify-center px-6 2xl:container xl:w-1/2 xl:bg-grayish-white">
        {children}
      </div>
      <div className="relative hidden w-1/2 bg-auth bg-cover bg-no-repeat xl:block">
        <div className="absolute left-0 top-0 h-full w-full bg-h-dark-green" />
      </div>
    </div>
  );
};

export default Auth;
