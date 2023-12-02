import React from "react";

import "./topnav.css";

import { Link, useNavigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import Dropdown from "../dropdown/Dropdown";

import ThemeMenu from "../thememenu/ThemeMenu";

import notifications from "../../../assets/JsonData/notification.json";

import profileImage from "../../../assets/images/default_profile.jpg";

import user_menu from "../../../assets/JsonData/user_menus.json";

// const curr_user = {
//     display_name: "Tuat Tran",
//     image: user_image,
// };

const Topnav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const renderNotificationItem = (item, index) => (
        <div className="notification-item" key={index}>
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    );

    const renderUserToggle = (user) => (
        <div className="topnav__right-user">
            <div className="topnav__right-user__image">
                <img src={user && user.image ? user.image : profileImage} alt="Avatar" />
            </div>
            <div className="topnav__right-user__name">
                {user && user.lastName} {user && user.firstName}
            </div>
        </div>
    );

    const renderUserMenu = (item, index) => (
        <Link to={item.link} key={index} onClick={item.content === "Đăng xuất" ? handleLogoutClick : null}>
            <div className="notification-item">
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>
        </Link>
    );

    const handleLogoutClick = (event) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/admin/login");

        event.preventDefault();
    };

    const user = useSelector((state) => state.LoginReducer.user);
    const currentPath = location.pathname;
    if (!user) {
        if (currentPath.includes("/manager")) navigate("/manager/login")
        else navigate("/admin/login")
    }

    return (
        <div className="topnav">
            <div className="topnav__search">
                <input className="search_input" type="text" placeholder="" />
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav__right flex right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown customToggle={() => renderUserToggle(user)} contentData={user_menu} renderItems={(item, index) => renderUserMenu(item, index)} />
                </div>
                <div className="topnav__right-item">
                    <Dropdown icon="bx bx-bell" badge="12" contentData={notifications} renderItems={(item, index) => renderNotificationItem(item, index)} renderFooter={() => <Link to="/">Xem tất cả</Link>} />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu />
                </div>
            </div>
        </div>
    );
};

export default Topnav;
