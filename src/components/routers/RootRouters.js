import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../../components/management/layout/Layout";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import usePrivateAxios from "../../api/usePrivateAxios";
import AdminForgotPassword from "../../pages/admin/auth/ForgotPassword";
import AdminLogin from "../../pages/admin/auth/Login";
import ManagerForgotPassword from "../../pages/manager/auth/ForgotPassword";
import ManagerLogin from "../../pages/manager/auth/Login";

import "../../App.css";

import Main from "../../pages/student/Main";
import StudentLogin from "../../pages/student/auth/Login";
import Home from "../../pages/student/Home";
import StudentForgotPassword from "../../pages/student/auth/ForgotPassword";
import StudentRegister from "../../pages/student/auth/Register";
import Error404 from "../../pages/student/error/Error404";
import Error500 from "../../pages/student/error/Error500";
import ManagerLayout from "../management/layout/ManagerLayout";

const RootRouters = () => {
    usePrivateAxios();

    const location = useLocation();

    return (
        <Routes>
            <Route path="/login" element={<StudentLogin />} />
            <Route path="/register" element={<StudentRegister />} />
            <Route path="/forgot-password" element={<StudentForgotPassword />} />

            <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route path="/manager/forgot-password" element={<ManagerForgotPassword />} />
            <Route path="/manager/login" element={<ManagerLogin />} />

            <Route path="/admin/*" element={<Layout />} />
            <Route path="/manager/*" element={<ManagerLayout />} />

            <Route path="/home" element={<Home />} />

            <Route path="/error-404" element={<Error404 />} />
            <Route path="/error-500" element={<Error500 />} />

            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Main />} />
        </Routes>
    );

    // const a =  </CSSTransition>
    //     </TransitionGroup>
};

export default RootRouters;
