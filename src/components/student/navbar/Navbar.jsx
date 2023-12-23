import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";

import logo from "../../../assets/images/logo.png";
const CustomNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;

    const user = JSON.parse(sessionStorage.getItem("profile"));

    return (
        <Navbar fluid rounded className="w-full">
            <div className="ml-10">
                <Navbar.Brand as={Link} to="/home" className="hover:text-black">
                    <img src={logo} className="mr-3 h-16 sm:h-16" alt="WISDO Logo" />
                </Navbar.Brand>
            </div>

            <div className="flex items-center gap-x-[5%] w-2/3 justify-end">
                <div className="flex md:order-2 mr-10">
                    {user && (
                        <Dropdown arrowIcon={false} inline label={<Avatar alt={user.lastName} img={user.image ? user.image : ""} rounded bordered />}>
                            <Dropdown.Header>
                                <span className="block text-lg font-normal text-green-400 mb-3">
                                    {user.lastName} {user.firstName}
                                </span>
                                <span className="block truncate text-sm font-medium">@{user.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Item as={Link} to="/me">
                                Trang cá nhân
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item as={Link} to="/login">
                                Đăng xuất
                            </Dropdown.Item>
                        </Dropdown>
                    )}

                    {!user && (
                        <Button className="text-white bg-green-400 enabled:hover:bg-green-500 focus:ring-green-200 focus:ring-1" pill onClick={() => navigate("/login")}>
                            Đăng nhập
                        </Button>
                    )}
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse className="ml-0">
                    <Navbar.Link as={Link} to="/home" active={currentPath === "/home"} className={`text-base md:active:text-green-400 md:hover:text-green-500 ${currentPath === "/home" ? "md:text-green-400" : ""}`}>
                        Trang chủ
                    </Navbar.Link>
                    <Navbar.Link as={Link} to="/documents" active={currentPath === "/documents"} className={`text-base md:active:text-green-400 md:hover:text-green-500 ${currentPath === "/documents" ? "md:text-green-400" : ""}`}>
                        Tài liệu
                    </Navbar.Link>
                    <Navbar.Link as={Link} to="/institutions" active={currentPath === "/institutions"} className={`text-base md:active:text-green-400 md:hover:text-green-500 ${currentPath === "/institutions" ? "md:text-green-400" : ""}`}>
                        Trường học
                    </Navbar.Link>
                    <Navbar.Link as={Link} to="/fields" active={currentPath === "/fields"} className={`text-base md:active:text-green-400 md:hover:text-green-500 ${currentPath === "/fields" ? "md:text-green-400" : ""}`}>
                        Lĩnh vực
                    </Navbar.Link>
                    <Navbar.Link as={Link} to="/categories" active={currentPath === "/categories"} className={`text-base md:active:text-green-400 md:hover:text-green-500 ${currentPath === "/categories" ? "md:text-green-400" : ""}`}>
                        Danh mục
                    </Navbar.Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};
export default CustomNavbar;
