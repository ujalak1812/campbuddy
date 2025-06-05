import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_PARKS, GET_PARK_BY_CODE } from "constants/UrlConstants";

export const getParks = createAsyncThunk("parks/getParks", async () => {
  let response = await fetch(GET_ALL_PARKS);
  let json = await response.json();
  return json.data;
});

export const getParkByCode = createAsyncThunk("parks/getParkByCode", async (params) => {
  let url = GET_PARK_BY_CODE.replace("{parkCode}", params.parkCode);
  let response = await fetch(url);
  let json = await response.json();
  return json.data;
});

const parksSlice = createSlice({
  name: "parks",
  initialState: {
    parks: [],
    parkByCode: []
  },
  extraReducers: {
    [getParks.fulfilled]: (state, action) => {
      //If we have to totally replace the existing array:
      state.parks = action.payload;

      //if we want to add the json to an existing array
      // let updatedParks = state.parks.concat(action.payload);
      // state.parks = updatedParks;
    },
    [getParks.pending]: (state) => {
      state.status = "Fetching parks. Please wait a moment...";
    },
    [getParks.rejected]: (state) => {
      state.status = "Failed to fetch data...";
    },
    [getParkByCode.fulfilled]: (state, action) => {
      state.parkByCode = action.payload;
    },
    [getParkByCode.pending]: (state) => {
      state.status = "Fetching parks. Please wait a moment...";
    },
    [getParkByCode.rejected]: (state) => {
      state.status = "Failed to fetch data...";
    },
  },
});

export default parksSlice.reducer;
