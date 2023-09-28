import { configureStore } from "@reduxjs/toolkit";
import campgroundsSlice from "./campgroundsSlice";
import parksSlice from "./parksSlice";

const store = configureStore({
  reducer: {
    campgrounds: campgroundsSlice,
    parks: parksSlice,
  },
});

export default store;
