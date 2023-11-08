import React from "react";
import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom"; // Import BrowserRouter, Route, và Routes
import Login from "../login/login";


const RootRouters = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    }
]);

export default RootRouters;