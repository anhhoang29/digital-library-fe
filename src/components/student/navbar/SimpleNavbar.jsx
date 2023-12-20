import React from "react";
import { useLocation , useNavigate, Link} from "react-router-dom";

import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";

import logo from "../../../assets/images/logo.png";
const SimpleNavbar = () => {

    return (
        <Navbar fluid rounded className="w-full">
            <div className="ml-10">
                <Navbar.Brand as={Link} to="/home" className="hover:text-black">
                    <img src={logo} className="mr-3 h-16 sm:h-16" alt="WISDO Logo" />
                    {/* <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">THƯ VIỆN SỐ</span> */}
                </Navbar.Brand>
            </div>

            <Navbar.Collapse className="mr-10">
                <Navbar.Link as={Link} to="/home" className="text-base text-green-400 md:active:text-green-400 md:hover:text-green-600">
                    Trang chủ
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default SimpleNavbar;