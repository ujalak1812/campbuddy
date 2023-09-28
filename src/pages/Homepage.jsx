import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampgrounds } from "store/campgroundsSlice";
import { getParks } from "store/parksSlice";
import Hero from "modules/Hero";
import Features from "modules/Features";
import PopularCampgrounds from "modules/PopularCampgrounds";
import Footer from "modules/Footer";

const Homepage = () => {
  const dispatch = useDispatch();
  const { campgrounds } = useSelector((state) => state.campgrounds);
  const { parks } = useSelector((state) => state.parks);

  useEffect(() => {
    if (campgrounds.length === 0) {
      dispatch(getCampgrounds());
    }

    if (parks.length === 0) {
      dispatch(getParks());
    }
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <PopularCampgrounds />
      <Footer />
    </>
  );
};

export default Homepage;
