import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../../components/admin/table/Table";

import ActionButton from "../../../components/admin/action-button/ActionButton";

import { Button, Pagination, Modal } from "flowbite-react";
import { HiDocumentRemove } from "react-icons/hi";

import { getAllDocuments } from "../../../api/admin/documentAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

let selectedPage = 0;

const Documents = () => {
    const customerTableHead = ["", "Tên", "Trạng thái", "Lượt xem", "Link", ""];

    const renderHead = (item, index) => <th key={index}>{item}</th>;

    const renderBody = (item, index) => (
        <tr key={index}>
            <td className="text-center font-bold">{selectedPage * 20 + index + 1}</td>
            <td className="max-w-xs">{item.docName}</td>
            <td className="max-w-xs text-center">{item.deleted ? "Đã xoá" : "Chưa xoá"}</td>
            <td className="max-w-xs text-center">{item.totalView}</td>
            <td className="max-w-xs">{item.viewUrl}</td>
            <td className="text-center">
                <div className="flex space-x-0">
                    <ActionButton onClick={() => (handleDetail(item.slug))} icon="bx bxs-calendar" color="green" content="Xem chi tiết tài liệu" />
                    <ActionButton onClick={() => (handleEdit(item.slug))} icon="bx bxs-calendar-edit" color="yellow" content="Chỉnh sửa tài liệu" />
                    <ActionButton onClick={() => (handleDelete(item.id))} icon="bx bxs-calendar-x" color="red" content="Xoá tài liệu" />
                </div>
            </td>
        </tr>
    );

    const navigate = useNavigate();

    const handleDetail = (slug) => {
        navigate(`/admin/documents/${slug}`);
    };

    const handleEdit = (slug) => {
        navigate(`/admin/documents/${slug}/edit`);
    };

    const handleDelete = (id) => {
        setOpenModal(true);
    };

    usePrivateAxios();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [documentList, setDocumentList] = useState([]);

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getDocumentList(currentPage);
    }, [currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        selectedPage = page - 1;
        // data
    };

    const getDocumentList = async (page) => {
        try {
            const response = await getAllDocuments({
                params: {
                    page: page - 1,
                    size: 20,
                    order: "docId",
                },
            });
            if (response.status === 200) {
                setDocumentList(response.data.content);
                setTotalPages(response.data.totalPages);
            } else {
                navigate("/admin/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2 className="page-header">tài liệu</h2>
            <Button color="gray" className="mb-7 mt-7 justify-self-end bg-white" style={{ boxShadow: "var(--box-shadow)", borderRadius: "var(--border-radius)" }} onClick={() => navigate("/admin/documents/new")}>
                <i className="bx bxs-calendar-plus mr-3 text-xl hover:text-white" style={{ color: "var(--main-color)" }}></i>
                Thêm tài liệu
            </Button>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table totalPages="10" headData={customerTableHead} renderHead={(item, index) => renderHead(item, index)} bodyData={documentList} renderBody={(item, index) => renderBody(item, index)} />

                            <div className="flex overflow-x-auto sm:justify-center">
                                <Pagination previousLabel="Trước" nextLabel="Sau" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiDocumentRemove className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Bạn có chắc chắn muốn xoá tài liệu này không?</h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => setOpenModal(false)}>
                                {"Chắc chắn"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                Huỷ bỏ
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Documents;
