import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CAMPGROUNDS } from "constants/UrlConstants.js";
import Section from "modules/Section";
import { campgrounds } from "data/campgrounds";
import { parks } from "data/parks";

const PopularCampgrounds = () => {
  // const { campgrounds } = useSelector((state) => state.campgrounds);
  // const { parks } = useSelector((state) => state.parks);

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
        <div className="grid gap-4" key={`grid-${j}`}>
          {grids[j].map((el) => {
            const park = parks.find((park) => park.parkCode === el.parkCode);

            return (
              <Link
                to={`${CAMPGROUNDS}/${el.id}`}
                className="campground-card relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-shadow hover:shadow-none"
                key={`item-${el.id}`}
              >
                <img
                  className="h-full w-full object-cover"
                  src={
                    el.images[0].altText.includes("Map" || "map") && parks
                      ? parks[0].images[0].url
                      : el.images[0].url
                  }
                  alt={el.images[0].altText}
                />
                <div className="absolute bottom-0 left-0 z-3 w-full p-4">
                  <h5 className="text-white">{el.name}</h5>
                  <p className="text-white">
                    {park !== undefined && `${park.fullName} (${park.states})`}
                  </p>
                </div>
                <div className="absolute left-0 top-0 z-2 h-full w-full bg-card-gradient" />
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {campgrounds.length > 0 && parks.length > 0 && constructGrid()}
      </div>
    </Section>
  );
};

export default PopularCampgrounds;
