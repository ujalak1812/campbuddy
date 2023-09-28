import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "modules/Header";

const Campgrounds = () => {
  const { campgrounds } = useSelector((state) => state.campgrounds);
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
