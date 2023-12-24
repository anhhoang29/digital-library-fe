import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { deleteADocument, getUploadedDocumentsByUser } from "../../../api/main/documentAPI";
import { getAUser } from "../../../api/main/userAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

import { Badge, Button, Modal, Pagination, Spinner, Toast } from "flowbite-react";
import { HiAtSymbol, HiCake, HiCheck, HiChevronLeft, HiCloudUpload, HiDocumentRemove, HiExclamation, HiOutlineCloudUpload, HiOutlineDotsHorizontal, HiPhone, HiUser, HiUserAdd, HiX } from "react-icons/hi";

import ActionButton from "../../../components/management/action-button/ActionButton";
import Table from "../../../components/management/table/Table";

import profileImage from "../../../assets/images/default_profile.jpg";

let selectedPage = 0;

const DetailUser = () => {
    const roleList = {
        ROLE_ADMIN: "ADMIN",
        ROLE_STUDENT: "SINH VIÊN",
        ROLE_LECTURER: "GIẢNG VIÊN",
        ROLE_MANAGER: "QUẢN LÝ",
    };

    const tableHead = ["", "Tên", "Trạng thái", "Lượt xem", ""];

    const renderHead = (item, index) => (
        <th key={index} className="text-center">
            {item}
        </th>
    );

    const renderBody = (item, index) => (
        <tr key={index} className="cursor-pointer">
            <td className="text-center font-bold" onClick={() => handleDetail(item.slug)}>
                {selectedPage * 10 + index + 1}
            </td>
            <td className="max-w-xs text-justify" onClick={() => handleDetail(item.slug)}>
                {item.docName}
            </td>
            <td className="max-w-xl text-center" onClick={() => handleDetail(item.slug)}>
                <div className="m-auto w-fit">
                    {item.verifiedStatus === -1 && (
                        <Badge color="failure" icon={HiX}>
                            Từ chối
                        </Badge>
                    )}
                    {item.verifiedStatus === 0 && (
                        <Badge color="warning" icon={HiOutlineDotsHorizontal}>
                            Đợi duyệt
                        </Badge>
                    )}
                    {item.verifiedStatus === 1 && <Badge icon={HiCheck}>Đã duyệt</Badge>}
                </div>
            </td>
            <td className="max-w-xl text-center" onClick={() => handleDetail(item.slug)}>
                {item.totalView}
            </td>
            <td className="text-center">
                <div className="flex space-x-0">
                    <ActionButton onClick={() => handleDetail(item.slug)} icon="bx bxs-calendar" color="green" content="Xem chi tiết tài liệu" />
                    <ActionButton onClick={() => handleEdit(item.slug)} icon="bx bxs-calendar-edit" color="yellow" content="Chỉnh sửa tài liệu" />
                    <ActionButton onClick={() => handleDelete(item.id)} icon="bx bxs-calendar-x" color="red" content="Xoá tài liệu" />
                </div>
            </td>
        </tr>
    );

    usePrivateAxios();

    const navigate = useNavigate();

    const { userId } = useParams();

    const [user, setUser] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [documentList, setDocumentList] = useState([]);
    const [docId, setDocId] = useState("");

    const [isFetching, setIsFetching] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);
    const [status, setStatus] = useState(0);
    const [message, setMessage] = useState("Đã xảy ra lỗi! Xin vui lòng thử lại!");

    useEffect(() => {
        getUserByUserId();
    }, []);

    useEffect(() => {
        getUploadedDocumentList(currentPage);
    }, [currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        selectedPage = page - 1;
    };

    const getUserByUserId = async () => {
        try {
            const response = await getAUser(userId);

            if (response.status === 200) {
                setUser(response.data);
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getUploadedDocumentList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getUploadedDocumentsByUser(userId, {
                params: {
                    page: page - 1,
                    size: 10,
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

    const deleteDocument = async (docId) => {
        setIsLoadingDelete(true);
        try {
            const response = await deleteADocument(docId);
            setIsLoadingDelete(false);
            setOpenModal(false);
            if (response.status === 200) {
                setStatus(1);
                setMessage("Xoá tài liệu thành công!");
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
                getUploadedDocumentList(1);
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

    const handleDetail = (slug) => {
        navigate(`/admin/documents/${slug}`);
    };

    const handleEdit = (slug) => {
        navigate(`/admin/documents/${slug}/edit`);
    };

    const handleDelete = (docId) => {
        setOpenModal(true);
        setDocId(docId);
    };

    return (
        <div>
            <div className="flex flex-wrap gap-2 mb-3">
                <Button onClick={() => navigate(-1)}>
                    <HiChevronLeft className="mr-2 h-5 w-5" />
                    Quay lại
                </Button>
                {/* <Button color="success" onClick={() => navigate(`/admin/users/${userId}/edit`)}>
                    Chỉnh sửa
                    <HiOutlinePencilAlt className="ml-2 h-5 w-5" />
                </Button> */}
            </div>
            <div className="row">
                <div className="col-12 flex">
                    <div className="card w-1/3 mr-5 h-min">
                        <div className="card__body">
                            <div className="flex flex-col items-center pb-5">
                                <img alt="ProfileBonnie image" src={user && user.image ? user.image : profileImage} className="mb-3 rounded-full shadow-lg w-24 h-24" />
                                <h5 className="mb-2 text-2xl font-medium dark:text-white text-center">
                                    {user && user.lastName} {user && user.firstName}
                                </h5>

                                <div className="flex gap-x-1">
                                    <Button color="success" pill>
                                        {user && user.role && roleList[user.role.roleName]}
                                    </Button>
                                    <Button color={user && !user.deleted ? "success" : "failure"} pill>
                                        {user && !user.deleted ? "Đang hoạt động" : "Đã xoá"}
                                    </Button>
                                </div>
                                <div className="mt-5">
                                    <div className="flex text-center font-bold">
                                        <span className="block text-base uppercase font-medium dark:text-white">{user && user.organization && user.organization.orgName}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiUser className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">
                                            {user && user.gender === 0 && "Nam"}
                                            {user && user.gender === 1 && "Nữ"}
                                            {user && user.gender === 2 && "Khác"}
                                        </span>
                                    </div>
                                    <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white"></div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiCake className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">{user && moment(user.dateOfBirth).format("DD/MM/yyyy")}</span>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiAtSymbol className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">{user && user.email}</span>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiPhone className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">{user && user.phone}</span>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiUserAdd className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium dark:text-white">Ngày tạo tài khoản</span>
                                    </div>
                                    <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">{user && moment(user.createdAt).format("DD/MM/yyyy HH:mm")}</div>
                                </div>

                                <div>
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiUserAdd className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium dark:text-white">Ngày cập nhật</span>
                                    </div>
                                    <div className="block text-base font-medium text-sky-500 dark:text-white">{user && moment(user.updatedAt).format("DD/MM/yyyy HH:mm")}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-2/3 overscroll-x-auto h-fit">
                        <div className="card__body">
                            <div className="mb-5">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiCloudUpload className="w-8 h-8 mr-3 text-gray-800 dark:text-white" />
                                    <span className="block text-2xl font-bold uppercase dark:text-white">Đã tải lên</span>
                                </div>
                            </div>

                            <Table totalPages="10" headData={tableHead} renderHead={(item, index) => renderHead(item, index)} bodyData={documentList} renderBody={(item, index) => renderBody(item, index)} />

                            {isFetching && <Spinner aria-label="Default status example" className="flex items-center w-full mb-2 mt-2" style={{ color: "var(--main-color)" }} />}

                            <div className="flex overflow-x-auto sm:justify-center">
                                <Pagination previousLabel="" nextLabel="" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
                            </div>
                        </div>
                    </div>

                    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup className="z-49">
                        <Modal.Header />
                        <Modal.Body>
                            <div className="text-center">
                                <HiDocumentRemove className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Bạn có chắc chắn muốn xoá tài liệu này không?</h3>
                                <div className="flex justify-center gap-4">
                                    <Button color="failure" isProcessing={isLoadingDelete} onClick={() => deleteDocument(docId)}>
                                        {"Chắc chắn"}
                                    </Button>
                                    <Button color="gray" disabled={isLoadingDelete} onClick={() => setOpenModal(false)}>
                                        Huỷ bỏ
                                    </Button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>

                    {status === -1 && (
                        <Toast className="top-1/4 right-5 w-100 fixed z-50">
                            <HiExclamation className="h-5 w-5 text-amber-400 dark:text-amber-300" />
                            <div className="pl-4 text-sm font-normal">{message}</div>
                        </Toast>
                    )}

                    {status === 1 && (
                        <Toast className="top-1/4 right-5 fixed w-100 z-50">
                            <HiOutlineCloudUpload className="h-5 w-5 text-green-600 dark:text-green-500" />
                            <div className="pl-4 text-sm font-normal">{message}</div>
                        </Toast>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailUser;
