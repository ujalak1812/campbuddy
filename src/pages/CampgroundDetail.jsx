import { useParams } from "react-router-dom";
import Header from "modules/Header";
import campgrounds from "data/campgrounds";

const Campgrounds = () => {
  let { id } = useParams();

  const data = campgrounds.find((el) => el.id === id);

  return (
    <>
      <Header background="white" />
      <h3>{data.name}</h3>
    </>
  );
};

export default Campgrounds;
