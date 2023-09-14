import Section from "modules/Section";
import CampgroundCard from "components/CampgroundCard";
import FeaturesImage from "assets/features.png";
import Slider from "react-slick";
import campgrounds from "data/campgrounds";

const PopularCampgrounds = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 1000,
    centerMode: true,
    variableWidth: true,
    dotsClass: "slick-dots",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Section
      heading="Featured Campgrounds"
      classes="bg-light-green"
      hasCTA={true}
      buttonText="See all Campgrounds"
    >
      <Slider {...settings}>
        {campgrounds.map((campground) => (
          <CampgroundCard
            id={campground.id}
            image={FeaturesImage}
            campgroundName={campground.name}
            location="Denali National Park, Alaska"
          />
        ))}
      </Slider>
    </Section>
  );
};

export default PopularCampgrounds;
