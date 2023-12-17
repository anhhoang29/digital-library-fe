import React from "react";

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import {HiAcademicCap, HiColorSwatch , HiCollection } from "react-icons/hi";

const Home = () => {
    return (
        <div>
            <div className="py-4 sticky top-0 bg-white w-full z-40 border-b">
                <Navbar fluid rounded className="w-full">
                    <div className="ml-10">
                        <Navbar.Brand href="https://flowbite-react.com">
                            <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                        </Navbar.Brand>
                    </div>

                    <div className="flex md:order-2 mr-10">
                        <Button color="success" pill>
                            Đăng nhập
                        </Button>

                        <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}>
                            <Dropdown.Header>
                                <span className="block text-sm">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Tài khoản</Dropdown.Item>
                            <Dropdown.Item>Đăng xuất</Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>
                </Navbar>
            </div>

            <div className="grid place-items-center mt-[10%]">
                <div className="text-center">
                    <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Chào mừng đến với <mark className="px-2 text-white bg-green-400 rounded dark:bg-green-400">Wisdo</mark>
                    </h1>
                    <p className=" mt-5 text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-400">Khám phá những tài liệu hữu ích dành cho bạn</p>
                </div>

                <div className="w-1/2 mt-10">
                    <div className="relative rounded-full">
                        <input type="text" id="home-search" className="text-lg block w-full p-4 ps-5 text-gray-900 border border-gray-300 bg-white focus:ring-green-400 focus:border-green-400 rounded-full" placeholder="Tìm kiếm" required />

                        <div className="absolute inset-y-0 end-0 flex items-center pe-5  cursor-pointer">
                            <svg className="w-6 h-6 text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <p className="text-base font-bold dark:text-gray-400">
                        Hoặc <br /> duyệt tìm theo
                    </p>
                </div>

                <div className="grid place-items-center w-3/4 mt-5">
                    <div className="mb-4 border-b border-gray-200 dark:border-gray-700 ">
                        <ul className="flex flex-wrap -mb-px text-xl font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg gap-2" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                    <HiCollection />
                                    Danh mục
                                </button>
                            </li>

                            <li className="me-2" role="presentation">
                                <button
                                    className="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 gap-2"
                                    id="dashboard-tab"
                                    data-tabs-target="#dashboard"
                                    type="button"
                                    role="tab"
                                    aria-controls="dashboard"
                                    aria-selected="false">
                                    <HiAcademicCap />
                                    Trường học
                                </button>
                            </li>

                            <li className="me-2" role="presentation">
                                <button
                                    className="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 gap-2"
                                    id="settings-tab"
                                    data-tabs-target="#settings"
                                    type="button"
                                    role="tab"
                                    aria-controls="settings"
                                    aria-selected="false">
                                    <HiColorSwatch />
                                    Lĩnh vực
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div id="default-tab-content">
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
                                content visibility and styling.
                            </p>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
                                content visibility and styling.
                            </p>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
                                content visibility and styling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
