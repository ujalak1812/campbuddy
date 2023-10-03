import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCampgrounds } from "store/campgroundsSlice";
import { getParks } from "store/parksSlice";
import Header from "modules/Header";
import CampgroundCard from "components/CampgroundCard";

const Campgrounds = () => {
  const dispatch = useDispatch();
  const { campgrounds } = useSelector((state) => state.campgrounds);
  const { parks } = useSelector((state) => state.parks);

  useEffect(() => {
    dispatch(
      getCampgrounds({
        parkCode: "",
        stateCode: "",
        limit: 12,
        start: 0,
        query: "",
      }),
    );

    if (parks.length === 0) {
      dispatch(getParks());
    }
  }, []);

  const getParkImage = (parkCode) => {
    let park = parks.find((el) => el.parkCode === parkCode);
    return [park.images[0].url, park.images[0].altText];
  };

  const getParkLocation = (parkCode) => {
    let park = parks.find((el) => el.parkCode === parkCode);
    return [park.fullName, park.states];
  };

  return (
    <>
      <Header background="white" />
      {parks.length > 0 && (
        <section className="flex flex-wrap justify-center gap-6 px-6 2xl:container">
          {campgrounds.map((campground) => {
            let imageUrl = "";
            let altText = "";

            const isMap =
              campground.images.length > 0 &&
              (campground.images[0].altText.includes("Map") ||
                campground.images[0].altText.includes("map"));

            // if campground has no images, get image of the park
            if (campground.images.length === 0) {
              [imageUrl, altText] = getParkImage(campground.parkCode);
            }
            // if campground has 1st image of a map, get image of the park
            else if (isMap) {
              [imageUrl, altText] = getParkImage(campground.parkCode);
            }
            // if campground has > 1 images, get 1st which is no map
            else {
              imageUrl = campground.images[0].url;
              altText = campground.images[0].altText;
            }

            let [park, state] = getParkLocation(campground.parkCode);

            return (
              <CampgroundCard
                key={campground.id}
                id={campground.id}
                image={imageUrl}
                alt={altText}
                campgroundName={campground.name}
                location={`${park} (${state})`}
              />
            );
          })}
        </section>
      )}
      {parks.length === 0 && <p>Loading ...... </p>}
    </>
  );
};

export default Campgrounds;
