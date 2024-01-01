import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ActionButton from "../../../components/management/action-button/ActionButton";
import Table from "../../../components/management/table/Table";

import { Button, Label, Modal, Pagination, Spinner, TextInput, Toast } from "flowbite-react";
import { HiDocumentRemove, HiOutlineCheck, HiX } from "react-icons/hi";

import { approveADocument, getPendingDocuments } from "../../../api/main/documentAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

let selectedPage = 0;

const PendingDocuments = () => {
    const tableHead = ["", "Tên", "Giới thiệu", ""];

    const renderHead = (item, index) => (
        <th key={index} className="cursor-pointer">
            {item}
        </th>
    );

    const renderBody = (item, index) => (
        <tr key={index} className="cursor-pointer">
            <td className="text-center font-bold" onClick={() => handleDetail(item.slug)}>
                {selectedPage * 10 + index + 1}
            </td>
            <td className="max-w-xs" onClick={() => handleDetail(item.slug)}>
                {item.docName}
            </td>
            <td className="max-w-xl" onClick={() => handleDetail(item.slug)}>
                <p className="truncate whitespace-normal leading-6 line-clamp-3">{item.docIntroduction}</p>
            </td>
            <td className="text-center">
                <div className="flex space-x-0">
                    <ActionButton onClick={() => handleDetail(item.slug)} icon="bx bxs-calendar" color="green" content="Xem chi tiết tài liệu" />
                    <ActionButton onClick={() => handleApprove(item.docId)} icon="bx bxs-calendar-edit" color="yellow" content="Phê duyệt tài liệu" />
                </div>
            </td>
        </tr>
    );

    const navigate = useNavigate();

    usePrivateAxios();

    const handleDetail = (slug) => {
        navigate(`/admin/documents/${slug}`);
    };

    const handleApprove = (docId) => {
        setOpenAppoveModal(true);
        setDocId(docId);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [documentList, setDocumentList] = useState([]);

    const [openAppoveModal, setOpenAppoveModal] = useState(false);
    const [openRejectModal, setOpenRejectModal] = useState(false);
    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [docId, setDocId] = useState("");
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        getDocumentList(currentPage);
    }, [currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        selectedPage = page - 1;
    };

    const getDocumentList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getPendingDocuments({
                params: {
                    page: page - 1,
                    size: 10,
                    order: "docId",
                },
            });
            setIsFetching(false);
            if (response.status === 200) {
                setDocumentList(response.data.content);
                setTotalPages(response.data.totalPages);
            } else {
                // navigate("/admin/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const approveDocument = async (docId, approvedStatus) => {
        setIsLoading(true);
        try {
            const response = await approveADocument(docId, {
                params: {
                    isApproved: approvedStatus,
                    note: reason,
                },
            });

            setIsLoading(false);
            if (approvedStatus) setOpenAppoveModal(false);
            else {
                setOpenRejectModal(false);
                setReason("");
            }

            if (response.status === 200) {
                setStatus(1);

                if (approvedStatus) setMessage("Đã chấp nhận tài liệu!");
                else setMessage("Đã từ chối tài liệu!");

                setTimeout(() => {
                    setStatus(0);
                }, 4000);

                getDocumentList(1);
                setCurrentPage(1);
                selectedPage = 0;
            } else {
                setStatus(-1);
                setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2 className="page-header">tài liệu đang chờ</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table totalPages="10" headData={tableHead} renderHead={(item, index) => renderHead(item, index)} bodyData={documentList} renderBody={(item, index) => renderBody(item, index)} />

                            {isFetching && <Spinner aria-label="Default status example" className="flex items-center w-full mb-2 mt-2" style={{ color: "var(--main-color)" }} />}

                            <div className="flex overflow-x-auto sm:justify-center">
                                <Pagination previousLabel="" nextLabel="" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={openAppoveModal} size="md" onClose={() => setOpenAppoveModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiDocumentRemove className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Thao tác phê duyệt</h3>
                        <div className="flex justify-center gap-4">
                            <Button color="success" isProcessing={isLoading} onClick={() => approveDocument(docId, true)}>
                                Chấp nhận
                            </Button>
                            <Button
                                color="warning"
                                disabled={isLoading}
                                onClick={() => {
                                    setOpenRejectModal(true);
                                    setOpenAppoveModal(false);
                                }}>
                                Từ chối
                            </Button>
                            <Button color="gray" disabled={isLoading} onClick={() => setOpenAppoveModal(false)}>
                                Huỷ bỏ
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={openRejectModal} size="md" onClose={() => setOpenRejectModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiDocumentRemove className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Bạn có chắc chắn muốn từ chối tài liệu này không?</h3>
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="reason" value="Lý do" />
                            </div>
                            <TextInput id="reason" placeholder="Nhập lý do..." value={reason} onChange={(event) => setReason(event.target.value)} required />
                        </div>
                        <div className="flex justify-center gap-4">
                            <Button color="warning" isProcessing={isLoading} onClick={() => approveDocument(docId, false)}>
                                Từ chối
                            </Button>
                            <Button color="gray" disabled={isLoading} onClick={() => setOpenRejectModal(false)}>
                                Huỷ bỏ
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {status === -1 && (
                <Toast className="top-1/4 right-5 w-100 fixed">
                    <HiX className="h-5 w-5 bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200" />
                    <div className="pl-4 text-sm font-normal">{message}</div>
                </Toast>
            )}

            {status === 1 && (
                <Toast className="top-1/4 right-5 fixed w-100">
                    <HiOutlineCheck className="h-5 w-5 bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200" />
                    <div className="pl-4 text-sm font-normal">{message}</div>
                </Toast>
            )}
        </div>
    );
};

export default PendingDocuments;
