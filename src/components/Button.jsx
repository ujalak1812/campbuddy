const Button = (props) => {
  const { url, children, classes } = props;

  return (
    <a
      href={url}
      className={`${classes} rounded-full border border-solid px-6 py-2`}
    >
      {children}
    </a>
  );
};

export default Button;
