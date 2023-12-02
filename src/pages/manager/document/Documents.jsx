import React, { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import Table from "../../../components/management/table/Table";

import ActionButton from "../../../components/management/action-button/ActionButton";

import { Button, Modal, Pagination, Spinner, TextInput, Toast, Badge } from "flowbite-react";
import { HiDocumentRemove, HiDocumentSearch, HiOutlineCheck, HiX, HiCheck } from "react-icons/hi";

import { deleteADocument, getAllDocuments, getLatestDocuments, searchDocuments } from "../../../api/main/documentAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

let selectedPage = 0;

const ManagerDocuments = () => {
    const tableHead = ["", "Tên", "Giới thiệu", "Trạng thái", "Lượt xem", ""];

    const renderHead = (item, index) => (
        <th key={index} className="text-center cursor-pointer">
            {item}
        </th>
    );

    const renderBody = (item, index) => (
        <tr key={index}>
            <td className="text-center font-bold" onClick={() => handleDetail(item.slug)}>
                {selectedPage * 20 + index + 1}
            </td>
            <td className="max-w-xs text-justify" onClick={() => handleDetail(item.slug)}>
                {item.docName}
            </td>
            <td className="max-w-xl text-justify" onClick={() => handleDetail(item.slug)}>
                {item.docIntroduction}
            </td>
            <td className="max-w-xs text-center" onClick={() => handleDetail(item.slug)}>
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
            <td className="max-w-xs text-center" onClick={() => handleDetail(item.slug)}>
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

    const navigate = useNavigate();

    const isLatestRoute = useMatch("/admin/documents/latest");

    usePrivateAxios();

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

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [documentList, setDocumentList] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [status, setStatus] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [docId, setDocId] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (isSearching) getDocumentListWithSearch(currentPage);
        else {
            if (isLatestRoute) getLatestDocumentList(currentPage);
            else getDocumentList(currentPage);
        }
    }, [currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        selectedPage = page - 1;
    };

    const getDocumentList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getAllDocuments({
                params: {
                    page: page - 1,
                    size: 15,
                    order: "updatedAt",
                },
            });
            setIsFetching(false);
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

    const getLatestDocumentList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getLatestDocuments({
                params: {
                    page: page - 1,
                    size: 15,
                },
            });
            setIsFetching(false);
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

    const getDocumentListWithSearch = async (page) => {
        try {
            setIsFetching(true);
            const response = await searchDocuments({
                params: {
                    page: page - 1,
                    size: 15,
                    s: search,
                },
            });
            setIsFetching(false);
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

    const deleteDocument = async (docId) => {
        setIsLoading(true);
        try {
            const response = await deleteADocument(docId);
            setIsLoading(false);
            setOpenModal(false);
            if (response.status === 200) {
                setStatus(1);
                setTimeout(() => {
                    setStatus(0);
                }, 2000);
                getDocumentList(1);
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

    const handleSearch = () => {
        if (search === "") {
            if (isLatestRoute) getLatestDocumentList(currentPage);
            else getDocumentList(currentPage);
        } else {
            setIsSearching(true);
            getDocumentListWithSearch(1);
        }
    };

    return (
        <div>
            <h2 className="page-header">tài liệu</h2>
            <div className="flex h-fit">
                <div>
                    <Button color="gray" className="mb-7 mt-7 justify-self-end bg-white" style={{ boxShadow: "var(--box-shadow)", borderRadius: "var(--border-radius)" }} onClick={() => navigate("/admin/documents/new")}>
                        <i className="bx bxs-calendar-plus mr-3 text-xl hover:text-white" style={{ color: "var(--main-color)" }}></i>
                        Thêm tài liệu
                    </Button>
                </div>

                <div className="ml-auto w-auto max-h-full flex items-center">
                    <div className="relative">
                        <TextInput id="search" type="search" icon={HiDocumentSearch} placeholder="Nhập để tìm kiếm" required className="max-w-2xl w-96" style={{ boxShadow: "var(--box-shadow)", borderRadius: "var(--border-radius)", background: "white" }} onChange={(e) => setSearch(e.target.value)} />
                        <Button className="absolute right-0 top-0 bottom-0 px-2 hover:text-gray-200" style={{ boxShadow: "var(--box-shadow)", borderRadius: "var(--border-radius)", backgroundColor: "var(--main-color)" }} onClick={handleSearch}>
                            Tìm kiếm
                        </Button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table totalPages="10" headData={tableHead} renderHead={(item, index) => renderHead(item, index)} bodyData={documentList} renderBody={(item, index) => renderBody(item, index)} />

                            {isFetching && <Spinner aria-label="Default status example" className="flex items-center w-full mb-2 mt-2" style={{ color: "var(--main-color)" }} />}

                            <div className="flex overflow-x-auto sm:justify-center">
                                <Pagination previousLabel="Trước" nextLabel="Sau" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons style={{ color: "var(--main-color)" }} />
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

            {status === -1 && (
                <Toast className="top-1/4 right-5 w-100 fixed">
                    <HiX className="h-5 w-5 bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200" />
                    <div className="pl-4 text-sm font-normal">Đã xảy ra lỗi!</div>
                </Toast>
            )}

            {status === 1 && (
                <Toast className="top-1/4 right-5 fixed w-100">
                    <HiOutlineCheck className="h-5 w-5 bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200" />
                    <div className="pl-4 text-sm font-normal">Xoá tài liệu thành công!</div>
                </Toast>
            )}
        </div>
    );
};

export default ManagerDocuments;
