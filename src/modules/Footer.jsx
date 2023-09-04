import { ReactComponent as Logo } from "assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-dark-green px-6 py-8 text-sm text-grayish-white">
        <div className="flex items-center justify-between 2xl:container">
          <Logo />
          <p className="sm:order-3">&#169; 2023 Campbuddy Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
