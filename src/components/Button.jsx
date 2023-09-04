import { Link } from "react-router-dom";

const Button = (props) => {
  const { url, children, classes } = props;

  return (
    <Link
      to={url}
      className={`${classes} cursor-pointer rounded-full border border-solid px-6 text-center`}
    >
      {children}
    </Link>
  );
};

export default Button;
