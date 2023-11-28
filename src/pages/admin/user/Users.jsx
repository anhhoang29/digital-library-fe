import React, { useEffect, useState } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import Table from "../../../components/admin/table/Table";

import ActionButton from "../../../components/admin/action-button/ActionButton";

import { Button, Modal, Pagination, Toast } from "flowbite-react";
import { HiDocumentRemove, HiExclamation, HiOutlineCloudUpload } from "react-icons/hi";

import { deleteAUser, getAllUsers, getLatestUsers } from "../../../api/admin/userAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";
import profileImage from "../../../assets/images/default_profile.jpg";
import UserModal from "../../../components/admin/modal/user/UserModal";

let selectedPage = 0;

const Users = () => {
    const customerTableHead = ["", "Ảnh", "Họ", "Tên", "Email", "Vai trò", "Trạng thái", ""];

    const renderHead = (item, index) => <th key={index}>{item}</th>;

    const renderBody = (item, index) => (
        <tr key={index}>
            <td className="text-center font-bold">{selectedPage * 20 + index + 1}</td>
            <td className="max-w-xs text-center">
                <img src={item.image ? item.image : profileImage} alt="Profile" className="rounded-full h-12 w-12" />
            </td>
            <td className="max-w-xs text-center">{item.lastName}</td>
            <td className="max-w-xs text-center">{item.firstName}</td>
            <td className="max-w-xs">{item.email}</td>
            <td className="max-w-xs text-center">{item.role && item.role.roleName}</td>
            <td className="max-w-xs text-center">{item.deleted ? "Đã xoá" : "Đang hoạt động"}</td>
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

    const isLatestRoute = useMatch("/admin/users/latest");

    const handleAdd = () => {
        setOpenUserModal(true);
        setIsCreatingNew(true);
        setTriggerModal(triggerModal + 1);
    };

    const handleEdit = (userId) => {
        setOpenUserModal(true);
        setIsCreatingNew(false);
        setUserId(userId);
        setTriggerModal(triggerModal + 1);
    };

    const handleDelete = (userId) => {
        setOpenModal(true);
        setUserId(userId);
    };

    usePrivateAxios();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [userList, setUserList] = useState([]);
    const [userId, setUserId] = useState("");

    const [openUserModal, setOpenUserModal] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [isCreatingNew, setIsCreatingNew] = useState(true);
    const [triggerModal, setTriggerModal] = useState(0);
    const [status, setStatus] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(isLatestRoute) getLatestUserList(currentPage);
        else getUserList(currentPage);
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
                    size: 15,
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

    const getLatestUserList = async (page) => {
        try {
            const response = await getLatestUsers({
                params: {
                    page: page - 1,
                    size: 15,
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

    const deleteUser = async (userId) => {
        setIsLoading(true);
        try {
            const response = await deleteAUser(userId);
            setIsLoading(false);
            setOpenModal(false);
            if (response.status === 200) {
                setStatus(1);
                setTimeout(() => {
                    setStatus(0);
                }, 2000);
            } else {
                setStatus(-1);
                setTimeout(() => {
                    setStatus(0);
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2 className="page-header">{isLatestRoute ? "Người dùng mới" : "Người dùng"}</h2>
            <Button color="gray" className="mb-7 mt-7 justify-self-end bg-white" style={{ boxShadow: "var(--box-shadow)", borderRadius: "var(--border-radius)" }} onClick={handleAdd}>
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
                            <Button color="failure" isProcessing={isLoading} onClick={() => deleteUser(userId)}>
                                Chắc chắn
                            </Button>
                            <Button color="gray" disabled={isLoading} onClick={() => setOpenModal(false)}>
                                Huỷ bỏ
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <UserModal openUserModal={openUserModal} userId={userId} isCreatingNew={isCreatingNew} triggerModal={triggerModal} 
            refreshUserList={() => isLatestRoute ? getLatestUserList(1) : getUserList(1)}/>

            {status === -1 && (
                <Toast className="top-1/4 right-5 w-100 fixed">
                    <HiExclamation className="h-5 w-5 text-amber-400 dark:text-amber-300" />
                    <div className="pl-4 text-sm font-normal">Đã xảy ra lỗi!</div>
                </Toast>
            )}

            {status === 1 && (
                <Toast className="top-1/4 right-5 fixed w-100">
                    <HiOutlineCloudUpload className="h-5 w-5 text-green-600 dark:text-green-500" />
                    <div className="pl-4 text-sm font-normal">Xoá người dùng thành công!</div>
                </Toast>
            )}
        </div>
    );
};

export default Users;
