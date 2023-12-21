import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

import { HiBadgeCheck, HiOutlineEye, HiOutlineHeart, HiOutlineCalendar } from "react-icons/hi";

import "./card.css";
const FullCard = (props) => {
    const { docName, thumbnail, docIntroduction, totalView, totalFavorite, updatedAt, slug } = props;

    const navigate = useNavigate();

    return (
        <>
            <div
                className="flex w-full rounded-lg h-[11.5rem] border-gray-50 border shadow-lg bg-white cursor-pointer hover:bg-green-100 focus:bg-green-50 active:bg-green-50 focus:border-green-200 active:border-green-200 focus:border-2 active:border-2"
                onClick={() => navigate(`/documents/${slug}`)}>
                <div className="w-2/12 rounded-lg m-4 shadow-lg border ">
                    <img src={thumbnail} className="h-full w-full object-cover m-auto rounded-lg" alt={docName} />
                </div>
                <div className="w-8/12 p-3">
                    <div className="mb-2">
                        <h5 className="text-lg font-medium text-justify text-green-400 truncate whitespace-normal line-clamp-2">{docName}</h5>
                    </div>

                    <div className="mb-2">
                        <h5 className="text-sm text-justify truncate whitespace-normal line-clamp-3">{docIntroduction}</h5>
                    </div>

                    <div className="flex gap-10 text-base">
                        <div className="flex items-center">
                            <HiOutlineCalendar className="w-5 h-5 mr-2 text-gray-500 dark:text-white" />
                            <span className="block text-base text-red-500 dark:text-white">{moment(updatedAt).format("DD/MM/yyyy")}</span>
                        </div>

                        <div className="flex items-center">
                            <HiOutlineEye className="w-5 h-5 mr-2 text-gray-500 dark:text-white" />
                            <span className="block text-red-500 dark:text-white">{totalView}</span>
                        </div>

                        <div className="flex items-center">
                            <HiOutlineHeart className="w-5 h-5 mr-2 text-gray-500 dark:text-white" />
                            <span className="block text-base text-red-500 dark:text-white">{totalFavorite}</span>
                        </div>
                    </div>
                </div>
                {totalView >= 100 && (
                    <div className="w-2/12 p-3 ml-auto flex items-center flex-col justify-center">
                        <HiBadgeCheck className="w-10 h-10 text-green-500" />
                        <h5 className="text-md mt-2 font-medium tracking-tight text-green-400 dark:text-white">Xem nhiều</h5>
                    </div>
                )}
            </div>
        </>
    );
};

export default FullCard;
