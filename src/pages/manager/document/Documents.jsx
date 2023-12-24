import React, { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";

import SelectFilter from "../../../components/management/select/SelectFilter";
import Table from "../../../components/management/table/Table";

import ActionButton from "../../../components/management/action-button/ActionButton";

import { Badge, Button, Modal, Pagination, Spinner, Toast } from "flowbite-react";
import { HiCheck, HiDocumentRemove, HiOutlineCheck, HiOutlineDotsHorizontal, HiX } from "react-icons/hi";

import { deleteADocument, getDocumentsByOrganizations, getLatestDocumentsByOrganization } from "../../../api/main/documentAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

import { getAllCategories } from "../../../api/main/categoryAPI";
import { getAllFields } from "../../../api/main/fieldAPI";

import scopeList from "../../../assets/JsonData/scopes.json";
import verifiedStatusList from "../../../assets/JsonData/verified_status_list.json";

let selectedPage = 0;

const ManagerDocuments = () => {
    const tableHead = ["", "Tên", "Giới thiệu", "Trạng thái", "Lượt xem", ""];

    const renderHead = (item, index) => (
        <th key={index} className="text-center">
            {item}
        </th>
    );

    const renderBody = (item, index) => (
        <tr key={index} className="cursor-pointer">
            <td className="text-center font-bold" onClick={() => handleDetail(item.slug)}>
                {selectedPage * 15 + index + 1}
            </td>
            <td className="max-w-xs text-justify" onClick={() => handleDetail(item.slug)}>
                {item.docName}
            </td>
            <td className="max-w-xl text-justify" onClick={() => handleDetail(item.slug)}>
                <p className="truncate whitespace-normal leading-6 line-clamp-3">{item.docIntroduction}</p>
            </td>
            <td className="max-w-xs text-center" onClick={() => handleDetail(item.slug)}>
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
            <td className="max-w-xs text-center" onClick={() => handleDetail(item.slug)}>
                {item.totalView}
            </td>
            <td className="text-center">
                <div className="flex space-x-0">
                    <ActionButton onClick={() => handleDetail(item.slug)} icon="bx bxs-calendar" color="green" content="Xem chi tiết tài liệu" />
                    <ActionButton onClick={() => handleEdit(item.slug)} icon="bx bxs-calendar-edit" color="yellow" content="Chỉnh sửa tài liệu" />
                    <ActionButton onClick={() => handleDelete(item.docId)} icon="bx bxs-calendar-x" color="red" content="Xoá tài liệu" />
                </div>
            </td>
        </tr>
    );

    const navigate = useNavigate();

    const isLatestRoute = useMatch("/manager/documents/latest");

    // const user = useSelector((state) => state.LoginReducer.user);

    const user = JSON.parse(sessionStorage.getItem("profile"));

    usePrivateAxios();

    const handleDetail = (slug) => {
        navigate(`/manager/documents/${slug}`);
    };

    const handleEdit = (slug) => {
        navigate(`/manager/documents/${slug}/edit`);
    };

    const handleDelete = (docId) => {
        setOpenModal(true);
        setDocId(docId);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [category, setCategory] = useState("all");
    const [field, setField] = useState("all");
    const [deleted, setDeleted] = useState("all");
    const [internal, setInternal] = useState("all");
    const [verifiedStatus, setVerifiedStatus] = useState("all");

    const [documentList, setDocumentList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [fieldList, setFieldList] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [status, setStatus] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [docId, setDocId] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        getCategoryList();
        getFieldList();
        getDocumentList(currentPage);
    }, []);

    useEffect(() => {
        if (isLatestRoute) getLatestDocumentList(currentPage);
        else getDocumentList(currentPage);
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);

        if (isLatestRoute) getLatestDocumentList(currentPage);
        else getDocumentList(currentPage);
    }, [category, field, deleted, internal, verifiedStatus, search]);

    useEffect(() => {
        selectedPage = currentPage - 1;
    }, [currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        selectedPage = page - 1;
    };

    const getCategoryList = async () => {
        try {
            setIsFetching(true);
            const response = await getAllCategories({
                params: {
                    page: 0,
                    size: 1000,
                    s: "",
                    deleted: "all",
                },
            });
            setIsFetching(false);
            if (response.status === 200) {
                setCategoryList(response.data.content);
            } else {
                // navigate("/admin/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getFieldList = async () => {
        try {
            setIsFetching(true);
            const response = await getAllFields({
                params: {
                    page: 0,
                    size: 1000,
                    s: "",
                    deleted: "all",
                },
            });
            setIsFetching(false);
            if (response.status === 200) {
                setFieldList(response.data.content);
            } else {
                // navigate("/admin/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getDocumentList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getDocumentsByOrganizations(user.organization.slug, {
                params: {
                    page: page - 1,
                    size: 15,
                    order: "updatedAt",
                    category: category,
                    field: field,
                    deleted: deleted,
                    internal: internal,
                    status: verifiedStatus,
                    s: search,
                },
            });
            setIsFetching(false);
            if (response.status === 200) {
                setDocumentList(response.data.content);
                setTotalPages(response.data.totalPages);
            } else {
                // navigate("/manager/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getLatestDocumentList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getLatestDocumentsByOrganization(user.organization.slug, {
                params: {
                    page: page - 1,
                    size: 15,
                    category: category,
                    field: field,
                    deleted: deleted,
                    internal: internal,
                    status: verifiedStatus,
                    s: search,
                },
            });
            setIsFetching(false);
            if (response.status === 200) {
                setDocumentList(response.data.content);
                setTotalPages(response.data.totalPages);
            } else {
                // navigate("/manager/login");
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
                setCurrentPage(1);
                if (isLatestRoute) getLatestDocumentList(currentPage);
                else getDocumentList(currentPage);
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
            <h2 className="page-header">{isLatestRoute ? "tài liệu mới" : "tài liệu"}</h2>
            <div className="flex h-fit">
                <div>
                    <Button color="gray" className="mb-7 justify-self-end bg-white" style={{ boxShadow: "var(--box-shadow)", borderRadius: "var(--border-radius)" }} onClick={() => navigate("/manager/documents/new")}>
                        <i className="bx bxs-calendar-plus mr-3 text-xl hover:text-white" style={{ color: "var(--main-color)" }}></i>
                        Thêm tài liệu
                    </Button>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <div className="flex flex-wrap justify-between">
                                <SelectFilter
                                    selectName="Danh mục"
                                    options={categoryList}
                                    selectedValue={category}
                                    onChangeHandler={(e) => {
                                        setCategory(e.target.value);
                                    }}
                                    name="categoryName"
                                    field="slug"
                                    required
                                />

                                <SelectFilter
                                    selectName="Lĩnh vực"
                                    options={fieldList}
                                    selectedValue={field}
                                    onChangeHandler={(e) => {
                                        setField(e.target.value);
                                    }}
                                    name="fieldName"
                                    field="slug"
                                    required
                                />

                                <SelectFilter
                                    selectName="Trạng thái"
                                    options={verifiedStatusList}
                                    selectedValue={verifiedStatus}
                                    onChangeHandler={(e) => {
                                        setVerifiedStatus(e.target.value);
                                    }}
                                    name="name"
                                    field="number"
                                    required
                                />

                                <SelectFilter
                                    selectName="Phạm vi"
                                    options={scopeList}
                                    selectedValue={internal}
                                    onChangeHandler={(e) => {
                                        setInternal(e.target.value);
                                    }}
                                    name="name"
                                    field="value"
                                    required
                                />
                            </div>

                            <div className="relative rounded-lg ml-auto w-1/3 mt-4">
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
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            {documentList.length === 0 && <p className="mt-2 mb-4 font-medium">Không có kết quả!</p>}

                            <Table totalPages="10" headData={tableHead} renderHead={(item, index) => renderHead(item, index)} bodyData={documentList} renderBody={(item, index) => renderBody(item, index)} />

                            {isFetching && <Spinner aria-label="Default status example" className="flex items-center w-full mb-2 mt-2" style={{ color: "var(--main-color)" }} />}

                            <div className="flex overflow-x-auto sm:justify-center">
                                <Pagination previousLabel="" nextLabel="" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons style={{ color: "var(--main-color)" }} />
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
                    <div className="pl-4 text-sm font-normal">Đã xảy ra lỗi! Xin vui lòng thử lại!</div>
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
