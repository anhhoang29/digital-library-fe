import React from "react";

import KeyCard from "../../../components/student/card/KeyCard";

import fieldImage from "../../../assets/images/field.png";

const ListFields = () => {
    return (
        <>
            <div className="bg-gray-50 h-full w-fit overflow-auto">
                <div className="px-[10%]">
                    <div className="grid place-items-center mt-20 mb-20">
                        <img src={fieldImage} alt="" width="20%" height="20%" />
                        <h2 class="text-3xl font-semibold text-gray-500 dark:text-white">Bạn muốn tìm lĩnh vực nào?</h2>
                    </div>

                    <div className="grid grid-cols-5 gap-8 mb-20">
                        <KeyCard />
                        <KeyCard />
                        <KeyCard />
                        <KeyCard />
                        <KeyCard />
                        <KeyCard />
                        <KeyCard />
                        <KeyCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListFields;
