import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Avatar, Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiUser } from "react-icons/hi";

import "./sidebar.css";

const CustomSidebar = () => {
    const location = useLocation();

    const currentPath = location.pathname;

    const user = JSON.parse(sessionStorage.getItem("profile"));

    return (
        <Sidebar aria-label="Sidebar" className="side-bar w-full bg-white min-h-screen">
            <Sidebar.Items className="bg-white h-full p-4">
                <Avatar alt="User settings" img={user && user.image ? user.image : ""} rounded bordered size="lg" className="mb-2 mt-2" />
                <p className="mb-6 text-base font-medium text-center">
                    {user && user.lastName} {user && user.firstName}
                </p>

                <p className="mb-6 text-base font-medium text-center">{!user && "Khách"}</p>
                <Sidebar.ItemGroup>
                    <Sidebar.Item as={Link} to="/me/uploads" icon={HiChartPie} className={`gap-x-2 py-3 active:bg-green-300 active:text-white hover:text-green-400 hover:bg-green-100 ${currentPath === "/me/uploads" ? "text-green-400 bg-green-100" : ""}`}>
                        Tài liệu của tôi
                    </Sidebar.Item>

                    <Sidebar.Item as={Link} to="/me/likes" icon={HiInbox} className={`gap-x-2 py-3 active:bg-green-300 active:text-white hover:text-green-400 hover:bg-green-100 ${currentPath === "/me/likes" ? "text-green-400 bg-green-100" : ""}`}>
                        Yêu thích
                    </Sidebar.Item>

                    <Sidebar.Item as={Link} to="/me/saves" icon={HiUser} className={`gap-x-2 py-3 active:bg-green-300 active:text-white hover:text-green-400 hover:bg-green-100 ${currentPath === "/me/saves" ? "text-green-400 bg-green-100" : ""}`}>
                        Đã lưu
                    </Sidebar.Item>

                    <Sidebar.Item as={Link} to="/recents" icon={HiUser} className={`gap-x-2 py-3 active:bg-green-300 active:text-white hover:text-green-400 hover:bg-green-100 ${currentPath === "/currents" ? "text-green-400 bg-green-100" : ""}`}>
                        Gần đây
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};
export default CustomSidebar;
