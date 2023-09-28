import Section from "modules/Section";
import Feature from "components/Feature";
import ImageCircle from "components/ImageCircle";
import features from "data/features";
import FeaturesImage from "assets/features.png";

const Features = () => {
  return (
    <Section
      heading="Unleash your Camping Adventure"
      classes={{
        section: "bg-faded-green",
        container: "overflow-x-hidden",
      }}
    >
      <div className="flex flex-col-reverse items-end justify-between lg:flex-row xl:items-center">
        <div className="flex basis-2/4 flex-wrap justify-center gap-14 px-6">
          {features.map((feature) => (
            <Feature
              key={feature.id}
              title={feature.title}
              description={feature.description}
              Icon={feature.icon}
            />
          ))}
        </div>
        <div className="pb-14 sm:pl-0 lg:pb-0 ">
          <ImageCircle
            image={FeaturesImage}
            classes={{
              container: "-mr-14 w-11/12 sm:-mr-12 sm:w-auto",
              img: "max-w-562",
              brownCircle: "bottom-[18%] sm:-left-[12%]",
            }}
          />
        </div>
      </div>
    </Section>
  );
};

export default Features;
