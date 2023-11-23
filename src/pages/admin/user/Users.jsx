import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../../components/admin/table/Table";

import ActionButton from "../../../components/admin/action-button/ActionButton";

import { Button, Pagination, Modal } from "flowbite-react";
import { HiDocumentRemove } from "react-icons/hi";

import { getAllUsers } from "../../../api/admin/userAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

let selectedPage = 0;

const Users = () => {
    const customerTableHead = ["", "Ảnh", "Họ", "Tên", "Email", "Vai trò", "Trạng thái", ""];

    const renderHead = (item, index) => <th key={index}>{item}</th>;

    const renderBody = (item, index) => (
        <tr key={index}>
            <td className="text-center font-bold">{selectedPage * 20 + index + 1}</td>
            <td className="max-w-xs text-center">Ảnh</td>
            <td className="max-w-xs text-center">{item.lastName}</td>
            <td className="max-w-xs text-center">{item.firstName}</td>
            <td className="max-w-xs">{item.email}</td>
            <td className="max-w-xs text-center">{item.role && item.role.roleName}</td>
            <td className="max-w-xs text-center">{item.deleted ? "Đang hoạt động" : "Đã xoá"}</td>
            <td className="text-center">
                <div className="flex space-x-0">
                    <ActionButton onClick={() => handleDetail(item.userId)} icon="bx bxs-user-detail" color="green" content="Xem chi tiết người dùng" />
                    <ActionButton onClick={() => handleEdit(item.userId)} icon="bx bxs-user-check" color="yellow" content="Chỉnh sửa người dùng" />
                    <ActionButton onClick={() => handleDelete(item.userId)} icon="bx bxs-user-x" color="red" content="Xoá người dùng" />
                </div>
            </td>
        </tr>
    );

    const navigate = useNavigate();

    const handleDetail = (userId) => {
        navigate(`/admin/users/${userId}`);
    };

    const handleEdit = (userId) => {
        navigate(`/admin/userId/${userId}/edit`);
    };

    const handleDelete = (userId) => {
        setOpenModal(true);
    };

    usePrivateAxios();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [userList, setUserList] = useState([]);

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getUserList(currentPage);
    }, [currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        selectedPage = page - 1;
        // data
    };

    const getUserList = async (page) => {
        try {
            const response = await getAllUsers({
                params: {
                    page: page - 1,
                    size: 20,
                },
            });
            if (response.status === 200) {
                setUserList(response.data.content);
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
            <h2 className="page-header">Người dùng</h2>
            <Button color="gray" className="mb-7 mt-7 justify-self-end bg-white" style={{ boxShadow: "var(--box-shadow)", borderRadius: "var(--border-radius)" }} onClick={() => navigate("/admin/documents/new")}>
                <i className="bx bxs-calendar-plus mr-3 text-xl hover:text-white" style={{ color: "var(--main-color)" }}></i>
                Thêm người dùng
            </Button>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table totalPages="10" headData={customerTableHead} renderHead={(item, index) => renderHead(item, index)} bodyData={userList} renderBody={(item, index) => renderBody(item, index)} />

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
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Bạn có chắc chắn muốn xoá người dùng này không?</h3>
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

export default Users;
