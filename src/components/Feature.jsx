const Feature = (props) => {
  const { title, description, Icon } = props;

  return (
    <div className="basis-full sm:basis-2/5 text-center">
      <Icon className="mx-auto mb-5" />
      <h5 className="mb-1">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
