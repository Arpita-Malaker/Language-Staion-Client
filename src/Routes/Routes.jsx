import {
    createBrowserRouter
    
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Instructor from "../Pages/Instrauctor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login/Login";
import Registration from "../Pages/Registration/Registration";

  export const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>

        },
        {
          path:'/instructor',
          element:<Instructor></Instructor>

        },
        {
          path:'/classes',
          element:<Classes></Classes>

        },
        {
          path:'/login',
          element:<Login></Login>

        },
        {
          path:'/registration',
          element:<Registration></Registration>

        }
      ]

    },
  ]);