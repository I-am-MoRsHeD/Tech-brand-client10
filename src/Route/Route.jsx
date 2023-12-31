import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Home/Home";
import AddProduct from "../Pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import ShowProducts from "../Pages/ShowProducts";
import ProductDetails from "../Pages/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct";
import MyCart from "../Pages/MyCart";


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
        },
        {
            path:'/details/:id',
            element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            loader: ()=> fetch('http://localhost:5000/products')
        },
        {
            path: '/update/:id',
            element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/products')
        },
        {
            path: '/cart',
            element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/cart')
        }
      ]
    },
  ]);



export default router;