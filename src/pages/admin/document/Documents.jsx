import React, { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";

import ActionButton from "../../../components/management/action-button/ActionButton";
import SelectFilter from "../../../components/management/select/SelectFilter";
import Table from "../../../components/management/table/Table";

import { Badge, Button, Modal, Pagination, Spinner, TextInput, Toast } from "flowbite-react";
import { HiCheck, HiDocumentRemove, HiDocumentSearch, HiOutlineCheck, HiOutlineDotsHorizontal, HiX } from "react-icons/hi";

import { getAllCategories } from "../../../api/main/categoryAPI";
import { deleteADocument, getAllDocuments, getLatestDocuments, searchDocuments } from "../../../api/main/documentAPI";
import { getAllFields } from "../../../api/main/fieldAPI";
import { getAllOrganizations } from "../../../api/main/organizationAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

import scopeList from "../../../assets/JsonData/scopes.json";
import verifiedStatusList from "../../../assets/JsonData/verified_status_list.json";

let selectedPage = 0;

const Documents = () => {
    const tableHead = ["", "Tên", "Giới thiệu", "Trạng thái", "Lượt xem", ""];

    const renderHead = (item, index) => (
        <th key={index} className="text-center cursor-pointer">
            {item}
        </th>
    );

    const renderBody = (item, index) => (
        <tr key={index}>
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
    const [category, setCategory] = useState("all");
    const [field, setField] = useState("all");
    const [organization, setOrganization] = useState("all");
    const [deleted, setDeleted] = useState("all");
    const [internal, setInternal] = useState("all");
    const [verifiedStatus, setVerifiedStatus] = useState("all");

    const [documentList, setDocumentList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [fieldList, setFieldList] = useState([]);
    const [organizationList, setOrganizationList] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [status, setStatus] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [docId, setDocId] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        getCategoryList();
        getFieldList();
        getOrganizationList();
    }, []);

    useEffect(() => {
        if (isSearching) {
            getDocumentListWithSearch(currentPage);
        } else {
            if (isLatestRoute) getLatestDocumentList(currentPage);
            else {
                getDocumentList(currentPage);
            }
        }
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);
        if (isSearching) {
            getDocumentListWithSearch(currentPage);
        } else {
            if (isLatestRoute) getLatestDocumentList(currentPage);
            else getDocumentList(currentPage);
        }
    }, [category, field, organization, deleted, internal, verifiedStatus]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        selectedPage = page - 1;
    };

    const getCategoryList = async () => {
        try {
            setIsFetching(true);
            const response = await getAllCategories();
            setIsFetching(false);
            if (response.status === 200) {
                setCategoryList(response.data);
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
            const response = await getAllFields();
            setIsFetching(false);
            if (response.status === 200) {
                setFieldList(response.data);
            } else {
                // navigate("/admin/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getOrganizationList = async () => {
        try {
            setIsFetching(true);
            const response = await getAllOrganizations({
                params: {
                    page: 0,
                    size: 100,
                },
            });
            setIsFetching(false);
            if (response.status === 200) {
                setOrganizationList(response.data.content);
                setTotalPages(response.data.totalPages);
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
            const response = await getAllDocuments({
                params: {
                    page: page - 1,
                    size: 15,
                    order: "updatedAt",
                    category: category,
                    field: field,
                    organization: organization,
                    deleted: deleted,
                    internal: internal,
                    status: verifiedStatus,
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
                // navigate("/admin/login");
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
                    order: "updatedAt",
                    category: category,
                    field: field,
                    organization: organization,
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
                // navigate("/admin/login");
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

                if (isSearching) getDocumentListWithSearch(currentPage);
                else {
                    if (isLatestRoute) getLatestDocumentList(currentPage);
                    else getDocumentList(currentPage);
                }
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
                                    selectName="Trường"
                                    options={organizationList}
                                    selectedValue={organization}
                                    onChangeHandler={(e) => {
                                        setOrganization(e.target.value);
                                    }}
                                    name="orgName"
                                    field="slug"
                                    required
                                />
                            </div>

                            <div className="flex flex-wrap gap-10 mt-4">
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
                        </div>
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

export default Documents;
