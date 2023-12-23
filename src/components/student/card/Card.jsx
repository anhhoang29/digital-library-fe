import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Modal, Tooltip } from "flowbite-react";
import { HiBookmark, HiEye, HiHeart, HiOutlineLightBulb, HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

import "./card.css";

const DocumentCard = (props) => {
    const { docName, slug, thumbnail, totalView, totalFavorite, type, action, tab, reason } = props;

    const [openModal, setOpenModal] = useState(false);

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/documents/${slug}/edit`);
    };

    const handleViewReason = () => {
        setOpenModal(true);
    };

    return (
        <>
            {/* <Tooltip content={docName} style="light" className="w-full"> */}
            <div
                className="rounded-lg h-[21rem] w-full border-gray-200 border shadow-lg bg-white cursor-pointer hover:bg-green-100 focus:bg-green-50 active:bg-green-50 focus:border-green-200 active:border-green-200 focus:border-2 active:border-2"
                title={docName}
                onClick={() => navigate(`/documents/${slug}`)}>
                <div className="rounded-lg m-3">
                    <img src={thumbnail} className="h-[12rem] w-full object-cover rounded-lg m-auto" alt={docName} />
                </div>

                <div className="px-3">
                    <div className="mb-1">
                        <p className="text-md text-justify font-medium truncate whitespace-normal line-clamp-3 text-green-400 dark:text-white">{docName}</p>
                    </div>

                    <div className="flex gap-2 pb-1.5 ">
                        <div className="flex items-center font-bold">
                            <HiHeart className="w-5 h-5 mr-1 text-gray-800 dark:text-white" />
                            <span className="block text-base font-medium dark:text-white">{totalFavorite}</span>
                        </div>

                        <div className="flex items-center font-bold">
                            <HiEye className="w-5 h-5 mr-1 text-gray-800 dark:text-white" />
                            <span className="block text-base font-medium dark:text-white">{totalView}</span>
                        </div>

                        <div className="flex items-center ml-auto">
                            {type === "LIKE" && (
                                <Tooltip content="Bỏ thích" style="light">
                                    <HiHeart
                                        className="w-8 h-8 text-red-500 hover:text-red-300 active:text-red-200"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            action();
                                        }}
                                    />
                                </Tooltip>
                            )}

                            {type === "SAVE" && (
                                <Tooltip content="Bỏ lưu" style="light">
                                    <HiBookmark
                                        className="w-8 h-8 text-green-500 hover:text-green-300 active:text-green-200"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            action();
                                        }}
                                    />
                                </Tooltip>
                            )}

                            {type === "RUD" && (
                                <>
                                    <Tooltip content="Chỉnh sửa" style="light">
                                        <HiOutlinePencilAlt
                                            className="w-7 h-7 text-yellow-500 hover:text-yellow-300 active:text-yellow-200 mr-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleEdit();
                                            }}
                                        />
                                    </Tooltip>

                                    <Tooltip content="Xoá" style="light">
                                        <HiOutlineTrash
                                            className="w-7 h-7 text-red-500 hover:text-red-300 active:text-red-200"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                action();
                                            }}
                                        />
                                    </Tooltip>
                                </>
                            )}

                            {type === "VRUD" && (
                                <>
                                    <Tooltip content="Chỉnh sửa" style="light">
                                        <HiOutlinePencilAlt
                                            className="w-7 h-7 text-yellow-500 hover:text-yellow-300 active:text-yellow-200 mr-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleEdit();
                                            }}
                                        />
                                    </Tooltip>

                                    <Tooltip content="Xoá" style="light">
                                        <HiOutlineTrash
                                            className="w-7 h-7 text-red-500 hover:text-red-300 active:text-red-200"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                action();
                                            }}
                                        />
                                    </Tooltip>

                                    <Tooltip content="Xem lý do" style="light">
                                        <HiOutlineLightBulb
                                            className="w-7 h-7 text-orange-500 hover:text-orange-300 active:text-orange-200 ml-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleViewReason();
                                            }}
                                        />
                                    </Tooltip>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <p className="title">{docName}</p>
            {/* </Tooltip> */}

            <Modal show={openModal} size="sm" onClose={() => setOpenModal(false)}>
                <Modal.Header className="text-red-500">Lý do từ chối</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{reason}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)} color="failure" className="rounded-full">
                        Đóng
                    </Button>
                    {/* <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DocumentCard;
