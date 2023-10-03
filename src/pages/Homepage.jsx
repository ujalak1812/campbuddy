import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParks } from "store/parksSlice";
import Hero from "modules/Hero";
import Features from "modules/Features";
import PopularCampgrounds from "modules/PopularCampgrounds";
import Footer from "modules/Footer";

const Homepage = () => {
  const dispatch = useDispatch();
  const { parks } = useSelector((state) => state.parks);

  useEffect(() => {
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
