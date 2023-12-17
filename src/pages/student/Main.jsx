import React from "react";

import CustomNavbar from "../../components/student/navbar/Navbar";
import CustomSidebar from "../../components/student/sidebar/Sidebar";

import UserRoute from "../../components/routers/UserRouters";

const Main = () => {
    return (
        <div className="relative">
            <div className="py-4 sticky top-0 bg-white w-full z-40">
                <CustomNavbar />
            </div>

            <hr />

            <div className="h-full ">
                <div className="w-[18%] bg-white border-r h-full fixed">
                    <CustomSidebar />
                </div>

                <div className="ml-[18%] h-full">
                    <UserRoute />
                </div>
            </div>
        </div>
    );
};

export default Main;
