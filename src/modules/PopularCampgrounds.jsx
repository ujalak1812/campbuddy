import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCampgrounds } from "store/campgroundsSlice";
import { getParks } from "store/parksSlice";
import { CAMPGROUNDS } from "constants/UrlConstants.js";
import Section from "modules/Section";

const PopularCampgrounds = () => {
  const dispatch = useDispatch();
  const { campgrounds } = useSelector((state) => state.campgrounds);
  const { parks } = useSelector((state) => state.parks);

  useEffect(() => {
    dispatch(
      getCampgrounds({
        parkCode: "",
        stateCode: "",
        limit: 6,
        start: 0,
        query: "",
      }),
    );
  }, []);

  const constructGrid = () => {
    const campgroundsGrid = [];
    const gridSize =
      window.innerWidth > 562 && window.innerWidth < 1024 ? 3 : 2;
    const grids = [];

    for (let i = 0; i < campgrounds.length; i += gridSize) {
      const grid = campgrounds.slice(i, i + gridSize);
      grids.push(grid);
    }

    for (let j = 0; j < grids.length; j += 1) {
      campgroundsGrid.push(
        <div className="gap-4 grid" key={`grid-${j}`}>
          {grids[j].map((el) => {
            const park = parks.find((park) => park.parkCode === el.parkCode);

            return (
              <Link
                to={`${CAMPGROUNDS}/${el.id}`}
                className="relative shadow-lg hover:shadow-none rounded-xl overflow-hidden transition-shadow cursor-pointer campground-card"
                key={`item-${el.id}`}
                // onClick={}
              >
                <img
                  className="w-full h-full object-cover"
                  src={
                    el.images[0].altText.includes("Map" || "map") && parks
                      ? parks[0].images[0].url
                      : el.images[0].url
                  }
                  alt={el.images[0].altText}
                />
                <div className="bottom-0 left-0 z-3 absolute p-4 w-full">
                  <h5 className="text-white">{el.name}</h5>
                  <p className="text-white">
                    {park !== undefined && `${park.fullName} (${park.states})`}
                  </p>
                </div>
                <div className="top-0 left-0 z-2 absolute bg-card-gradient w-full h-full" />
              </Link>
            );
          })}
        </div>,
      );
    }

    return campgroundsGrid;
  };

  return (
    <Section
      heading="Popular Campgrounds"
      hasCTA={true}
      buttonText="See all Campgrounds"
      buttonUrl={`${CAMPGROUNDS}`}
    >
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {campgrounds.length > 0 && parks.length > 0 && constructGrid()}
      </div>
    </Section>
  );
};

export default PopularCampgrounds;
