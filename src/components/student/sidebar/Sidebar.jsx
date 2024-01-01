import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Avatar, Button, Sidebar } from "flowbite-react";
import { HiBookmark, HiCollection, HiHeart, HiDuplicate } from "react-icons/hi";

import "./sidebar.css";

const CustomSidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const currentPath = location.pathname;

    const user = JSON.parse(sessionStorage.getItem("profile"));

    return (
        <Sidebar aria-label="Sidebar" className="side-bar w-full bg-white min-h-screen">
            <Sidebar.Items className="bg-white h-full p-4">
                <Avatar alt="User settings" img={user && user.image ? user.image : ""} rounded bordered size="lg" className="mb-2 mt-2" />
                <p className="mb-3 text-base font-medium text-center">
                    {user && user.lastName} {user && user.firstName}
                </p>
                {user && (
                    <Button className="text-white bg-green-400 enabled:hover:bg-green-500 focus:ring-green-200 focus:ring-1 mb-6 m-auto" pill onClick={() => navigate("/documents/upload")}>
                        Tải lên
                    </Button>
                )}

                <p className="mb-6 text-base font-medium text-center">{!user && "Khách"}</p>
                <Sidebar.ItemGroup>
                    <Sidebar.Item as={Link} to="/me/uploads" icon={HiCollection} className={`gap-x-2 py-3 active:bg-green-300 active:text-white hover:text-green-400 hover:bg-green-100 ${currentPath === "/me/uploads" ? "text-green-400 bg-green-100" : ""}`}>
                        Tài liệu của tôi
                    </Sidebar.Item>

                    <Sidebar.Item as={Link} to="/me/likes" icon={HiHeart} className={`gap-x-2 py-3 active:bg-green-300 active:text-white hover:text-green-400 hover:bg-green-100 ${currentPath === "/me/likes" ? "text-green-400 bg-green-100" : ""}`}>
                        Yêu thích
                    </Sidebar.Item>

                    <Sidebar.Item as={Link} to="/me/saves" icon={HiBookmark} className={`gap-x-2 py-3 active:bg-green-300 active:text-white hover:text-green-400 hover:bg-green-100 ${currentPath === "/me/saves" ? "text-green-400 bg-green-100" : ""}`}>
                        Đã lưu
                    </Sidebar.Item>

                    <Sidebar.Item as={Link} to="/me/recents" icon={HiDuplicate} className={`gap-x-2 py-3 active:bg-green-300 active:text-white hover:text-green-400 hover:bg-green-100 ${currentPath === "/currents" ? "text-green-400 bg-green-100" : ""}`}>
                        Gần đây
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};
export default CustomSidebar;
