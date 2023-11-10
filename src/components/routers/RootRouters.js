import React from "react";
import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom"; // Import BrowserRouter, Route, và Routes
import Login from "../auth-page/login";
import Home from "../home/home";
import SigUp from "../auth-page/sign-up";


const RootRouters = createBrowserRouter([
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/register',
        element: <SigUp />
    }
]);

export default RootRouters;