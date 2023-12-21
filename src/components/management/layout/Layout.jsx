import React, { useEffect } from "react";

import "../../../assets/boxicons-2.0.7/css/boxicons.min.css";
import "../../../assets/css/grid.css";
import "../../../assets/css/index.css";
import "../../../assets/css/theme.css";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";

import { useDispatch, useSelector } from "react-redux";

import ThemeAction from "../../../redux/actions/ThemeAction";
import AdminRoutes from "../../routers/AdminRouters";

const Layout = () => {
    const themeReducer = useSelector((state) => state.ThemeReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

        const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

        dispatch(ThemeAction.setMode(themeClass));

        dispatch(ThemeAction.setColor(colorClass));
    }, [dispatch]);

    return (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar />
            <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">
                    <AdminRoutes />
                </div>
            </div>
        </div>
    );
};

export default Layout;
