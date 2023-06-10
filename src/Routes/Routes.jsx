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
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import InstructorClasses from "../Pages/DashBoard/InstructorClasses/InstructorClasses";
import AddClasses from "../Pages/DashBoard/AddClasses/AddClasses";
// import AdminRoute from "./AdminRoute";

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
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[{
        path:'manageUser',
        element:<AdminRoute><ManageUser></ManageUser></AdminRoute>

      },
      {
        path:'manageClasses',
        element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },

      {
        path:'instructorclasses',
        element:<InstructorRoute><InstructorClasses></InstructorClasses></InstructorRoute>
      },

      {
        path:'addclasses',
        element:<InstructorRoute><AddClasses></AddClasses></InstructorRoute>
      }
    
    ]
    }
  ]);