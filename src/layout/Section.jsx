import Button from "components/Button";

const Section = (props) => {
  const {
    heading,
    children,
    classes,
    headingClasses,
    hasCTA,
    buttonUrl,
    buttonText,
  } = props;

  return (
    <section className={`${classes} xl:py-28 lg:py-24 py-20`}>
      <div className="2xl:container">
        <h2
          className={`${headingClasses} text-dark-green text-center xl:mb-20 lg:mb-16 mb-14`}
        >
          {heading}
        </h2>
        {children}
        {hasCTA && <Button url={buttonUrl}>{buttonText}</Button>}
      </div>
    </section>
  );
};

export default Section;
