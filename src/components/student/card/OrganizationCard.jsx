import React from "react";

import { HiOutlineTag } from "react-icons/hi";

const OrganizationCard = (props) => {
    return (
        <>
            <div className="flex justify-around w-fit items-center rounded-full shadow-lg bg-green-400 h-auto p-4 hover:bg-green-200 cursor-pointer">
                <HiOutlineTag className="h-5 w-5 text-bold text-white mr-2" />

                <h4 class="text-base text-white text-center font-medium">Trường Đại học Sư phạm Kỹ thuật TP HCM</h4>
            </div>
        </>
    );
};

export default OrganizationCard;
