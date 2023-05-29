import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main ";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Home/PopularMenu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/SignUP/SignUP";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyCart from "../Layout/Dashboard/MyCart/MyCart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
      },
      {
        
          path:'order/:category',
          element:<OrderFood></OrderFood>
      
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUP></SignUP>
      },
      {
        path:'secret',
        element:<PrivateRoute><Secret></Secret></PrivateRoute>
      }
      ]
     
    },
   {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
      path:'mycart',
      element:<MyCart></MyCart>
      }
    ]
   }
  ]);
  export default router ;