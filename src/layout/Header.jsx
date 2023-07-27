import { useEffect, useState } from "react";
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
          className="fixed w-full h-full bg-gradient left-0 top-0 animate-visible"
          onClick={handleMenuVisibility}
        />
      )}
      <header className="2xl:container py-4 px-6 relative z-1">
        <nav className="flex justify-between items-center">
          <Logo />
          <ul
            className={`${
              showSmallNav
                ? "block fixed w-11/12 left-2/4 -translate-x-2/4 top-24 bg-white rounded-xl text-center py-4 "
                : "hidden"
            } md:flex items-center`}
          >
            {navData.map((navItem) => (
              <li key={navItem.id}>
                {navItem.text === "Sign Up" ? (
                  <Button
                    url={navItem.url}
                    classes={`inline-block ${
                      showSmallNav
                        ? "text-dark-green border-dark-green hover:bg-h-green w-11/12 sm:max-w-fit mx-auto my-2"
                        : "ml-4 text-white border-white hover:bg-h-white"
                    }`}
                  >
                    {navItem.text}
                  </Button>
                ) : (
                  <a
                    href={navItem.url}
                    className={`py-2 lg:px-6 lg:ml-4 px-5 block ${
                      showSmallNav ? "text-dark-green my-2" : "text-white ml-3"
                    }`}
                  >
                    {navItem.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-white text-sm"
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
