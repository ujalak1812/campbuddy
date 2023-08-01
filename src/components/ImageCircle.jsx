const ImageCircle = (props) => {
  const { image, classes } = props;

  return (
    <div className={`relative ml-auto ${classes.container}`}>
      <div
        className={`relative z-2 aspect-square overflow-hidden rounded-full ${classes.img}`}
      >
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="absolute -left-5 bottom-0 z-1 aspect-square w-[26.5%] rounded-full bg-dark-green"></div>
      <div
        className={`absolute -left-[15%] z-1 aspect-square w-[9%] rounded-full bg-brown ${classes.brownCircle}`}
      ></div>
    </div>
  );
};

export default ImageCircle;
