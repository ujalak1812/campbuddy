import Section from "layout/Section";
import CampgroundCard from "components/CampgroundCard";
import FeaturesImage from "assets/features.png";
import Slider from "react-slick";

const PopularCampgrounds = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
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
    <Section heading="Featured Campgrounds" classes="bg-light-green">
      <Slider {...settings}>
        <CampgroundCard
          image={FeaturesImage}
          campgroundName="Wonder Lake"
          location="Denali National Park, Alaska"
        />
        <CampgroundCard
          image={FeaturesImage}
          campgroundName="Wonder Lake 1"
          location="Denali National Park, Alaska"
        />
        <CampgroundCard
          image={FeaturesImage}
          campgroundName="Wonder Lake 2"
          location="Denali National Park, Alaska"
        />
        <CampgroundCard
          image={FeaturesImage}
          campgroundName="Wonder Lake 3"
          location="Denali National Park, Alaska"
        />
        <CampgroundCard
          image={FeaturesImage}
          campgroundName="Wonder Lake 4"
          location="Denali National Park, Alaska"
        />
      </Slider>
    </Section>
  );
};

export default PopularCampgrounds;
