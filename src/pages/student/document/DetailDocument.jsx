import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { Avatar, Button, Label, Textarea, Toast } from "flowbite-react";
import { HiChartPie, HiHeart, HiIdentification, HiOutlineBookmark, HiOutlineCalendar, HiOutlineCheck, HiOutlineCloudDownload, HiOutlineEye, HiOutlineHeart, HiOutlinePaperAirplane, HiOutlineReply, HiX } from "react-icons/hi";

import moment from "moment/moment";

import { getADocument } from "../../../api/main/documentAPI";
import { checkLikedStatus, likeDocument } from "../../../api/main/likeAPI";
import { checkSavedStatus, saveDocument } from "../../../api/main/saveAPI";

import { checkReviewedStatus, getReviewsOfDocument, postAReview } from "../../../api/main/reviewAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";
import ClickableStarRating from "../../../components/student/rating/ClickableStarRating";
import StarRating from "../../../components/student/rating/StarRating";

const DetailDocument = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    usePrivateAxios();

    const [document, setDocument] = useState(null);
    const [reviewList, setReviewList] = useState([]);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [isReviewed, setIsReviewed] = useState(false);
    const [star, setStar] = useState(0);
    const [content, setContent] = useState("");
    const [isStarValid, setIsStarValid] = useState(true);
    const [message, setMessage] = useState("Đã xảy ra lỗi! Vui lòng thử lại!");
    const [status, setStatus] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const user = JSON.parse(sessionStorage.getItem("profile"));
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        getDocumentBySlug();
        getReviewsByDocument();
        if (user && accessToken) {
            checkLiked();
            checkSaved();
            checkReviewed();
        }
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

    const getReviewsByDocument = async () => {
        try {
            const response = await getReviewsOfDocument(slug);

            if (response.status === 200) {
                setReviewList(response.data);
            } else {
                //navigate to 404
            }
        } catch (error) {
            // navigate to 500
        }
    };

    const checkLiked = async () => {
        try {
            const response = await checkLikedStatus(slug);

            if (response.status === 200) {
                if (response.message === "Liked") setIsLiked(true);
                else setIsLiked(false);
            } else {
                //navigate to 404
            }
        } catch (error) {
            // navigate to 500
        }
    };

    const checkSaved = async () => {
        try {
            const response = await checkSavedStatus(slug);

            if (response.status === 200) {
                if (response.message === "Saved") setIsSaved(true);
                else setIsSaved(false);
            } else {
                //navigate to 404
            }
        } catch (error) {
            // navigate to 500
        }
    };

    const checkReviewed = async () => {
        try {
            const response = await checkReviewedStatus(slug);

            if (response.status === 200) {
                if (response.message === "Reviewed") setIsReviewed(true);
                else setIsReviewed(false);
            } else {
                //navigate to 404
            }
        } catch (error) {
            // navigate to 500
        }
    };

    const handleLike = async () => {
        try {
            const response = await likeDocument(slug);

            if (response.status === 200) {
                if (response.message === "Unlike document successfully") {
                    setIsLiked(false);
                    setMessage("Đã xoá khỏi danh sách yêu thích!");
                } else {
                    setIsLiked(true);
                    setMessage("Đã thêm vào danh sách yêu thích!");
                }
                getDocumentBySlug();
                setStatus(1);
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            } else {
                setStatus(-1);
                setMessage("Đã xảy ra lỗi! Vui lòng thử lại!");
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            }
        } catch (error) {
            // navigate to 500
        }
    };

    const handleSave = async () => {
        try {
            const response = await saveDocument(slug);

            if (response.status === 200) {
                if (response.message === "Unsave document successfully") {
                    setIsSaved(false);
                    setMessage("Đã xoá khỏi danh sách đã lưu!");
                } else {
                    setIsSaved(true);
                    setMessage("Đã thêm vào danh sách đã lưu!");
                }
                setStatus(1);
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            } else {
                setStatus(-1);
                setMessage("Đã xảy ra lỗi! Vui lòng thử lại!");
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            }
        } catch (error) {
            // navigate to 500
        }
    };

    const handleDownload = () => {
        if (document && document.downloadUrl) {
            window.location.href = document.downloadUrl;
        } else {
            setStatus(-1);
            setMessage("Liên kết tải xuống đã bị hỏng! Xin lỗi vì sự bất tiện này!");
            setTimeout(() => {
                setStatus(0);
            }, 4000);
        }
    };

    const handleShare = () => {
        const shareLink = window.location.href

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const popupWidth = Math.round(screenWidth * 0.5);
        const popupHeight = Math.round(screenHeight * 0.6);

        const left = Math.round((screenWidth - popupWidth) / 2);
        const top = Math.round((screenHeight - popupHeight) / 2);

        window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`, "popup", `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
    };

    const handleReview = async () => {
        if (star !== 0) {
            setIsLoading(true);
            try {
                const data = {
                    star: star,
                    content: content,
                };

                const response = await postAReview(document.docId, data);

                setIsLoading(false);

                if (response.status === 200) {
                    setStatus(1);
                    setMessage("Đánh giá thành công!");
                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                    setIsReviewed(true);
                    getReviewsByDocument();
                    setStar(0);
                    setContent("");
                } else {
                    setStatus(-1);
                    setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");

                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                }
            } catch (error) {
                setIsLoading(false);
                setStatus(-1);
                setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            }
        } else {
            setIsStarValid(false);
        }
    };

    const handleRatingChange = (newRating) => {
        setStar(newRating);
        setIsStarValid(true);
    };

    return (
        <>
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
                                <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400" style={{ fontSize: "3.75rem" }}>
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
                        <iframe width="100%" height="700px" className="rounded-lg" title="Tài liệu PDF" src={document && document.viewUrl + "#toolbar=0"}></iframe>
                    </div>

                    <div className="w-[18%] fixed right-4 sticky">
                        <div className="flex flex-col gap-y-5 p-3 w-auto">
                            <Button pill className="bg-white text-lg text-gray-700 enabled:hover:bg-red-50 enabled:active:bg-red-100 focus:border focus:ring-0 focus:bg-white border border-solid shadow-lg" onClick={handleLike}>
                                {isLiked ? <HiHeart className="mr-2 h-7 w-7 text-red-500" /> : <HiOutlineHeart className="mr-2 h-7 w-7 text-red-500" />}
                                {isLiked ? <span className="text-base">Đã thích</span> : <span className="text-base">Thích</span>}
                            </Button>

                            <Button pill className="bg-white text-gray-700 enabled:hover:bg-green-50 enabled:active:bg-green-100 focus:border focus:ring-0 focus:bg-white border border-solid shadow-lg" onClick={handleSave}>
                                {isSaved ? <HiOutlineBookmark className="mr-2 h-7 w-7 fill-green-500 text-green-500" /> : <HiOutlineBookmark className="mr-2 h-7 w-7 text-green-500" />}
                                {isSaved ? <span className="text-base">Đã lưu</span> : <span className="text-base">Lưu</span>}
                            </Button>

                            <Button pill className="bg-white text-gray-700 enabled:hover:bg-gray-50 enabled:active:bg-gray-100 focus:border focus:ring-0 focus:bg-white border border-solid shadow-lg" onClick={handleDownload}>
                                <HiOutlineCloudDownload className="mr-2 h-7 w-7 text-gray-700" />
                                <span className="text-base">Tải về</span>
                            </Button>

                            <Button pill className="bg-white text-gray-700 enabled:hover:bg-gray-50 enabled:active:bg-gray-100 focus:border focus:ring-0 focus:bg-white border border-solid shadow-lg" onClick={handleShare}>
                                <HiOutlineReply className="mr-2 h-7 w-7 text-gray-700" />
                                <span className="text-base">Chia sẻ</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="bg-white rounded-lg shadow-md p-5 w-3/4 h-fit">
                        {reviewList.length === 0 && 
                        <p className="text-sm font-medium">
                                            Chưa có đánh giá!
                                        </p>}
                        <div className="grid grid-cols-2 gap-5">
                            {reviewList.map((review, index) => (
                                <div className="shadow-lg rounded-lg border p-3">
                                    <div className="flex items-center  gap-2" key={review.reviewId}>
                                        <Avatar alt={review.user.firstName} img={review.user.image} rounded />
                                        <p className="text-sm font-medium">
                                            {review.user.lastName} {review.user.firstName}
                                        </p>
                                        <StarRating rating={review.star} />
                                    </div>

                                    <p className="text-xs text-justify mt-2">{review.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-5 w-1/4 h-fit">
                        <div className="max-w-md mb-5">
                            <div className="mb-2 block">
                                <Label htmlFor="star" value="Rating" />
                            </div>
                            <ClickableStarRating onChange={handleRatingChange} />
                            {!isStarValid && <p className="block mt-2 text-xs font-medium text-red-600 italic">Vui lòng chọn rating</p>}
                        </div>

                        <div className="max-w-md mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="content" value="Nội dung" />
                            </div>
                            <Textarea id="content" className="focus:border-green-500 focus:border-2 focus:ring-0 text-justify" placeholder="Nhập nội dung..." value={content} required rows={5} onChange={(e) => setContent(e.target.value)} />
                        </div>

                        <Button pill className="bg-green-400 text-white enabled:hover:bg-green-300 enabled:active:bg-green-350 focus:border focus:ring-0 focus:bg-green-350 border border-solid px-3" onClick={handleReview} disabled={isReviewed} isProcessing={isLoading}>
                            <span className="text-base">Gửi</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailDocument;
