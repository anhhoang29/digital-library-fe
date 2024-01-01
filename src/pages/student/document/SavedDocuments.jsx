import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Pagination, Toast } from "flowbite-react";
import { HiOutlineCheck, HiX } from "react-icons/hi";

import { getSavedDocuments, saveDocument } from "../../../api/main/saveAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

import DocumentCard from "../../../components/student/card/Card";

const SavedDocument = () => {
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
        getSavedList(currentPage);
    }, [currentPage, search]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const getSavedList = async (page) => {
        try {
            const response = await getSavedDocuments({
                params: {
                    page: page - 1,
                    size: 12,
                    s: search,
                },
            });

            if (response.status === 200) {
                setDocumentList(response.data.content);
                setTotalPages(response.data.totalPages);
            } else {
                // navigate("/error-500");
            }
        } catch (error) {
            navigate("/error-500");
        }
    };

    const handleSave = async (slug) => {
        try {
            const response = await saveDocument(slug);

            if (response.status === 200) {
                setMessage("Đã xoá khỏi danh sách đã lưu!");

                setCurrentPage(1);
                getSavedList(currentPage);

                setStatus(1);
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            } else {
                setStatus(-1);
                setMessage("Đã xảy ra lỗi! Vui lòng thử lại!");
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
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
                        <p className="text-2xl font-medium text-green-400">Danh sách đã lưu</p>

                        <div className="relative rounded-full ml-auto w-1/4">
                            <input
                                type="text"
                                id="list-search"
                                className="text-sm text-black block w-full p-3 ps-5 border border-gray-300 bg-white focus:ring-0 focus:border-green-400 rounded-full"
                                placeholder="Tìm kiếm"
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1);
                                }}
                                value={search}
                                required
                            />

                            <div className="absolute inset-y-0 end-0 flex items-center pe-5 cursor-pointer rounded-full">
                                <svg className="w-4 h-4 text-green-400 hover:text-green-200 focus:text-green-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {documentList.length === 0 && (
                        <p className="text-lg font-medium ">
                            Bạn chưa lưu tài liệu nào! &nbsp;
                            <span className="text-green-400 hover:text-green-500 cursor-pointer" onClick={() => navigate("/documents")}>
                                Khám phá ngay!
                            </span>
                        </p>
                    )}

                    <div className="grid grid-cols-4 gap-8">
                        {documentList.map((document) => (
                            <DocumentCard docName={document.docName} slug={document.slug} thumbnail={document.thumbnail} totalView={document.totalView} totalFavorite={document.totalFavorite} type="SAVE" action={() => handleSave(document.slug)} />
                        ))}
                    </div>

                    {documentList.length !== 0 && (
                        <div className="flex overflow-x-auto sm:justify-center mt-4">
                            <Pagination previousLabel="" nextLabel="" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SavedDocument;
