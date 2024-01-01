import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Toast } from "flowbite-react";
import { HiOutlineCheck, HiX } from "react-icons/hi";

import usePrivateAxios from "../../../api/usePrivateAxios";

import { getRecentDocuments } from "../../../api/main/recencyAPI";
import DocumentCard from "../../../components/student/card/Card";

const RecentDocument = () => {
    usePrivateAxios();

    const navigate = useNavigate();

    const accessToken = localStorage.getItem("accessToken");
    const user = JSON.parse(sessionStorage.getItem("profile"));

    const [documentList, setDocumentList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("Đã xảy ra lỗi! Vui lòng thử lại!");
    const [status, setStatus] = useState(0);

    useEffect(() => {
        getRecentList();
    }, [currentPage, search]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const getRecentList = async () => {
        try {
            const response = await getRecentDocuments();

            if (response.status === 200) {
                setDocumentList(response.data);
                // setTotalPages(response.data.totalPages);
            } else {
                // navigate("/error-500");
            }
        } catch (error) {
            navigate("/error-500");
        }
    };

    return (
        <>
            {status === -1 && (
                <Toast className="top-1/4 right-5 w-100 fixed z-50">
                    <HiX className="h-5 w-5 bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200" />
                    <div className="pl-4 text-sm font-normal">{message}</div>
                </Toast>
            )}

            {status === 1 && (
                <Toast className="top-1/4 right-5 fixed w-100 z-50">
                    <HiOutlineCheck className="h-5 w-5 bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200" />
                    <div className="pl-4 text-sm font-normal">{message}</div>
                </Toast>
            )}

            <div className="flex-1 p-4 bg-gray-50 h-full">
                <div className="rounded-lg bg-white py-8 px-8 ">
                    <div className="mb-5 flex items-center">
                        <p className="text-2xl font-medium text-green-400">Tiếp tục đọc</p>
                    </div>

                    {documentList.length === 0 && (
                        <p className="text-lg font-medium ">
                            Gần đây bạn chưa đọc tài liệu nào! &nbsp;
                            <span className="text-green-400 hover:text-green-500 cursor-pointer" onClick={() => navigate("/documents")}>
                                Khám phá ngay!
                            </span>
                        </p>
                    )}

                    <div className="grid grid-cols-4 gap-8">
                        {documentList.map((document) => (
                            <DocumentCard docName={document.docName} slug={document.slug} thumbnail={document.thumbnail} totalView={document.totalView} totalFavorite={document.totalFavorite} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentDocument;
