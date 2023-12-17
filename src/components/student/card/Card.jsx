import React from "react";

import { HiIdentification } from "react-icons/hi";

import "./card.css";
const DocumentCard = () => {
    return (
        <>
            <div className="max-w-full rounded-lg max-h-[30rem] h-full shadow-lg bg-white">
                <img src="https://drive.google.com/uc?id=16mZnZI-7LZ2u-KFtO_k8ag9r0KpszNwh" className="h-[12rem] w-full object-cover rounded-t-lg m-auto" alt="Document thumbnail" />

                <div className="p-3">
                    <div className="leading-6 h-6">
                        <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">Giáo trình HDH</h5>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex items-center font-bold">
                            <HiIdentification className="w-5 h-5 mr-2 text-gray-800 dark:text-white" />
                            <span className="block text-base font-medium dark:text-white">15</span>
                        </div>

                        <div className="flex items-center font-bold">
                            <HiIdentification className="w-5 h-5 mr-2 text-gray-800 dark:text-white" />
                            <span className="block text-base font-medium dark:text-white">17</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DocumentCard;
