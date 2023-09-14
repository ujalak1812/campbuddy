import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navData from "data/navigation";
import Button from "components/Button";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as LogoDark } from "assets/logo-dark.svg";

const Header = ({ background }) => {
  const classes = {
    // header: {
    //   transparent:
    // }
  };

  const [showSmallNav, setShowSmallNav] = useState(false);

  const handleMenuVisibility = () => {
    setShowSmallNav(!showSmallNav);
  };

  useEffect(() => {
    let htmlTag = document.getElementsByTagName("html")[0];

    showSmallNav
      ? (htmlTag.style.overflow = "hidden")
      : (htmlTag.style.overflow = "auto");
  }, [showSmallNav]);

  return (
    <>
      {showSmallNav && (
        <div
          className="fixed left-0 top-0 h-full w-full animate-visible bg-gradient"
          onClick={handleMenuVisibility}
        />
      )}
      <header className="relative z-2 px-6 py-4 2xl:container">
        <nav className="flex items-center justify-between">
          {background === "transparent" ? <Logo /> : <LogoDark />}
          <ul
            className={`${
              showSmallNav
                ? "fixed left-2/4 top-24 block w-11/12 -translate-x-2/4 rounded-xl bg-white py-4 text-center "
                : "hidden"
            } items-center md:flex`}
          >
            {navData.map((navItem) => (
              <li key={navItem.id}>
                {navItem.text === "Sign Up" ? (
                  <Button
                    url={navItem.url}
                    classes={`inline-block py-2 ${
                      showSmallNav
                        ? "hover:bg-h-green mx-auto my-2 w-11/12 border-dark-green text-dark-green sm:max-w-fit"
                        : `ml-4 ${
                            background === "transparent"
                              ? "border-white text-white hover:bg-h-white"
                              : "border-dark-green text-dark-green hover:bg-dark-green hover:text-white"
                          }`
                    }`}
                  >
                    {navItem.text}
                  </Button>
                ) : (
                  <Link
                    to={navItem.url}
                    className={`block px-5 py-2 transition-all hover:font-bold hover:tracking-wide lg:ml-4 lg:px-6 ${
                      showSmallNav
                        ? "my-2 text-dark-green"
                        : `ml-3 ${
                            background === "transparent"
                              ? "text-white"
                              : "text-dark-green"
                          }`
                    }`}
                  >
                    {navItem.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <button
            className={`text-sm md:hidden ${
              background === "transparent" ? "text-white" : "text-dark-green"
            }`}
            onClick={handleMenuVisibility}
          >
            {showSmallNav ? "CLOSE" : "MENU"}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
