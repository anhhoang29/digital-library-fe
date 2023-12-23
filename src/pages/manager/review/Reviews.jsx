import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../../components/management/table/Table";

import ActionButton from "../../../components/management/action-button/ActionButton";

import { Button, Modal, Pagination, Spinner, Toast } from "flowbite-react";
import { HiDocumentRemove, HiOutlineCheck, HiX } from "react-icons/hi";

import { deleteAReview, getReviewsOfOrganization } from "../../../api/main/reviewAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

let selectedPage = 0;

const Reviews = () => {
    const tableHead = ["", "Rating", "Nội dung", "Người đánh giá", "Tài liệu", ""];

    const renderHead = (item, index) => (
        <th key={index} className="text-center">
            {item}
        </th>
    );

    const renderBody = (item, index) => (
        <tr key={index} className="cursor-pointer">
            <td className="text-center font-bold">{selectedPage * 15 + index + 1}</td>
            <td className="max-w-xs text-justify font-bold">
                {item.star} <i className="bx bxs-star" style={{ color: "green" }}></i>
            </td>
            <td className="max-w-xs text-justify">{item.content}</td>
            <td className="max-w-xs text-center" onClick={() => handleUser(item.user.userId)}>
                {item.user && item.user.lastName} {item.user && item.user.firstName}
            </td>
            <td className="max-w-xs text-justify" onClick={() => handleDocument(item.document.slug)}>
                {item.document && item.document.docName}
            </td>
            <td className="text-center">
                <div className="flex space-x-0">
                    <ActionButton onClick={() => handleDelete(item.reviewId)} icon="bx bxs-calendar-x" color="red" content="Xoá tài liệu" />
                </div>
            </td>
        </tr>
    );

    const navigate = useNavigate();

    // const user = useSelector((state) => state.LoginReducer.user);
    const user = JSON.parse(sessionStorage.getItem("profile"));

    const handleUser = (userId) => {
        navigate(`/manager/users/${userId}`);
    };

    const handleDocument = (slug) => {
        navigate(`/manager/documents/${slug}`);
    };

    const handleDelete = (reviewId) => {
        setOpenModal(true);
        setReviewId(reviewId);
    };

    usePrivateAxios();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [reviewList, setReviewList] = useState([]);
    const [reviewId, setReviewId] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [status, setStatus] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        getReviewList(currentPage);
    }, [currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        selectedPage = page - 1;
        // data
    };

    const getReviewList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getReviewsOfOrganization(user.organization.orgId, {
                params: {
                    page: page - 1,
                    size: 15,
                },
            });
            setIsFetching(false);
            if (response.status === 200) {
                setReviewList(response.data.content);
                setTotalPages(response.data.totalPages);
            } else {
                // navigate("/manager/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteReview = async (reviewId) => {
        setIsLoading(true);
        try {
            const response = await deleteAReview(reviewId);
            setIsLoading(false);
            setOpenModal(false);
            if (response.status === 200) {
                setStatus(1);
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
                getReviewList(1);
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

    return (
        <div>
            <h2 className="page-header">Đánh giá</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table totalPages="10" headData={tableHead} renderHead={(item, index) => renderHead(item, index)} bodyData={reviewList} renderBody={(item, index) => renderBody(item, index)} />

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
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Bạn có chắc chắn muốn xoá đánh giá này không?</h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" isProcessing={isLoading} onClick={() => deleteReview(reviewId)}>
                                Chắc chắn
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
                    <HiX className="h-5 w-5 bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200" />
                    <div className="pl-4 text-sm font-normal">Đã xảy ra lỗi! Xin vui lòng thử lại!</div>
                </Toast>
            )}

            {status === 1 && (
                <Toast className="top-1/4 right-5 fixed w-100">
                    <HiOutlineCheck className="h-5 w-5 bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200" />
                    <div className="pl-4 text-sm font-normal">Xoá đánh giá thành công!</div>
                </Toast>
            )}
        </div>
    );
};

export default Reviews;
