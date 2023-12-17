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

const RootRouters = () => {
    usePrivateAxios();

    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.pathname} classNames="slide" timeout={300}>
                <Routes>
                    <Route path="/login" element={<StudentLogin />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/manager/forgot-password" element={<ManagerForgotPassword />} />
                    <Route path="/manager/login" element={<ManagerLogin />} />
                    <Route path="/admin/*" element={<Layout />} />
                    <Route path="/manager/*" element={<Layout />} />
                    {/* <UserRoute path="/user/*" element={<Layout />} /> */}
                    <Route path="/*" element={<Main />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default RootRouters;
