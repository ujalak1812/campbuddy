const Feature = (props) => {
  const { title, description, Icon } = props;

  return (
    <div className="basis-full text-center sm:basis-2/5">
      <Icon className="mx-auto mb-5" />
      <h5 className="mb-1">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
