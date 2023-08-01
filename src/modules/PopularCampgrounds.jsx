import Section from "layout/Section";
import CampgroundCard from "components/CampgroundCard";
import FeaturesImage from "assets/features.png";

const PopularCampgrounds = () => {
  return (
    <Section heading="Featured Campgrounds" classes="bg-light-green">
      <div>
        <CampgroundCard
          image={FeaturesImage}
          campgroundName="Wonder Lake"
          location="Denali National Park, Alaska"
        />
      </div>
    </Section>
  );
};

export default PopularCampgrounds;
