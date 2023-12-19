import React from "react";
import { useLocation , useNavigate} from "react-router-dom";

import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";

const CustomNavbar = () => {

    const navigate = useNavigate()
    const location = useLocation();

    const currentPath = location.pathname;

    const user = JSON.parse(sessionStorage.getItem("profile"));

    return (
        <Navbar fluid rounded className="w-full">
            <div className="ml-10">
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Thư viện số WISDOM</span>
                </Navbar.Brand>
            </div>

            <div className="flex items-center gap-x-[10%] w-2/3 justify-end">
                <div className="flex md:order-2 mr-10">
                    {user && (
                        <Dropdown arrowIcon={false} inline label={<Avatar alt={user.lastName} img ={user.thumnail ? user.thumbnail : ""} rounded bordered />}>
                            <Dropdown.Header>
                                <span className="block text-lg font-normal text-green-400 mb-3">
                                    {user.lastName} {user.firstName}
                                </span>
                                <span className="block truncate text-sm font-medium">@{user.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Trang cá nhân</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Đăng xuất</Dropdown.Item>
                        </Dropdown>
                    )}

                    {!user && (
                        <Button color="success" pill onClick={() => navigate("/login")}>
                            Đăng nhập
                        </Button>
                    )}
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse className="ml-0">
                    <Navbar.Link href="/home" active={currentPath === "/home"} className={`text-base md:active:text-green-400 md:hover:text-green-500 ${currentPath === "/home" ? "md:text-green-400" : ""}`}>
                        Trang chủ
                    </Navbar.Link>
                    <Navbar.Link href="/documents" active={currentPath === "/documents"} className={`text-base md:active:text-green-400 md:hover:text-green-500 ${currentPath === "/documents" ? "md:text-green-400" : ""}`}>
                        Tài liệu
                    </Navbar.Link>
                    <Navbar.Link href="/institutions" active={currentPath === "/institutions"} className={`text-base md:active:text-green-400 md:hover:text-green-500 ${currentPath === "/institutions" ? "md:text-green-400" : ""}`}>
                        Trường học
                    </Navbar.Link>
                    <Navbar.Link href="/fields" active={currentPath === "/fields"} className={`text-base md:active:text-green-400 md:hover:text-green-500 ${currentPath === "/fields" ? "md:text-green-400" : ""}`}>
                        Lĩnh vực
                    </Navbar.Link>
                    <Navbar.Link href="/categories" active={currentPath === "/categories"} className={`text-base md:active:text-green-400 md:hover:text-green-500 ${currentPath === "/categories" ? "md:text-green-400" : ""}`}>
                        Danh mục
                    </Navbar.Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};
export default CustomNavbar;
