import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home/Home';
import AllToys from '../pages/AllToys/AllToys';
import Blog from '../pages/Blog/Blog';
import MyToys from '../pages/MyToys/MyToys';
import AddToy from '../pages/AddToy/AddToy';

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
            element: <MyToys></MyToys>
        },
        {
            path:'/addtoy',
            element: <AddToy></AddToy>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }
    ]
  },
]);

export default router;