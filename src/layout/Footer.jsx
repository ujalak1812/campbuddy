import { ReactComponent as Logo } from "assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-dark-green py-8 text-grayish-white text-sm px-6">
        <div className="2xl:container flex justify-between items-center">
          <Logo />
          <p className="sm:order-3">
            &#169; 2023 Campbuddy Inc.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;