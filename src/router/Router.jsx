import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home/Home';
import AllToys from '../pages/AllToys/AllToys';
import Blog from '../pages/Blog/Blog';
import MyToys from '../pages/MyToys/MyToys';
import AddToy from '../pages/AddToy/AddToy';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import ToyDetails from '../pages/ToyDetails/ToyDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/alltoys',
            element: <AllToys></AllToys>
        },
        {
            path:'/mytoys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path:'/mytoys/:id',
            element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
        },
        {
            path:'/addtoy',
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/signin',
            element: <SignIn></SignIn>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        }
    ]
  },
]);

export default router;