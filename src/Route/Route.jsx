import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Home/Home";
import AddProduct from "../Pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import ShowProducts from "../Pages/ShowProducts";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registration></Registration>
        },
        {
            path:'/addProduct',
            element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path: '/showProducts/:brand',
            element: <ShowProducts></ShowProducts>,
            loader: ()=> fetch('http://localhost:5000/products')
        }
      ]
    },
  ]);



export default router;