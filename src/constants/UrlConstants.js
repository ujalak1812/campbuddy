export const BASE_URL = "/";
export const LOGIN = "/login";
export const SIGNUP = "/signup";
export const RESET_PASSWORD = "/reset-password";
export const CAMPGROUNDS = "/campgrounds";

export const GET_ALL_CAMPGROUNDS = `${process.env.REACT_APP_NPS_API_URL}/campgrounds?parkCode={parkCode}&stateCode={stateCode}&limit={limit}&start={start}&q={query}&api_key=${process.env.REACT_APP_NPS_API_KEY}`;

export const GET_ALL_PARKS = `${process.env.REACT_APP_NPS_API_URL}/parks?limit=496&api_key=${process.env.REACT_APP_NPS_API_KEY}`;

export const GET_PARK_BY_CODE = `${process.env.REACT_APP_NPS_API_URL}/parks?parkCode={parkCode}&api_key=${process.env.REACT_APP_NPS_API_KEY}`;

export const GET_POPULAR_CAMPGROUNDS = `${process.env.REACT_APP_NPS_API_URL}/campgrounds?parkCode={parkCode}&stateCode={stateCode}&limit={limit}&start={start}&q={query}&api_key=${process.env.REACT_APP_NPS_API_KEY}`;