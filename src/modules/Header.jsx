import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navData from "data/navigation";
import Button from "components/Button";
import { ReactComponent as Logo } from "assets/logo.svg";

const Header = () => {
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
      <header className="relative z-1 px-6 py-4 2xl:container">
        <nav className="flex items-center justify-between">
          <Logo />
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
                        : "ml-4 border-white text-white hover:bg-h-white"
                    }`}
                  >
                    {navItem.text}
                  </Button>
                ) : (
                  <Link
                    to={navItem.url}
                    className={`block px-5 py-2 lg:ml-4 lg:px-6 ${
                      showSmallNav ? "my-2 text-dark-green" : "ml-3 text-white"
                    }`}
                  >
                    {navItem.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <button
            className="text-sm text-white md:hidden"
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
