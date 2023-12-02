import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryModal from "../../../components/management/admin/modal/category/CategoryModal";
import Table from "../../../components/management/table/Table";

import ActionButton from "../../../components/management/action-button/ActionButton";

import { Badge, Button, Modal, Toast, Spinner } from "flowbite-react";

import { deleteACategory, getAllCategories } from "../../../api/main/categoryAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

import { HiCheck, HiDocumentRemove, HiX, HiOutlineCheck} from "react-icons/hi";

// let selectedPage = 0;

const Categories = () => {
    const tableHead = ["", "Tên", "Trạng thái", "Số tài liệu", ""];

    const renderHead = (item, index) => (
        <th className="text-center" key={index}>
            {item}
        </th>
    );
    // selectedPage * 20 +
    const renderBody = (item, index) => (
        <tr key={index}>
            <td className="w-1/12 text-center font-bold">{index + 1}</td>
            <td className="w-5/12 text-center">{item.categoryName}</td>
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
                    {/* <ActionButton onClick={() => handleDetail(item.categoryId)} icon="bx bxs-user-detail" color="green" content="Xem chi tiết người dùng" /> */}
                    <ActionButton onClick={() => handleEdit(item.categoryId)} icon="bx bx-edit" color="yellow" content="Chỉnh sửa danh mục" />
                    <ActionButton onClick={() => handleDelete(item.categoryId)} icon="bx bx-trash" color="red" content="Xoá danh mục" />
                </div>
            </td>
        </tr>
    );

    const navigate = useNavigate();
    usePrivateAxios();

    // const handleDetail = (categoryId) => {
    //     navigate(`/admin/users/${categoryId}`);
    // };

    const handleAdd = () => {
        setOpenCategoryModal(true);
        setIsCreatingNew(true);
        setTriggerModal(triggerModal + 1);
    };

    const handleEdit = (categoryId) => {
        setOpenCategoryModal(true);
        setIsCreatingNew(false);
        setCategoryId(categoryId);
        setTriggerModal(triggerModal + 1);
    };

    const handleDelete = (categoryId) => {
        setOpenDeleteModal(true);
        setCategoryId(categoryId);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [categoryList, setCategoryList] = useState([]);
    const [categoryId, setCategoryId] = useState("");

    const [openCategoryModal, setOpenCategoryModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [isCreatingNew, setIsCreatingNew] = useState(true);
    const [triggerModal, setTriggerModal] = useState(0);
    const [status, setStatus] = useState(0);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    // useEffect(() => {
    //     getCategoryList(currentPage);
    // }, [currentPage]);

    useEffect(() => {
        getCategoryList();
    }, []);

    // const onPageChange = (page) => {
    //     setCurrentPage(page);
    //     selectedPage = page - 1;
    //     // data
    // };

    const getCategoryList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getAllCategories();
            //     {
            //     params: {
            //         page: page - 1,
            //         size: 10,
            //     },
            // }
            setIsFetching(false);
            if (response.status === 200) {
                setCategoryList(response.data);
                // setTotalPages(response.data.totalPages);
            } else {
                navigate("/admin/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteCategory = async (categoryId) => {
        setIsLoading(true);
        try {
            const response = await deleteACategory(categoryId);
            setIsLoading(false);
            setOpenDeleteModal(false);
            if (response.status === 200) {
                setStatus(1);
                if (response.message === "Delete category from system successfully") setMessage("Xoá danh mục thành công!");
                else setMessage("Không thể xoá danh mục do đã tồn tại tài liệu, đã huỷ kích hoạt!");

                setTimeout(() => {
                    setStatus(0);
                }, 4000);
                getCategoryList();
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
                Thêm danh mục
            </Button>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table totalPages="10" headData={tableHead} renderHead={(item, index) => renderHead(item, index)} bodyData={categoryList} renderBody={(item, index) => renderBody(item, index)} />

                            {isFetching && <Spinner aria-label="Default status example" className="flex items-center w-full mb-2 mt-2" style={{ color: "var(--main-color)" }} />}

                            {/* <div className="flex overflow-x-auto sm:justify-center">
                                <Pagination previousLabel="Trước" nextLabel="Sau" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={openDeleteModal} size="md" onClose={() => setOpenDeleteModal(false)} popup className="z-40">
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiDocumentRemove className="mx-auto mb-4 h-14 w-14 text-red-600 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Bạn có chắc chắn muốn xoá danh mục này không?</h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" isProcessing={isLoading} onClick={() => deleteCategory(categoryId)}>
                                Chắc chắn
                            </Button>
                            <Button color="gray" disabled={isLoading} onClick={() => setOpenDeleteModal(false)}>
                                Huỷ bỏ
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <CategoryModal openCategoryModal={openCategoryModal} categoryId={categoryId} isCreatingNew={isCreatingNew} triggerModal={triggerModal} refreshCategoryList={getCategoryList} />

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

export default Categories;
