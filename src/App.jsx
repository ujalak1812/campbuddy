import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "pages/Homepage";
import Login from "pages/Login";
import Signup from "pages/Signup";
import ResetPassword from "pages/ResetPassword";
import Campgrounds from "pages/Campgrounds";

import {
  BASE_URL,
  LOGIN,
  SIGNUP,
  RESET_PASSWORD,
  CAMPGROUNDS,
} from "constants/UrlConstants.js";

const router = createBrowserRouter([
  {
    path: `${BASE_URL}`,
    element: <Homepage />,
  },
  {
    path: `${LOGIN}`,
    element: <Login />,
  },
  {
    path: `${SIGNUP}`,
    element: <Signup />,
  },
  {
    path: `${RESET_PASSWORD}`,
    element: <ResetPassword />,
  },
  {
    path: `${CAMPGROUNDS}`,
    element: <Campgrounds />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
