import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../../components/management/layout/Layout";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import usePrivateAxios from "../../api/usePrivateAxios";
import AdminForgotPassword from "../../pages/admin/auth/ForgotPassword";
import AdminLogin from "../../pages/admin/auth/Login";
import ManagerForgotPassword from "../../pages/manager/auth/ForgotPassword";
import ManagerLogin from "../../pages/manager/auth/Login";
import UserHome from "../user/home";
// import UserRoute from "./UserRouters";
import "../../App.css";

import Main from "../../pages/student/Main";
import StudentLogin from "../../pages/student/auth/Login";
import Home from "../../pages/student/Home";
import StudentForgotPassword from "../../pages/student/auth/ForgotPassword";
import StudentRegister from "../../pages/student/auth/Register";
import Error404 from "../../pages/student/error/Error404";
import Error500 from "../../pages/student/error/Error500";
import ManagerLayout from "../management/layout/ManagerLayout";
import Login from "../../pages/student/auth/Login";
import SignUp from "../../pages/student/auth/Register";

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

    // const a =  </CSSTransition>
    //     </TransitionGroup>
};

export default RootRouters;
