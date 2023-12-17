import React from "react";

import { HiOutlineTag } from "react-icons/hi";

const KeyCard = (props) => {
    return (
        <>
            <div className="rounded-2xl shadow-lg bg-red-400 grid place-items-center h-auto p-5 hover:bg-red-200 cursor-pointer">
                <HiOutlineTag className="h-10 w-10 mb-2 text-white" />

                <h4 class="text-xl font-bold text-white text-center">Tài chính - Ngân hàng</h4>
            </div>
        </>
    );
};

export default KeyCard;
