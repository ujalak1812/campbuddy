export const BASE_URL = "/";
export const LOGIN = "/login";
export const SIGNUP = "/signup";
export const RESET_PASSWORD = "/reset-password";
export const CAMPGROUNDS = "/campgrounds";

export const GET_CAMPGROUNDS = `${process.env.REACT_APP_NPS_API_URL}/campgrounds?limit=6&api_key=${process.env.REACT_APP_NPS_API_KEY}`;
export const GET_PARKS = `${process.env.REACT_APP_NPS_API_URL}/parks?limit=496&api_key=${process.env.REACT_APP_NPS_API_KEY}`;
