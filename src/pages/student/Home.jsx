import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import bg from "../../assets/images/main-bg.png";
import CustomFooter from "../../components/student/footer/Footer";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;

    const user = JSON.parse(sessionStorage.getItem("profile"));

    const [searchQuery, setSearchQuery] = React.useState("");

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className=" flex flex-col bg-cover bg-center">
            <div className="py-4 sticky top-0 bg-transparent w-full z-40">
                <Navbar fluid rounded className="w-full bg-transparent">
                    <div className="ml-10">
                        <Navbar.Brand as={Link} to="/home" className="hover:text-black">
                            <img src={logo} className="mr-3 h-10 sm:h-9" alt="Flowbite React Logo" />
                            <span className="self-center text-white whitespace-nowrap text-3xl font-semibold dark:text-white">DIGITAL LIBRARY</span>
                        </Navbar.Brand>
                    </div>

                    <div className="flex items-center gap-x-[5%] w-1/4 justify-end ">
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
                                <Button className="bg-white text-green-400 enabled:hover:bg-green-100 focus:ring-green-200 focus:ring-1" pill onClick={() => navigate("/login")}>
                                    Đăng nhập
                                </Button>
                            )}
                            <Navbar.Toggle />
                        </div>
                        <Navbar.Collapse className="ml-0">
                            <Navbar.Link as={Link} to="/documents" className="text-base text-white md:active:text-white md:hover:text-green-100">
                                Thư viện
                            </Navbar.Link>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>

            <div className="w-full h-screen bg-transparent">
                <div className="grid place-items-center relative top-1/4">
                    <div className="text-center">
                        <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Chào mừng đến với <mark className="px-2 text-white bg-green-400 rounded dark:bg-green-400">Wisdo</mark>
                        </h1>
                        <p className=" mt-5 text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-400">Khám phá những tài liệu hữu ích dành cho bạn</p>
                    </div>

                    <div className="w-1/2 mt-10">
                        <div className="relative rounded-full">
                            <input
                                type="text"
                                id="home-search"
                                className="text-lg block w-full p-4 ps-5 text-gray-900 border border-gray-300 bg-white focus:ring-green-400 focus:border-green-400 rounded-full"
                                placeholder="Tìm kiếm"
                                required
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") navigate(`/search/${searchQuery}`);
                                }}
                            />

                            <div className="absolute inset-y-0 end-0 flex items-center pe-5 cursor-pointer" onClick={() => navigate(`/search/${searchQuery}`)}>
                                <svg className="w-6 h-6 text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <CustomFooter />
            </div>
        </div>
    );
};

export default Home;

{
    /* <div className="mt-10 text-center">
                    <p className="text-base font-bold dark:text-gray-400">
                        Hoặc <br /> duyệt tìm theo
                    </p>
                </div> */
}

{
    /* <div className="grid place-items-center w-3/4 mt-5">
                    <div className="mb-4 border-b border-gray-200 dark:border-gray-700 ">
                        <ul className="flex flex-wrap -mb-px text-xl font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg gap-2" id="organization-tab" data-tabs-target="#organization" type="button" role="tab" aria-controls="organization" aria-selected="false">
                                    <HiCollection />
                                    Danh mục
                                </button>
                            </li>

                            <li className="me-2" role="presentation">
                                <button
                                    className="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 gap-2"
                                    id="category-tab"
                                    data-tabs-target="#category"
                                    type="button"
                                    role="tab"
                                    aria-controls="category"
                                    aria-selected="false">
                                    <HiAcademicCap />
                                    Trường học
                                </button>
                            </li>

                            <li className="me-2" role="presentation">
                                <button
                                    className="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 gap-2"
                                    id="field-tab"
                                    data-tabs-target="#field"
                                    type="button"
                                    role="tab"
                                    aria-controls="field"
                                    aria-selected="false">
                                    <HiColorSwatch />
                                    Lĩnh vực
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div id="default-tab-content">
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="organization" role="tabpanel" aria-labelledby="organization-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
                                content visibility and styling.
                            </p>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="category" role="tabpanel" aria-labelledby="category-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
                                content visibility and styling.
                            </p>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="field" role="tabpanel" aria-labelledby="field-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
                                content visibility and styling.
                            </p>
                        </div>
                    </div>
                </div> */
}
