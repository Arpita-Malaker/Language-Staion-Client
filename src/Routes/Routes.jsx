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
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard/DashBoard";
import ManageUser from "../Pages/DashBoard/ManageUser/ManageUser";
import ManageClasses from "../Pages/DashBoard/ManageClasses/ManageClasses";

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
          element:<PrivateRoute><Classes></Classes></PrivateRoute>

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
    {
      path:'dashboard',
      element:<DashBoard></DashBoard>,
      children:[{
        path:'manageUser',
        element:<ManageUser></ManageUser>

      },
      {
        path:'manageClasses',
        element:<ManageClasses></ManageClasses>
      }
    
    ]
    }
  ]);