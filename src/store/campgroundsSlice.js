import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_CAMPGROUNDS } from "constants/UrlConstants";

export const getCampgrounds = createAsyncThunk(
  "campgrounds/getCampgrounds",
  async (params) => {
    let url = GET_CAMPGROUNDS.replace("{parkCode}", params.parkCode)
      .replace("{stateCode}", params.stateCode)
      .replace("{limit}", params.limit)
      .replace("{start}", params.start);

    if (params.query.length > 0) {
      url = url.replace("{query}", params.query);
    } else {
      url = url.replace("&q={query}", "");
    }

    const response = await fetch(url);
    const json = await response.json();
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
