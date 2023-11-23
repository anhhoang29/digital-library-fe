import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth-page/login";
import Home from "../home/home";
import SignUp from "../auth-page/sign-up";
import AdminLogin from "../../pages/admin/Login";
import Layout from "../../components/admin/layout/Layout";

import usePrivateAxios from "../../api/usePrivateAxios";

const RootRouters = () => {
    usePrivateAxios();
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/register" element={<SignUp />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="*" element={<Layout />} />
        </Routes>
    );
};

export default RootRouters;
