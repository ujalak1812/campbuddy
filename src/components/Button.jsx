const Button = (props) => {
  const { url, children, classes } = props;

  return (
    <a
      href={url}
      className={`${classes} px-6 py-2 border-solid border rounded-full`}
    >
      {children}
    </a>
  );
};

export default Button;
