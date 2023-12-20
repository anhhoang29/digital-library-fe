import React from "react";

import CustomNavbar from "../../components/student/navbar/Navbar";
import CustomSidebar from "../../components/student/sidebar/Sidebar";

import UserRoute from "../../components/routers/UserRouters";
import CustomFooter from "../../components/student/footer/Footer";

const Main = () => {
    return (
        <div className="relative">
            <div className="py-4 sticky top-0 bg-white w-full z-40  border-b">
                <CustomNavbar />
            </div>

            <div className="h-full flex">
                <div className="w-[18%] bg-white border-r h-full ">
                    <CustomSidebar />
                </div>

                <div className="w-[82%] min-h-screen">
                    <UserRoute />
                </div>
            </div>

            <div>
                <CustomFooter />
            </div>
        </div>
    );
};

export default Main;
