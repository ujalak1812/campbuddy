import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_CAMPGROUNDS } from "constants/UrlConstants";

export const getCampgrounds = createAsyncThunk(
  "campgrounds/getCampgrounds",
  async () => {
    let response = await fetch(GET_CAMPGROUNDS);
    let json = await response.json();
    return json.data;
  },
);

const campgroundsSlice = createSlice({
  name: "campgrounds",
  initialState: {
    campgrounds: [],
  },
  extraReducers: {
    [getCampgrounds.fulfilled]: (state, action) => {
      //If we have to totally replace the existing array:
      state.campgrounds = action.payload;

      //if we want to add the json to an existing array
      // let updatedCampgrounds = state.campgrounds.concat(action.payload);
      // state.campgrounds = updatedCampgrounds;
    },
    [getCampgrounds.pending]: (state) => {
      state.status = "Fetching campgrounds. Please wait a moment...";
    },
    [getCampgrounds.rejected]: (state) => {
      state.status = "Failed to fetch data...";
    },
  },
});

export default campgroundsSlice.reducer;
