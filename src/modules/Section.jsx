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
    <section className={`${classes.section} py-20 lg:py-24 xl:py-28`}>
      <div className={`px-6 2xl:container ${classes.container}`}>
        <h2 className="xl:mb-20` mb-14 text-center text-dark-green lg:mb-16">
          {heading}
        </h2>
        {children}
        {hasCTA && (
          <Button
            url={buttonUrl}
            classes="mx-auto my-12 block w-11/12 py-2 hover:bg-dark-green hover:text-white sm:max-w-fit sm:py-3"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default Section;
