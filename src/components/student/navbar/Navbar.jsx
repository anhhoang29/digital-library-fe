import React from "react";

import { Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";

const CustomNavbar = () => {
    return (
        <Navbar fluid rounded className="w-full">
            <div className="ml-10">
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </Navbar.Brand>
            </div>

            <div className="flex md:order-2 mr-10">
                <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}>
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Trang chủ</Dropdown.Item>
                    <Dropdown.Item>Danh mục</Dropdown.Item>
                    <Dropdown.Item>Trường học</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>

            <div className="w-1/3">
                <TextInput id="top-search" type="text" placeholder="Search" className="rounded-full" style={{ borderRadius: "100px" }} required />
            </div>

            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">Trang chủ</Navbar.Link>
                <Navbar.Link href="#">Trường học</Navbar.Link>
                <Navbar.Link href="#">Lĩnh vực</Navbar.Link>
                <Navbar.Link href="#">Danh mục</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default CustomNavbar;
