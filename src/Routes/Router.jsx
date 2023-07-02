import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import AboutMe from "../Home/Home/About me/AboutMe";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/home",
            element: <Home/>
        },
        {
            path: '/about',
            element:<AboutMe/>
        }
      ]
    },
  ]);