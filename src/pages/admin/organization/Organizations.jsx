import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import OrganizationModal from "../../../components/management/admin/modal/organization/OrganizationModal";
import Table from "../../../components/management/table/Table";
import ActionButton from "../../../components/management/action-button/ActionButton";

import { Badge, Button, Modal, Toast, Pagination, Spinner } from "flowbite-react";
import { HiDocumentRemove } from "react-icons/hi";

import { deleteAOrganization, getAllOrganizations } from "../../../api/main/organizationAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

import { HiCheck, HiOutlineCheck, HiX } from "react-icons/hi";

let selectedPage = 0;

const Organizations = () => {
    const tableHead = ["", "Tên", "Trạng thái", "Số tài liệu", ""];

    const renderHead = (item, index) => (
        <th className="text-center" key={index}>
            {item}
        </th>
    );

    const renderBody = (item, index) => (
        <tr key={index}>
            <td className="w-1/12 text-center font-bold">{selectedPage * 20 + index + 1}</td>
            <td className="w-5/12 text-center">{item.orgName}</td>
            <td className="w-3/12 text-center">
                <div className="m-auto w-fit">
                    {item.deleted ? (
                        <Badge color="warning" icon={HiX}>
                            Đã vô hiệu
                        </Badge>
                    ) : (
                        <Badge icon={HiCheck}>Đang hoạt động</Badge>
                    )}
                </div>
            </td>
            <td className="w-2/12 text-center">123</td>
            <td className="w-1/12 text-center">
                <div className="flex space-x-0">
                    <ActionButton onClick={() => handleEdit(item.orgId)} icon="bx bx-edit" color="yellow" content="Chỉnh sửa trường học" />
                    <ActionButton onClick={() => handleDelete(item.orgId)} icon="bx bx-trash" color="red" content="Xoá trường học" />
                </div>
            </td>
        </tr>
    );

    const navigate = useNavigate();
    
    usePrivateAxios();

    const handleAdd = () => {
        setOpenOrganizationModal(true);
        setIsCreatingNew(true);
        setTriggerModal(triggerModal + 1);
    };

    const handleEdit = (organizationId) => {
        setOpenOrganizationModal(true);
        setIsCreatingNew(false);
        setOrganizationId(organizationId);
        setTriggerModal(triggerModal + 1);
    };

    const handleDelete = (organizationId) => {
        setOpenDeleteModal(true);
        setOrganizationId(organizationId);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [organizationList, setOrganizationList] = useState([]);
    const [organizationId, setOrganizationId] = useState("");

    const [openOrganizationModal, setOpenOrganizationModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [isCreatingNew, setIsCreatingNew] = useState(true);
    const [triggerModal, setTriggerModal] = useState(0);
    const [status, setStatus] = useState(0);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        getOrganizationList(currentPage);
    }, [currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        selectedPage = page - 1;
    };

    const getOrganizationList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getAllOrganizations({
                params: {
                    page: page - 1,
                    size: 10,
                },
            });
            setIsFetching(false);
            if (response.status === 200) {
                setOrganizationList(response.data.content);
                setTotalPages(response.data.totalPages);
            } else {
                navigate("/admin/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteOrganization = async (organizationId) => {
        setIsLoading(true);
        try {
            const response = await deleteAOrganization(organizationId);
            setIsLoading(false);
            setOpenDeleteModal(false);
            if (response.status === 200) {
                setStatus(1);
                if (response.message === "Delete organization from system successfully") setMessage("Xoá trường học thành công!");
                else setMessage("Không thể xoá trường học do đã tồn tại tài liệu và người dùng, đã huỷ kích hoạt!");

                setTimeout(() => {
                    setStatus(0);
                }, 4000);
                getOrganizationList(1);
                setCurrentPage(1);
                selectedPage = 0;
            } else {
                setStatus(-1);
                setMessage("Đã xảy ra lỗi!");
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            }
        } catch (error) {
            setStatus(-1);
            setMessage("Đã xảy ra lỗi!");
            setTimeout(() => {
                setStatus(0);
            }, 4000);
        }
    };

    return (
        <div className="w-4/5 m-auto">
            <h2 className="page-header">Danh mục</h2>
            <Button color="gray" className="mb-7 mt-7 justify-self-end bg-white" style={{ boxShadow: "var(--box-shadow)", borderRadius: "var(--border-radius)" }} onClick={handleAdd}>
                <i className="bx bxs-calendar-plus mr-3 text-xl hover:text-white" style={{ color: "var(--main-color)" }}></i>
                Thêm trường học
            </Button>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table totalPages="10" headData={tableHead} renderHead={(item, index) => renderHead(item, index)} bodyData={organizationList} renderBody={(item, index) => renderBody(item, index)} />

                            {isFetching && <Spinner aria-label="Default status example" className="flex items-center w-full mb-2 mt-2" style={{ color: "var(--main-color)" }} />}

                            <div className="flex overflow-x-auto sm:justify-center">
                                <Pagination previousLabel="Trước" nextLabel="Sau" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={openDeleteModal} size="md" onClose={() => setOpenDeleteModal(false)} popup className="z-40">
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiDocumentRemove className="mx-auto mb-4 h-14 w-14 text-red-600 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Bạn có chắc chắn muốn xoá trường học này không?</h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" isProcessing={isLoading} onClick={() => deleteOrganization(organizationId)}>
                                Chắc chắn
                            </Button>
                            <Button color="gray" disabled={isLoading} onClick={() => setOpenDeleteModal(false)}>
                                Huỷ bỏ
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <OrganizationModal openOrganizationModal={openOrganizationModal} organizationId={organizationId} isCreatingNew={isCreatingNew} triggerModal={triggerModal} refreshOrganizationList={() => getOrganizationList(1)} />

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
        </div>
    );
};

export default Organizations;
