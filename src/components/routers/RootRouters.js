import React from "react";
import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom"; // Import BrowserRouter, Route, và Routes
import Login from "../login/login";
import Home from "../home/home";


const RootRouters = createBrowserRouter([
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    }
]);

export default RootRouters;