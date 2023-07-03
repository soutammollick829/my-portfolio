import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import AboutMe from "../Home/Home/About me/AboutMe";
import MyWork from "../Home/Home/My work/MyWork";
import ContactMe from "../components/contact me/ContactMe";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: '/about',
            element:<AboutMe/>
        },
        {
          path:'/projects',
          element:<MyWork/>
        },
        {
          path:'/contact',
          element: <ContactMe/>
        }
      ]
    },
  ]);