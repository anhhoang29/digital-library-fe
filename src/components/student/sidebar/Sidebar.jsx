import React from "react";

import { Avatar, Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiUser } from "react-icons/hi";

const CustomSidebar = () => {
    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example" className="w-full bg-white rounded-lg h-full">
            <Sidebar.Items className="bg-white rounded-lg h-full">
                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Tài liệu của tôi
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiInbox}>
                        Yêu thích
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Đã lưu
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Gần đây
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};
export default CustomSidebar;
