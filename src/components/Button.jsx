const Button = (props) => {
  const { url, children, classes } = props;

  return (
    <a
      href={url}
      className={`${classes} cursor-pointer rounded-full border border-solid px-6 text-center`}
    >
      {children}
    </a>
  );
};

export default Button;
