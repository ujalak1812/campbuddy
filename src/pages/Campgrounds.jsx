import { useSelector, useDispatch } from "react-redux";
import Header from "modules/Header";
import CampgroundCard from "components/CampgroundCard";
import { getCampgrounds } from "../store/campgroundsSlice";
import { useEffect } from "react";

const Campgrounds = () => {
  const dispatch = useDispatch();
  const { campgrounds } = useSelector((state) => state.campgrounds);

  useEffect(() => {
    dispatch(getCampgrounds());
  }, []);

  return (
    <>
      <Header background="white" />
      <section className="flex flex-wrap gap-6">
        {campgrounds.map((campground) => (
          <CampgroundCard
            key={campground.id}
            id={campground.id}
            image={campground.images.length > 0 && campground.images[0].url}
            campgroundName={campground.name}
            location={campground.parkCode}
          />
        ))}
      </section>
    </>
  );
};

export default Campgrounds;
