import React, { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";

import ActionButton from "../../../components/management/action-button/ActionButton";
import Table from "../../../components/management/table/Table";

import { Badge, Button, Modal, Pagination, Spinner, Toast } from "flowbite-react";
import { HiCheck, HiDocumentRemove, HiOutlineBadgeCheck, HiOutlineCheck, HiX } from "react-icons/hi";

import { getAllOrganizations } from "../../../api/main/organizationAPI";
import { deleteAUser, getAllUsers, getLatestUsers } from "../../../api/main/userAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";
import profileImage from "../../../assets/images/default_profile.jpg";
import UserModal from "../../../components/management/admin/modal/user/UserModal";
import SelectFilter from "../../../components/management/select/SelectFilter";

let selectedPage = 0;

const Users = () => {
    const tableHead = ["", "Ảnh", "Họ", "Tên", "Email", "Vai trò", ""];

    const roleList = {
        ROLE_ADMIN: "ADMIN",
        ROLE_STUDENT: "SINH VIÊN",
        ROLE_LECTURER: "GIẢNG VIÊN",
        ROLE_MANAGER: "QUẢN LÝ",
    };

    const deletedStatus = [
        { name: "Đang hoạt động", value: "false" },
        { name: "Đã vô hiệu", value: "true" },
    ];

    const genderData = [
        { name: "Nam", value: "0" },
        { name: "Nữ", value: "1" },
        { name: "Khác", value: "2" },
    ];

    const roleData = [
        {
            name: "Admin",
            value: "ROLE_ADMIN",
            color: "cyan",
        },
        {
            name: "Sinh viên",
            value: "ROLE_STUDENT",
            color: "green",
        },
        {
            name: "Giảng viên",
            value: "ROLE_LECTURER",
            color: "indigo",
        },
        {
            name: "Quản lý",
            value: "ROLE_MANAGER",
            color: "pink",
        },
    ];

    const renderHead = (item, index) => (
        <th key={index} className="text-center">
            {item}
        </th>
    );

    const renderBody = (item, index) => (
        <tr key={index} className="cursor-pointer">
            <td className="text-center font-bold" onClick={() => handleDetail(item.userId)}>
                {selectedPage * 15 + index + 1}
            </td>
            <td className="max-w-xs flex justify-center items-center" onClick={() => handleDetail(item.userId)}>
                <img src={item.image ? item.image : profileImage} alt="Profile" className="rounded-full h-12 w-12 text-center" />
            </td>
            <td className="max-w-xs text-center" onClick={() => handleDetail(item.userId)}>
                {item.lastName}
            </td>
            <td className="max-w-xs text-center" onClick={() => handleDetail(item.userId)}>
                {item.firstName}
            </td>
            <td className="max-w-xs text-center" onClick={() => handleDetail(item.userId)}>
                {item.email}
            </td>
            <td className="max-w-xs text-center" onClick={() => handleDetail(item.userId)}>
                <div className="m-auto w-fit">
                    {item.role && (
                        <Badge icon={HiOutlineBadgeCheck} className="w-fit h-full" color={roleData.find((role) => role.value === item.role.roleName)?.color || ""}>
                            {roleList[item.role.roleName]}
                        </Badge>
                    )}
                </div>
            </td>
            {/* <td className="max-w-xs text-center" onClick={() => handleDetail(item.userId)}>
                <div className="m-auto w-fit">
                    {item.deleted ? (
                        <Badge color="warning" icon={HiX}>
                            Đã vô hiệu
                        </Badge>
                    ) : (
                        <Badge icon={HiCheck} color="success">
                            Đang hoạt động
                        </Badge>
                    )}
                </div>
            </td> */}
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
    const [isFetching, setIsFetching] = useState(false);

    const [search, setSearch] = useState("");
    const [deleted, setDeleted] = useState("all");
    const [gender, setGender] = useState("all");
    const [organization, setOrganization] = useState("all");
    const [role, setRole] = useState("all");
    const [organizationList, setOrganizationList] = useState([]);

    useEffect(() => {
        getOrganizationList();
    }, []);

    useEffect(() => {
        if (isLatestRoute) getLatestUserList(currentPage);
        else getUserList(currentPage);
    }, [currentPage]);

    useEffect(() => {
        if (isLatestRoute) getLatestUserList(currentPage);
        else getUserList(currentPage);
    }, [gender, deleted, role, search, organization]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        selectedPage = page - 1;
    };

    const getOrganizationList = async () => {
        try {
            setIsFetching(true);
            const response = await getAllOrganizations({
                params: {
                    page: 0,
                    size: 1000,
                    s: "",
                    deleted: "all",
                },
            });

            setIsFetching(false);
            if (response.status === 200) {
                setOrganizationList(response.data.content);
            } else {
                //navigate("/admin/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getUserList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getAllUsers({
                params: {
                    page: page - 1,
                    size: 15,
                    deleted: deleted,
                    gender: gender,
                    organization: organization,
                    role: role,
                    s: search,
                },
            });
            setIsFetching(false);
            if (response.status === 200) {
                setUserList(response.data.content);
                setTotalPages(response.data.totalPages);
            } else {
                // navigate("/admin/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getLatestUserList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getLatestUsers({
                params: {
                    page: page - 1,
                    size: 15,
                    deleted: deleted,
                    gender: gender,
                    organization: organization,
                    role: role,
                    s: search,
                },
            });
            setIsFetching(false);
            if (response.status === 200) {
                setUserList(response.data.content);
                setTotalPages(response.data.totalPages);
            } else {
                // navigate("/admin/login");
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
                setCurrentPage(1);
                selectedPage = 0;
                if (isLatestRoute) getLatestUserList(currentPage);
                else getUserList(currentPage);

                setStatus(1);
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            } else {
                setStatus(-1);
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const refreshUserList = () => {
        selectedPage = 0;
        setCurrentPage(1);
        isLatestRoute ? getLatestUserList(currentPage) : getUserList(currentPage);
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
                            <div className="flex items-end justify-between gap-5">
                                {/* <SelectFilter
                                    selectName="Trạng thái"
                                    options={deletedStatus}
                                    selectedValue={deleted}
                                    onChangeHandler={(e) => {
                                        setCurrentPage(1);
                                        setDeleted(e.target.value);
                                    }}
                                    name="name"
                                    field="value"
                                    required
                                /> */}

                                <SelectFilter
                                    selectName="Giới tính"
                                    options={genderData}
                                    selectedValue={gender}
                                    onChangeHandler={(e) => {
                                        setCurrentPage(1);
                                        setGender(e.target.value);
                                    }}
                                    name="name"
                                    field="value"
                                    required
                                />

                                <SelectFilter
                                    selectName="Vai trò"
                                    options={roleData}
                                    selectedValue={role}
                                    onChangeHandler={(e) => {
                                        setCurrentPage(1);
                                        setRole(e.target.value);
                                    }}
                                    name="name"
                                    field="value"
                                    required
                                />

                                <SelectFilter
                                    selectName="Trường"
                                    options={organizationList}
                                    selectedValue={organization}
                                    onChangeHandler={(e) => {
                                        setCurrentPage(1);
                                        setOrganization(e.target.value);
                                    }}
                                    name="orgName"
                                    field="slug"
                                    required
                                    className="max-w-1/4"
                                />

                                <div className="relative rounded-lg mb-2 w-1/4 ml-auto ">
                                    <input
                                        type="text"
                                        id="list-search"
                                        className="text-sm text-black block w-full p-3 ps-5 border border-gray-300 bg-white focus:ring-0 focus:border-green-400 rounded-lg"
                                        placeholder="Tìm kiếm"
                                        onChange={(e) => {
                                            setCurrentPage(1);
                                            setSearch(e.target.value);
                                        }}
                                        value={search}
                                        required
                                    />

                                    <div className="absolute inset-y-0 end-0 flex items-center pe-5 cursor-pointer rounded-lg">
                                        <svg className="w-4 h-4 text-green-400 hover:text-green-200 focus:text-green-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4"></div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__body">
                            {userList.length === 0 && <p className="mt-2 mb-4 font-medium">Không có kết quả!</p>}
                            <Table totalPages="10" headData={tableHead} renderHead={(item, index) => renderHead(item, index)} bodyData={userList} renderBody={(item, index) => renderBody(item, index)} />

                            {isFetching && <Spinner aria-label="Default status example" className="flex items-center w-full mb-2 mt-2" style={{ color: "var(--main-color)" }} />}

                            <div className="flex overflow-x-auto sm:justify-center">
                                <Pagination previousLabel="" nextLabel="" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiDocumentRemove className="mx-auto mb-4 h-14 w-14 text-red-600 dark:text-gray-200" />
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

            <UserModal openUserModal={openUserModal} userId={userId} isCreatingNew={isCreatingNew} triggerModal={triggerModal} refreshUserList={refreshUserList} />

            {status === -1 && (
                <Toast className="top-1/4 right-5 w-100 fixed">
                    <HiX className="h-5 w-5 bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200" />
                    <div className="pl-4 text-sm font-normal">Đã xảy ra lỗi! Xin vui lòng thử lại!</div>
                </Toast>
            )}

            {status === 1 && (
                <Toast className="top-1/4 right-5 fixed w-100">
                    <HiOutlineCheck className="h-5 w-5 bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200" />
                    <div className="pl-4 text-sm font-normal">Xoá người dùng thành công!</div>
                </Toast>
            )}
        </div>
    );
};

export default Users;
