const ImageCircle = (props) => {
  const { image, imgClasses } = props;

  return (
    <div className="relative -mr-9 ml-auto w-11/12 sm:w-auto">
      <div
        className={`rounded-full overflow-hidden relative z-2 aspect-square ${imgClasses}`}
      >
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="w-[26.5%] aspect-square bg-dark-green rounded-full absolute bottom-0 z-1 -left-5"></div>
      <div className="w-[9%] aspect-square bg-brown rounded-full absolute z-1 bottom-[18%] -left-[15%] sm:-left-[12%]"></div>
    </div>
  );
};

export default ImageCircle;
