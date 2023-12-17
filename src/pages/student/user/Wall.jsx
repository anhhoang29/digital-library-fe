import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Pagination, Toast } from "flowbite-react";
import { HiAdjustments, HiOutlineCheck, HiX } from "react-icons/hi";

import DocumentCard from "../../../components/student/card/Card";

import { deleteADocument, getUploadedDocuments } from "../../../api/main/documentAPI";
import { getProfile, updateAvatar, updatePassword, updateProfile } from "../../../api/main/userAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";
import profileImage from "../../../assets/images/default_profile.jpg";

let selectedPage = 0;

const UserWall = () => {
    const genderList = [
        { id: 0, name: "Nam" },
        { id: 1, name: "Nữ" },
        { id: 2, name: "Khác" },
    ];

    const roleList = {
        ROLE_ADMIN: "ADMIN",
        ROLE_STUDENT: "SINH VIÊN",
        ROLE_LECTURER: "GIẢNG VIÊN",
        ROLE_MANAGER: "QUẢN LÝ",
    };

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [gender, setGender] = useState(0);
    const [dateOfBirth, setDateOfBirth] = useState("1990-01-01");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [image, setImage] = useState(profileImage);

    const [isLoadingInfo, setIsLoadingInfo] = useState(false);
    const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);
    const [isLoadingPassword, setIsLoadingPassword] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [status, setStatus] = useState(0);

    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isDateOfBirthValid, setIsDateOfBirthValid] = useState(true);
    const [isOldPasswordValid, setIsOldPasswordValid] = useState(true);
    const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
    const [isFileValid, setIsFileValid] = useState(true);
    const [fileMessage, setFileMessage] = useState("");
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
    const [message, setMessage] = useState("Đã xảy ra lỗi! Xin vui lòng thử lại!");

    const [user, setUser] = useState(null);

    // Documents
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [documentList, setDocumentList] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);
    const [docId, setDocId] = useState("");

    usePrivateAxios();
    const navigate = useNavigate();

    useEffect(() => {
        getUserProfile();
    }, []);

    useEffect(() => {
        getUploadedDocumentList(currentPage);
    }, [currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        selectedPage = page - 1;
    };

    const getUploadedDocumentList = async (page) => {
        try {
            setIsFetching(true);
            const response = await getUploadedDocuments({
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
                navigate("/manager/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getUserProfile = async () => {
        try {
            const response = await getProfile();

            if (response.status === 200) {
                const user = response.data;
                setUser(user);
                setLastName(user.lastName);
                setFirstName(user.firstName);
                setGender(user.gender);
                setDateOfBirth(user.dateOfBirth);
                setEmail(user.email);
                setPhone(user.phone);
            } else {
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
        navigate(`/manager/documents/${slug}`);
    };

    const handleEdit = (slug) => {
        navigate(`/manager/documents/${slug}/edit`);
    };

    const handleDelete = (docId) => {
        setOpenModal(true);
        setDocId(docId);
    };

    const handleImageUpload = (e) => {
        setImageFile(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const validateLastName = () => {
        if (lastName === "" || lastName.trim() === "") setIsLastNameValid(false);
        else setIsLastNameValid(true);
    };

    const validateFirstName = () => {
        if (firstName === "" || firstName.trim() === "") setIsFirstNameValid(false);
        else setIsFirstNameValid(true);
    };

    const validateEmail = () => {
        if (email === "" || email.trim() === "") setIsEmailValid(false);
        else setIsEmailValid(true);
    };

    const validatePhone = () => {
        if (phone === "" || phone.trim() === "") setIsPhoneValid(false);
        else setIsPhoneValid(true);
    };

    const validateDateOfBirth = () => {
        const fifteenYearsAgo = new Date();
        fifteenYearsAgo.setFullYear(new Date().getFullYear() - 15);
        if (dateOfBirth > fifteenYearsAgo) setIsDateOfBirthValid(false);
        else setIsDateOfBirthValid(true);
    };

    const validateOldPassword = () => {
        if (oldPassword === "" || oldPassword.trim() === "") setIsOldPasswordValid(false);
        else setIsOldPasswordValid(true);
    };

    const validateNewPassword = () => {
        if (newPassword === "" || newPassword.trim() === "") setIsNewPasswordValid(false);
        else setIsNewPasswordValid(true);
    };

    const validateConfirmPassword = () => {
        if (confirmPassword === "" || confirmPassword.trim() === "") {
            setIsConfirmPasswordValid(false);
            setConfirmPasswordMessage("Vui lòng nhập mật khẩu.");
        } else if (confirmPassword !== newPassword) {
            setIsConfirmPasswordValid(false);
            setConfirmPasswordMessage("Mật khẩu không khớp.");
        } else setIsConfirmPasswordValid(true);
    };

    const validateFile = () => {
        if (imageFile === null) {
            setFileMessage("Vui lòng chọn ảnh đại diện");
            setIsFileValid(false);
            return false;
        } else if (imageFile !== null && (imageFile.size > 5 * 1024 * 1024 || imageFile.size === 0)) {
            setFileMessage("Vui lòng chọn ảnh hợp lệ và nhỏ hơn 5MB");
            setIsFileValid(false);
            return false;
        } else if (imageFile !== null && imageFile.type !== "image/jpeg" && imageFile.type !== "image/png" && imageFile.type !== "image/jpg" && imageFile.type !== "image/bmp") {
            setFileMessage("Vui lòng chỉ chọn tệp ảnh JPG, JPEG, PNG, BMP");
            setIsFileValid(false);
            return false;
        } else {
            return true;
        }
    };

    const validateInput = () => {
        validateLastName();
        validateFirstName();
        validateEmail();
        validatePhone();
        validateDateOfBirth();

        if (!isLastNameValid || !isFirstNameValid || !isEmailValid || !isPhoneValid || !isDateOfBirthValid) {
            return false;
        } else return true;
    };

    const handleSubmitInfo = async (e) => {
        e.preventDefault();

        if (validateInput()) {
            setIsLoadingInfo(true);

            try {
                const data = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    gender: gender,
                    dateOfBirth: dateOfBirth,
                };

                const response = await updateProfile(data);

                setIsLoadingInfo(false);

                if (response.status === 200) {
                    setStatus(1);
                    setMessage("Cập nhật thông tin thành công!");
                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);

                    setUser(response.data);
                    sessionStorage.setItem("profile", JSON.stringify(response.data));

                    setLastName(response.data.lastName);
                    setFirstName(response.data.firstName);
                    setGender(response.data.gender);
                    setDateOfBirth(new Date(response.data.dateOfBirth));
                    setEmail(response.data.email);
                    setPhone(response.data.phone);
                } else {
                    setStatus(-1);

                    if (response.message === "Email already registered") setMessage("Email đã tồn tại!");
                    else if (response.message === "User not found") setMessage("Người dùng không tồn tại!");
                    else setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");

                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                }
            } catch (error) {
                setIsLoadingInfo(false);
                setStatus(-1);
                setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            }
        }
    };

    const handleSubmitAvatar = async (e) => {
        e.preventDefault();

        if (validateFile()) {
            setIsLoadingAvatar(true);

            try {
                const formData = new FormData();
                if (imageFile) formData.append("avatar", imageFile);
                const config = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                };
                const response = await updateAvatar(formData, config);

                setIsLoadingAvatar(false);

                if (response.status === 200) {
                    setImage(profileImage);
                    setImageFile(null);
                    setStatus(1);
                    setMessage("Cập nhật ảnh đại diện thành công!");
                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                    setUser(response.data);
                } else {
                    setStatus(-1);
                    setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");

                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                }
            } catch (error) {
                setIsLoadingAvatar(false);
                setStatus(-1);
                setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");
                setTimeout(() => {
                    setStatus(0);
                }, 2000);
            }
        }
    };

    const handleSubmitPassword = async (e) => {
        e.preventDefault();

        validateOldPassword();
        validateNewPassword();
        validateConfirmPassword();

        if (isOldPasswordValid && isNewPasswordValid && isConfirmPasswordValid) {
            setIsLoadingPassword(true);

            try {
                const data = {
                    oldPassword: oldPassword,
                    newPassword: newPassword,
                    confirmPassword: confirmPassword,
                };

                const response = await updatePassword(data);

                setIsLoadingPassword(false);

                if (response.status === 200) {
                    setStatus(1);
                    setMessage("Cập nhật mật khẩu thành công!");
                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                    setUser(response.data);
                } else {
                    setStatus(-1);

                    if (response.message === "Password incorrect") setMessage("Mật khẩu cũ không đúng!");
                    else if (response.message === "Passwords not matched") setMessage("Mật khẩu mới không khớp!");
                    else if (response.message === "User not found") setMessage("Người dùng không tồn tại!");
                    else setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");

                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                }
            } catch (error) {
                setIsLoadingPassword(false);
                setStatus(-1);
                setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            }
        }
    };

    return (
        <div>
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

            <div className="bg-gray-50 p-4">
                <div className="flex w-full ">
                    <div className="p-0 h-min rounded-lg shadow-lg bg-white w-1/4 mr-5">
                        <div className="p-5 grid place-items-center">
                            <img alt="Profile" src={user && user.image ? user.image : profileImage} className="mb-3 mt-5 rounded-full border-solid border-4 border-gray w-28 h-28" />

                            <h5 className="mb-2 text-2xl font-medium dark:text-white">
                                {user && user.lastName} {user && user.firstName} ggggg
                            </h5>

                            <div className="profile-info mt-5">
                                <div className="flex text-center font-bold">
                                    <span className="block text-base uppercase font-medium dark:text-white">{user && user.organization && user.organization.orgName} fff</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5 font-bold text-justif mt-5 p-5">
                            <span className="block text-base font-medium text-sky-500 dark:text-white">Tham gia từ: ssss</span>
                            <span className="block text-base font-medium text-sky-500 dark:text-white">Tổng số tài liệu: ssss</span>
                            <span className="block text-base font-medium text-sky-500 dark:text-white">Tổng lượt thích: ssss</span>
                        </div>
                    </div>

                    <hr />

                    <div className="bg-white rounded-lg h-min p-4 shadow-lg w-3/4">
                        <div className="mb-9">
                            <div className="flex items-center mb-2 font-bold">
                                <HiAdjustments className="w-8 h-8 mr-3 dark:text-white" />
                                <span className="block text-2xl font-bold dark:text-white">Đã tải lên</span>
                            </div>
                        </div>

                        <div>
                            <p>Kết quả 1 trong 20</p>
                        </div>

                        <div className="grid grid-cols-4 gap-8">
                            <DocumentCard />
                        </div>

                        <div className="flex overflow-x-auto sm:justify-center">
                            <Pagination previousLabel="Trước" nextLabel="Sau" currentPage={0} totalPages={10} onPageChange={""} showIcons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserWall;
