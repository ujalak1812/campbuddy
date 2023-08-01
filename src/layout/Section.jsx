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
    <section className={`${classes} py-20 lg:py-24 xl:py-28`}>
      <div className="overflow-hidden px-6 2xl:container">
        <h2 className="xl:mb-20` mb-14 text-center text-dark-green lg:mb-16">
          {heading}
        </h2>
        {children}
        {hasCTA && <Button url={buttonUrl}>{buttonText}</Button>}
      </div>
    </section>
  );
};

export default Section;
