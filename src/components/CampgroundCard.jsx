import ImageCircle from "components/ImageCircle";

const CampgroundCard = (props) => {
  const { image, campgroundName, location } = props;

  return (
    <div className="rounded-full-xl w-full overflow-hidden border border-solid border-light-green bg-grayish-white p-5 sm:mx-6 sm:max-w-sm">
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
    </div>
  );
};

export default CampgroundCard;
