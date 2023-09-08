import { BASE_URL, LOGIN, SIGNUP, CAMPGROUNDS } from "constants/UrlConstants";

const navigation = [
  {
    id: "home",
    text: "Home",
    url: `${BASE_URL}`,
  },
  {
    id: "campgrounds",
    text: "Campgrounds",
    url: `${CAMPGROUNDS}`,
  },
  {
    id: "login",
    text: "Login",
    url: `${LOGIN}`,
  },
  {
    id: "sign-up",
    text: "Sign Up",
    url: `${SIGNUP}`,
  },
];

export default navigation;
