import Section from "layout/Section";
import Feature from "components/Feature";
import ImageCircle from "components/ImageCircle";
import features from "data/features";
import FeaturesImage from "assets/features.png";

const Features = () => {
  return (
    <Section
      heading="Unleash your Camping Adventure"
      classes="bg-grayish-white pr-0"
      headingClasses="px-6"
    >
      <div className="flex flex-col-reverse lg:flex-row items-end xl:items-center justify-between">
        <div className="px-6 basis-2/4 flex flex-wrap justify-center gap-14">
          {features.map((feature) => (
            <Feature
              key={feature.id}
              title={feature.title}
              description={feature.description}
              Icon={feature.icon}
            />
          ))}
        </div>
        <div className="pl-6 sm:pl-0 pb-14 lg:pb-0 ">
          {/* <img src={FeaturesImage} alt="" /> */}
          <ImageCircle image={FeaturesImage} imgClasses="max-w-562" />
        </div>
      </div>
    </Section>
  );
};

export default Features;
