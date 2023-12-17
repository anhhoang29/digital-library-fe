import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "flowbite-react";
import { HiChartPie, HiIdentification, HiOutlineBookmark, HiOutlineCalendar, HiOutlineCloudDownload, HiOutlineEye, HiOutlineHeart, HiOutlinePaperAirplane, HiOutlineReply } from "react-icons/hi";

import moment from "moment/moment";

import { getADocument } from "../../../api/main/documentAPI";

const DetailDocument = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

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
                //navigate to 404
            }
        } catch (error) {
            // navigate to 500
        }
    };

    return (
        <>
            <div className="flex-1 p-4 bg-gray-50">
                <div className="flex gap-5 w-full">
                    <div className="bg-white rounded-lg shadow-md p-5 w-3/4">
                        <div>
                            <h2 className="mt-2 mb-6 text-2xl font-bold text-green-400 dark:text-gray-400 md:text-2xl text-justify">{document && document.docName}</h2>
                        </div>

                        <div>
                            <p className="mb-4 mt-4 text-gray-700 dark:text-gray-400 text-sm text-justify">{document && document.docIntroduction}</p>
                        </div>

                        <div className="flex">
                            <div className="w-4/5 flex gap-8 items-center">
                                <div className="flex items-center font-bold">
                                    <HiOutlinePaperAirplane className="w-5 h-5 mr-1 text-gray-500 dark:text-white" />
                                    <span className="block text-base font-normal text-cyan-500 dark:text-white">
                                        {document && document.userUploaded && document.userUploaded.lastName} {document && document.userUploaded && document.userUploaded.firstName}
                                    </span>
                                </div>

                                <div className="flex items-center font-bold">
                                    <HiOutlineCalendar className="w-5 h-5 mr-1 text-gray-500 dark:text-white" />
                                    <span className="block text-base font-normal text-red-500 dark:text-white">{document && moment(document.updatedAt).format("DD/MM/yyyy")}</span>
                                </div>

                                <div className="flex items-center font-bold">
                                    <HiOutlineEye className="w-5 h-5 mr-1 text-gray-500 dark:text-white" />
                                    <span className="block text-base font-normal text-red-500 dark:text-white">{document && document.totalView}</span>
                                </div>

                                <div className="flex items-center font-bold">
                                    <HiOutlineHeart className="w-5 h-5 mr-1 text-gray-500 dark:text-white" />
                                    <span className="block text-base font-normal text-red-500 dark:text-white">{document && document.totalFavorite}</span>
                                </div>
                            </div>

                            <div className="w-1/5 grid place-items-center">
                                <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400" style={{ fontSize: "3.75rem" }}>
                                    {document && document.averageRating}
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-5 w-1/4 h-fit">
                        <div className="mb-5">
                            <div className="flex items-center mb-2 font-bold">
                                <HiChartPie className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                <span className="block text-base font-medium dark:text-white">Trường</span>
                            </div>
                            <div className="block mb-2 text-base font-medium text-green-400 dark:text-white">{document && document.organization && document.organization.orgName}</div>
                        </div>

                        <div className="mb-5">
                            <div className="flex items-center mb-2 font-bold">
                                <HiIdentification className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                <span className="block text-base font-medium dark:text-white">Danh mục</span>
                            </div>
                            <div className="block text-base font-medium text-green-400 dark:text-white">{document && document.category && document.category.categoryName}</div>
                        </div>

                        <div className="">
                            <div className="flex items-center mb-2 font-bold">
                                <HiIdentification className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                <span className="block text-base font-medium dark:text-white">Lĩnh vực</span>
                            </div>
                            <div className="block text-base font-medium text-green-400 dark:text-white">{document && document.field && document.field.fieldName}</div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 w-full mt-5  mb-5 h-full">
                    <div className="bg-white rounded-lg shadow-md w-3/4 h-[700px]">
                        <iframe width="100%" height="700px" className="rounded-lg" title="Tài liệu PDF" src={document && document.viewUrl}></iframe>
                    </div>

                    <div className="w-[18%] fixed right-4 sticky">
                        <div className="flex flex-col gap-y-5 p-3 w-auto">
                            <Button pill className="bg-white text-lg text-gray-700 enabled:hover:bg-red-50 enabled:active:bg-red-100 focus:border focus:ring-0 focus:bg-white border border-solid shadow-lg">
                                <HiOutlineHeart className="mr-2 h-7 w-7 text-red-400" />
                                <span className="text-base">Thích</span>
                            </Button>

                            <Button pill className="bg-white text-gray-700 enabled:hover:bg-green-50 enabled:active:bg-green-100 focus:border focus:ring-0 focus:bg-white border border-solid shadow-lg">
                                <HiOutlineBookmark className="mr-2 h-7 w-7 text-green-500" />
                                <span className="text-base">Lưu</span>
                            </Button>

                            <Button pill className="bg-white text-gray-700 enabled:hover:bg-gray-50 enabled:active:bg-gray-100 focus:border focus:ring-0 focus:bg-white border border-solid shadow-lg">
                                <HiOutlineCloudDownload className="mr-2 h-7 w-7 text-gray-700" />
                                <span className="text-base">Tải về</span>
                            </Button>

                            <Button pill className="bg-white text-gray-700 enabled:hover:bg-gray-50 enabled:active:bg-gray-100 focus:border focus:ring-0 focus:bg-white border border-solid shadow-lg">
                                <HiOutlineReply className="mr-2 h-7 w-7 text-gray-700" />
                                <span className="text-base">Chia sẻ</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-5">Đánh giá</div>
            </div>
        </>
    );
};

export default DetailDocument;
