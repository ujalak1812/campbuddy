import { Link } from "react-router-dom";
import ImageCircle from "components/ImageCircle";
import { CAMPGROUNDS } from "constants/UrlConstants.js";

const CampgroundCard = (props) => {
  const { image, campgroundName, location, id } = props;

  return (
    <Link
      to={`${CAMPGROUNDS}/${id}`}
      className="campground-card block w-full overflow-hidden rounded-xl border border-solid border-light-green bg-grayish-white p-5  transition-transform hover:scale-105 sm:mx-6 sm:max-w-sm"
    >
      <ImageCircle
        image={image}
        classes={{
          container: "-mr-16 -mt-16 w-full",
          img: "",
          brownCircle: "bottom-[20%]",
        }}
      />
      <h5 className="mt-8 text-dark-green">{campgroundName}</h5>
      <p className="text-gold-green">{location}</p>
    </Link>
  );
};

export default CampgroundCard;
