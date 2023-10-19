import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import Root from './Root/Root';
import ErrorPage from './Components/ErrorPage';
import Home from './Pages/Home/Home';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AddProduct from './Pages/AddProducts/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Products from './Pages/Products/Products';
import ProductUpdate from './Pages/ProductsUpdate/ProductUpdate';
import ProductDetails from './Pages/ProductsDetails/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/products/:name',
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: '/updateproduct/:id',
        element: <PrivateRoute><ProductUpdate></ProductUpdate></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/productdetails/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)