import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Pagination } from "flowbite-react";

import moment from "moment";

import DocumentCard from "../../../components/student/card/Card";

import { getUploadedDocumentsForGuestAndStudent } from "../../../api/main/documentAPI";
import { getAUser } from "../../../api/main/userAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";
import profileBackground from "../../../assets/images/default_background.jpg";
import profileImage from "../../../assets/images/default_profile.jpg";

import "../document/document.css"

const UserWall = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    usePrivateAxios();

    const [user, setUser] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const [documentList, setDocumentList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getUserProfile();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
        getDocumentList(currentPage);
    }, [search]);

    useEffect(() => {
        getDocumentList(currentPage);
    }, [currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const getDocumentList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getUploadedDocumentsForGuestAndStudent(userId, {
                params: {
                    page: page - 1,
                    size: 12,
                    order: "updatedAt",
                    category: "all",
                    field: "all",
                    s: search,
                },
            });
            // setIsFetching(false);
            if (response.status === 200) {
                setDocumentList(response.data.content);
                setTotalPages(response.data.totalPages);
                setTotalRecords(response.data.totalElements);
            } else {
            }
        } catch (error) {
            // 500
        }
    };

    const getUserProfile = async () => {
        try {
            const response = await getAUser(userId);

            if (response.status === 200) {
                const user = response.data;
                setUser(user);
            } else {
                // 404
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDetail = (slug) => {
        navigate(`/manager/documents/${slug}`);
    };

    return (
        <div>
            <div className="bg-gray-50 p-4">
                <div className="flex w-full ">
                    <div className="p-0 h-min rounded-lg shadow-lg bg-white w-1/4 mr-5">
                        <img alt="Profile" src={profileBackground} className="rounded-t-lg w-full" />
                        <div className="p-5 grid place-items-center">
                            <img alt="Profile" src={user && user.image ? user.image : profileImage} className="mb-3 mt-[-4.75rem] rounded-full border-solid border-4 border-gray w-28 h-28" />

                            <h5 className="mb-2 text-2xl font-medium dark:text-white text-center">
                                {user && user.lastName} {user && user.firstName}
                            </h5>

                            <div className="mt-2 w-full">
                                <div className="flex text-center font-bold">
                                    <span className="block text-base font-normal text-green-400 dark:text-white">{user && user.organization && user.organization.orgName}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5 text-sm font-medium px-8 flex flex-col gap-y-1">
                            <span className="block">
                                Tham gia từ: <span className="text-red-400">{user && moment(user.createdAt).format("DD-MM-YYYY")}</span>
                            </span>
                            <span className="block">
                                Tổng số tài liệu: <span className="text-red-400">{user && user.totalDocuments}</span>
                            </span>
                            <span className="block">
                                Tổng lượt xem: <span className="text-red-400">{user && user.totalViews}</span>
                            </span>
                            <span className="block">
                                Tổng lượt thích: <span className="text-red-400">{user && user.totalLikes}</span>
                            </span>
                        </div>
                    </div>

                    <hr />

                    <div className="bg-white rounded-lg h-min p-4 shadow-lg w-3/4">
                        <div className="mb-5 flex justify-between">
                            <div className="flex items-center mb-2 font-bold">
                                <span className="block text-2xl font-bold text-green-400 dark:text-white">Đã tải lên</span>
                            </div>

                            <div className="w-1/3">
                                <div className="relative rounded-full">
                                    <input type="text" id="list-search" className="text-sm text-black block w-full p-3 ps-5 border border-gray-300 bg-white focus:ring-0 focus:border-green-400 rounded-full" placeholder="Tìm kiếm" onChange={(e) => setSearch(e.target.value)} value={search} required />

                                    <div className="absolute inset-y-0 end-0 flex items-center pe-5 cursor-pointer rounded-full">
                                        <svg className="w-4 h-4 text-green-400 hover:text-green-200 focus:text-green-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="mb-4">
                            Kết quả <span className="text-cyan-600 font-semibold">{documentList.length > 0 ? (currentPage - 1) * 12 + 1 : 0}</span> đến <span className="text-cyan-600 font-semibold">{documentList.length > 0 ? documentList.length + (currentPage - 1) * 12 : 0}</span> trong khoảng{" "}
                            <span className="text-cyan-600 font-semibold">{totalRecords}</span>
                        </p>

                        <div className="grid grid-cols-3 gap-8 card-small w-full">
                            {documentList.map((document) => (
                                <DocumentCard docName={document.docName} slug={document.slug} thumbnail={document.thumbnail} totalView={document.totalView} totalFavorite={document.totalFavorite} />
                            ))}
                        </div>

                        {documentList.length !== 0 && (
                            <div className="flex overflow-x-auto sm:justify-center mt-4">
                                <Pagination previousLabel="Trước" nextLabel="Sau" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserWall;
