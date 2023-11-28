import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getADocument } from "../../../api/admin/documentAPI";

import { Rating, Button } from "flowbite-react";
import { HiLibrary, HiViewBoards, HiTable, HiUserAdd, HiThumbUp, HiLink, HiEye, HiInformationCircle, HiRefresh, HiCloudUpload, HiRss, HiXCircle } from "react-icons/hi";

const DetailDocument = () => {
    const { slug } = useParams();

    const [document, setDocument] = useState(null);

    useEffect(() => {
        getDocumentBySlug();
    }, []);

    const getDocumentBySlug = async () => {
        try {
            const response = await getADocument(slug);

            if (response.status === 200) {
                setDocument(response.data);
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Icon partern: w-5 h-5 mr-3 text-gray-800 dark:text-white

    return (
        <div>
            <div className="row">
                <div className="col-12 flex">
                    <div className="card w-1/3 mr-5">
                        <div className="card__body">
                            <div className="mb-8 ">
                                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-2xl">{document && document.docName}</h2>
                                <Rating>
                                    <Rating.Star />
                                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                                    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                                        73 reviews
                                    </a>
                                </Rating>

                                <p className="max-w-md mb-2 mt-4 text-gray-700 dark:text-gray-400 text-sm">{document && document.docIntroduction}</p>
                            </div>

                            <div className="mb-5">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiLibrary className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                    <span className="block text-base font-medium dark:text-white">Trường</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">{document && document.organization.orgName}</div>
                            </div>

                            <div className="mb-5">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiViewBoards className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                    <span className="block text-base font-medium dark:text-white">Danh mục</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">{document && document.category.categoryName}</div>
                            </div>

                            <div className="mb-5">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiTable className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                    <span className="block text-base font-medium dark:text-white">Lĩnh vực</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">{document && document.field.fieldName}</div>
                            </div>

                            <div className="mb-5">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiThumbUp className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                    <span className="block text-base font-medium dark:text-white">Lượt thích</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">{document && document.totalFavorite}</div>
                            </div>

                            <div className="mb-5">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiEye className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                    <span className="block text-base font-medium dark:text-white">Lượt xem</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">{document && document.totalView}</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-2/3 mb-8">
                        <iframe title="Hiển thị tài liệu PDF" src={document && document.viewUrl} width="100%" height="500px" className="h-full"></iframe>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 flex">
                    <div className="card w-1/3 mr-5">
                        <div className="card__body">
                            <div className="mb-5">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiUserAdd className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                    <span className="block text-base font-medium dark:text-white">Người tải lên</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">
                                    {document && document.userUploaded && document.userUploaded.lastName} {document && document.userUploaded && document.userUploaded.firstName}
                                </div>
                            </div>

                            <div className="mb-5">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiCloudUpload className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                    <span className="block text-base font-medium dark:text-white">Ngày tải lên</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">{document && document.uploadedAt}</div>
                            </div>

                            <div className="mb-5">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiRefresh className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                    <span className="block text-base font-medium dark:text-white">Ngày cập nhật</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">{document && document.updatedAt}</div>
                            </div>

                            <div className="mb-5">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiXCircle className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                    <span className="block text-base font-medium dark:text-white">Trạng thái</span>
                                </div>
                                {/* <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">{document && document.field.fieldName}</div> */}
                                {document && !document.deleted && (
                                    <Button color="success" pill>
                                        Đang hoạt động
                                    </Button>
                                )}
                                {document && document.deleted && (
                                    <Button color="failure" pill>
                                        Đã xoá
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="card w-2/3 mr-5">
                        <div className="card__body">
                            <div className="flex">
                                <div className="mb-5 mr-20">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiInformationCircle className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium dark:text-white">Phê duyệt</span>
                                    </div>
                                    {document && document.verifiedStatus === 0 && (
                                        <Button color="warning" pill>
                                            Đang đợi duyệt
                                        </Button>
                                    )}
                                    {document && document.verifiedStatus === 1 && (
                                        <Button color="success" pill>
                                            Đã duyệt
                                        </Button>
                                    )}
                                    {document && document.verifiedStatus === -1 && (
                                        <Button color="failure" pill>
                                            Đã từ chối
                                        </Button>
                                    )}
                                </div>

                                <div className="mb-5 mr-20">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiUserAdd className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium dark:text-white"> Người phê duyệt</span>
                                    </div>
                                    <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">
                                        {document && document.userVerified && document.userVerified.lastName} {document && document.userVerified && document.userVerified.firstName}
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiRss className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium dark:text-white">Phạm vi</span>
                                    </div>
                                    {document && !document.internal && (
                                        <Button color="success" pill>
                                            Công khai
                                        </Button>
                                    )}
                                    {document && document.internal && (
                                        <Button color="info" pill>
                                            Nội bộ
                                        </Button>
                                    )}
                                </div>
                            </div>

                            <div className="mb-5">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiLink className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                    <span className="block text-base font-medium dark:text-white">URL</span>
                                </div>
                                <div className="flex">
                                    <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">View: </div>
                                    <a className="block mb-2 ml-2 text-base font-medium dark:text-white italic" href={document && document.viewUrl} target="_blank" rel="noopener noreferrer">
                                        {document && document.viewUrl}
                                    </a>
                                </div>
                                <div className="flex">
                                    <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">Download:</div>
                                    <a className="block mb-2 ml-2 text-base font-medium dark:text-white italic" href={document && document.downloadUrl} target="_blank" rel="noopener noreferrer">
                                        {document && document.downloadUrl}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="card w-1/3 mr-5">
                        <div className="card__body">
                            
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default DetailDocument;
