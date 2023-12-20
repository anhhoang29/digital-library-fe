import React from "react";
import { useNavigate } from "react-router-dom";

import CustomNavbar from "../../../components/student/navbar/Navbar";

import icon404 from "../../../assets/images/404_2.svg";

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col h-screen">
            <div className="py-4 sticky top-0 bg-white w-full z-40  border-b">
                <CustomNavbar />
            </div>

            <div class="flex-grow h-full w-full bg-[#f7fafc] grid place-items-center">
                <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                    <div class="w-2/5">
                        <div class="text-7xl font-dark font-bold mb-4">404</div>
                        <p class="text-2xl md:text-3xl font-light leading-normal mb-4">Sorry we couldn't find this page. </p>
                        <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

                        <button
                            class="px-4 rounded-full shadow-lg inline py-3 text-sm font-medium leading-5 shadow text-green-400 transition-colors duration-150 border border-transparent focus:outline-none focus:shadow-outline-green bg-white active:bg-green-500 hover:bg-green-400 hover:text-white"
                            onClick={() => navigate("/home")}>
                            Back to homepage
                        </button>
                    </div>
                    <div class="w-2/5">
                        <img src={icon404} alt="404" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error404;
