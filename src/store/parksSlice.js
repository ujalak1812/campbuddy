import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_PARKS } from "constants/UrlConstants";

export const getParks = createAsyncThunk("parks/getParks", async () => {
  let response = await fetch(GET_PARKS);
  let json = await response.json();
  return json.data;
});

const parksSlice = createSlice({
  name: "parks",
  initialState: {
    parks: [],
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
  },
});

export default parksSlice.reducer;
