import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../../components/management/layout/Layout";
import Login from "../auth-page/login";
import SignUp from "../auth-page/sign-up";
import Home from "../home/home";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import usePrivateAxios from "../../api/usePrivateAxios";
import AdminForgotPassword from "../../pages/admin/auth/ForgotPassword";
import AdminLogin from "../../pages/admin/auth/Login";
import ManagerForgotPassword from "../../pages/manager/auth/ForgotPassword";
import ManagerLogin from "../../pages/manager/auth/Login";

import "../../App.css"

const RootRouters = () => {
    usePrivateAxios();

    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.pathname} classNames="slide" timeout={300}>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/manager/forgot-password" element={<ManagerForgotPassword />} />
                    <Route path="/manager/login" element={<ManagerLogin />} />
                    <Route path="*" element={<Layout />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default RootRouters;
