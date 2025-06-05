import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getParkByCode } from "../store/parksSlice";
import Header from "modules/Header";
import { useEffect } from "react";

const Campgrounds = () => {
  const dispatch = useDispatch();
  const { campgrounds } = useSelector((state) => state.campgrounds);
  const { parkByCode } = useSelector((state) => state.parks);
  let { id } = useParams();

  const campgroundData = campgrounds.find((el) => el.id === id);

  useEffect(() => {
    if(campgroundData) {
      dispatch(getParkByCode({ parkCode: campgroundData.parkCode }));
    }
  }, [campgroundData]);

  const parkData = parkByCode[0]

  return (
    <>
      <Header background="white" />
      <h3>{campgroundData.name}</h3>
      <p>{parkData.fullName}, {parkData.states}</p>
      </div>
    </>
  );
};

export default Campgrounds;
