import { Link } from "react-router-dom";
import ImageCircle from "components/ImageCircle";
import { CAMPGROUNDS } from "constants/UrlConstants.js";

const CampgroundCard = (props) => {
  const { image, alt, campgroundName, location, id } = props;

  return (
    <Link
      to={`${CAMPGROUNDS}/${id}`}
      className="campground-card block w-full overflow-hidden rounded-xl bg-faded-green p-5  transition-transform hover:scale-105 sm:max-w-sm"
    >
      <ImageCircle
        image={image}
        alt={alt}
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
