import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, Modal, Pagination, Toast } from "flowbite-react";
import { HiDocumentRemove, HiOutlineCheck, HiOutlineDotsHorizontal, HiX } from "react-icons/hi";

import { deleteADocument, getMyUploadedDocuments } from "../../../api/main/documentAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

import DocumentCard from "../../../components/student/card/Card";

import "./document.css";

const UploadedDocument = () => {
    usePrivateAxios();

    const navigate = useNavigate();
    const location = useLocation();

    const accessToken = localStorage.getItem("accessToken");
    const user = JSON.parse(sessionStorage.getItem("profile"));

    const [documentList, setDocumentList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalApprovedElements, setTotalApprovedElements] = useState(0);
    const [totalPendingElements, setTotalPendingElements] = useState(0);
    const [totalRejectedElements, setTotalRejectedElements] = useState(0);
    const [size, setSize] = useState(12);
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("Đã xảy ra lỗi! Vui lòng thử lại!");
    const [verifiedStatus, setVerifiedStatus] = useState(1); // 0: not verified, 1: verified, -1: rejected
    const [status, setStatus] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [docId, setDocId] = useState("");
    const [isVerifiedVisible, setIsVerifiedVisible] = useState(false);
    const [isPendingVisible, setIsPendingVisible] = useState(false);
    const [isRejectedVisible, setIsRejectedVisible] = useState(false);
    const [isVerifiedActive, setIsVerifiedActive] = useState("text-green-400");
    const [isPendingActive, setIsPendingActive] = useState("");
    const [isRejectedActive, setIsRejectedActive] = useState("");

    useEffect(() => {
        getTotalApprovedElements();
        getTotalPendingElements();
        getTotalRejectedElements();
    }, [location]);

    useEffect(() => {
        //window.location.reload();
    }, [location]);

    useEffect(() => {
        getUploadedList(currentPage);
    }, [currentPage, search, verifiedStatus]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const handleDelete = (docId) => {
        setOpenModal(true);
        setDocId(docId);
    };

    const getUploadedList = async (page) => {
        try {
            const response = await getMyUploadedDocuments({
                params: {
                    page: page - 1,
                    size: size,
                    order: "updatedAt",
                    organization: "all",
                    category: "all",
                    field: "all",
                    status: verifiedStatus,
                    s: search,
                },
            });

            if (response.status === 200) {
                setDocumentList(response.data.content);
                setTotalPages(response.data.totalPages);
            } else {
            }
        } catch (error) {
            navigate("/error-500");
        }
    };

    const deleteDocument = async (docId) => {
        setIsLoading(true);
        try {
            const response = await deleteADocument(docId);
            setIsLoading(false);
            setOpenModal(false);
            if (response.status === 200) {
                setStatus(1);
                setMessage("Xoá tài liệu thành công!");
                setTimeout(() => {
                    setStatus(0);
                }, 2000);

                setCurrentPage(1);
                getUploadedList(currentPage);
            } else {
                setStatus(-1);
                setMessage("Đã xảy ra lỗi! Vui lòng thử lại!");
                setTimeout(() => {
                    setStatus(0);
                }, 2000);
            }
        } catch (error) {
            navigate("/error-500");
        }
    };

    const getTotalPendingElements = async () => {
        try {
            const response = await getMyUploadedDocuments({
                params: {
                    status: 0,
                    s: "",
                },
            });

            if (response.status === 200) {
                setTotalPendingElements(response.data.totalElements);
            } else {
            }
        } catch (error) {
            navigate("/error-500");
        }
    };

    const getTotalRejectedElements = async () => {
        try {
            const response = await getMyUploadedDocuments({
                params: {
                    status: -1,
                    s: "",
                },
            });

            if (response.status === 200) {
                setTotalRejectedElements(response.data.totalElements);
            } else {
            }
        } catch (error) {
            navigate("/error-500");
        }
    };

    const getTotalApprovedElements = async () => {
        try {
            const response = await getMyUploadedDocuments({
                params: {
                    status: 1,
                    s: "",
                },
            });

            if (response.status === 200) {
                setTotalApprovedElements(response.data.totalElements);
            } else {
            }
        } catch (error) {
            navigate("/error-500");
        }
    };

    const handleVerifiedTabClick = () => {
        setVerifiedStatus(1);
        setCurrentPage(1);
        setIsVerifiedActive("text-blue-600");
        setIsPendingActive("");
        setIsRejectedActive("");
    };

    const handlePendingTabClick = () => {
        setVerifiedStatus(0);
        setIsVerifiedActive();
        setIsPendingActive("text-blue-600");
        setIsRejectedActive("");
    };

    const handleRejectedTabClick = () => {
        setVerifiedStatus(-1);
        setIsVerifiedActive("");
        setIsPendingActive("");
        setIsRejectedActive("text-blue-600");
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

            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiDocumentRemove className="mx-auto mb-4 h-14 w-14 text-red-600 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Bạn có chắc chắn muốn xoá tài liệu này không?</h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" isProcessing={isLoading} onClick={() => deleteDocument(docId)}>
                                {"Chắc chắn"}
                            </Button>
                            <Button color="gray" disabled={isLoading} onClick={() => setOpenModal(false)}>
                                Huỷ bỏ
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="flex-1 p-4 bg-gray-50 h-full">
                <div className="rounded-lg bg-white py-8 px-8 ">
                    <div className="grid place-items-center mt-5">
                        <div className="mb-4 border-b border-gray-200 dark:border-gray-700 ">
                            <ul className="flex flex-wrap -mb-px text-xl font-medium text-center tab-bar" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                                <div className="tab-verified">
                                    <li className={`me-2 ${isVerifiedActive}`} role="presentation">
                                        <button
                                            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg gap-2 border-b-2 rounded-t-lg gap-2 hover:text-green-300 active:text-green-400"
                                            id="approved-tab"
                                            data-tabs-target="#approved"
                                            type="button"
                                            role="tab"
                                            aria-controls="approved"
                                            aria-selected="true"
                                            onClick={handleVerifiedTabClick}>
                                            <HiOutlineCheck />
                                            Đã được duyệt ({totalApprovedElements})
                                        </button>
                                    </li>
                                </div>

                                <div className=" tab-pending">
                                    <li className={`me-2 ${isPendingActive}`} role="presentation">
                                        <button
                                            className="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 gap-2 hover:text-yellow-300 active:text-yellow-400"
                                            id="pending-tab"
                                            data-tabs-target="#pending"
                                            type="button"
                                            role="tab"
                                            aria-controls="pending"
                                            aria-selected="false"
                                            onClick={handlePendingTabClick}>
                                            <HiOutlineDotsHorizontal />
                                            Đang chờ ({totalPendingElements})
                                        </button>
                                    </li>
                                </div>
                                <div className="tab-rejected">
                                    <li className={`me-2 ${isRejectedActive}`} role="presentation">
                                        <button
                                            className="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 gap-2 hover:text-red-300 active:text-red-400"
                                            id="rejected-tab"
                                            data-tabs-target="#rejected"
                                            type="button"
                                            role="tab"
                                            aria-controls="rejected"
                                            aria-selected="false"
                                            onClick={handleRejectedTabClick}>
                                            <HiX />
                                            Đã từ chối ({totalRejectedElements})
                                        </button>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div id="default-tab-content" className="w-full">
                            <div className="mt-5 w-full" id="approved" role="tabpanel" aria-labelledby="approved-tab">
                                <div className="mb-5 grid place-items-center">
                                    <div className="relative rounded-full w-1/3">
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
                                    <p className="text-lg font-medium text-center">
                                        Bạn chưa có tài liệu nào! &nbsp;
                                        <span className="text-green-400 hover:text-green-500 cursor-pointer" onClick={() => navigate("/documents")}>
                                            Khám phá ngay!
                                        </span>
                                    </p>
                                )}

                                <div className="grid grid-cols-4 gap-8 mt-10 w-full">
                                    {documentList.map((document) => (
                                        <DocumentCard docName={document.docName} slug={document.slug} thumbnail={document.thumbnail} totalView={document.totalView} totalFavorite={document.totalFavorite} reason={document.note} type="RUD" action={() => handleDelete(document.docId)} />
                                    ))}
                                </div>

                                {documentList.length !== 0 && (
                                    <div className="flex overflow-x-auto sm:justify-center mt-4">
                                        <Pagination previousLabel="" nextLabel="" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
                                    </div>
                                )}
                            </div>

                            <div className="hidden mt-5 w-full" id="pending" role="tabpanel" aria-labelledby="pending-tab">
                                <div className="mb-5 grid place-items-center">
                                    <div className="relative rounded-full w-1/3">
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
                                    <p className="text-lg font-medium text-center">
                                        Bạn chưa có tài liệu nào! &nbsp;
                                        <span className="text-green-400 hover:text-green-500 cursor-pointer" onClick={() => navigate("/documents")}>
                                            Khám phá ngay!
                                        </span>
                                    </p>
                                )}

                                <div className="grid grid-cols-4 gap-8 mt-10 w-full">
                                    {documentList.map((document) => (
                                        <DocumentCard docName={document.docName} slug={document.slug} thumbnail={document.thumbnail} totalView={document.totalView} totalFavorite={document.totalFavorite} reason={document.note} type="RUD" action={() => handleDelete(document.docId)} />
                                    ))}
                                </div>
                            </div>

                            <div className="hidden mt-5 w-full" id="rejected" role="tabpanel" aria-labelledby="rejected-tab">
                                <div className="mb-5 grid place-items-center">
                                    <div className="relative rounded-full w-1/3">
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
                                    <p className="text-lg font-medium text-center">
                                        Bạn chưa có tài liệu nào! &nbsp;
                                        <span className="text-green-400 hover:text-green-500 cursor-pointer" onClick={() => navigate("/documents")}>
                                            Khám phá ngay!
                                        </span>
                                    </p>
                                )}

                                <div className="grid grid-cols-4 gap-8 mt-10 w-full">
                                    {documentList.map((document) => (
                                        <DocumentCard docName={document.docName} slug={document.slug} thumbnail={document.thumbnail} totalView={document.totalView} totalFavorite={document.totalFavorite} reason={document.note} type="VRUD" action={() => handleDelete(document.docId)} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UploadedDocument;
