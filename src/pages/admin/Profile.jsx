import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Badge, Button, Datepicker, FileInput, Label, Modal, Pagination, Spinner, TextInput, Toast } from "flowbite-react";
import { HiAdjustments, HiAtSymbol, HiCake, HiCheck, HiDocumentRemove, HiOutlineCheck, HiPhone, HiUser, HiX } from "react-icons/hi";

import ActionButton from "../../components/management/action-button/ActionButton";
import Select from "../../components/management/select/Select";
import Table from "../../components/management/table/Table";

import { deleteADocument, getUploadedDocuments } from "../../api/main/documentAPI";
import { getProfile, updateAvatar, updatePassword, updateProfile } from "../../api/main/userAPI";
import usePrivateAxios from "../../api/usePrivateAxios";
import profileBackground from "../../assets/images/default_background.jpg";
import profileImage from "../../assets/images/default_profile.jpg";

let selectedPage = 0;

const Profile = () => {
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

    const tableHead = ["", "Tên", "Giới thiệu", "Trạng thái", "Lượt xem", ""];

    const renderHead = (item, index) => (
        <th key={index} className="cursor-pointer">
            {item}
        </th>
    );

    const renderBody = (item, index) => (
        <tr key={index}>
            <td className="text-center font-bold" onClick={() => handleDetail(item.slug)}>
                {selectedPage * 10 + index + 1}
            </td>
            <td className="max-w-xs text-justify" onClick={() => handleDetail(item.slug)}>
                {item.docName}
            </td>
            <td className="max-w-xl text-justify" onClick={() => handleDetail(item.slug)}>
                {item.docIntroduction}
            </td>
            <td className="max-w-xl text-center" onClick={() => handleDetail(item.slug)}>
                {item.deleted ? (
                    <Badge color="warning" icon={HiX}>
                        Đã xoá
                    </Badge>
                ) : (
                    <Badge icon={HiCheck}>Đang hoạt động</Badge>
                )}
            </td>
            <td className="max-w-xl text-center" onClick={() => handleDetail(item.slug)}>
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
                // navigate("/admin/login");
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
        navigate(`/admin/documents/${slug}`);
    };

    const handleEdit = (slug) => {
        navigate(`/admin/documents/${slug}/edit`);
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
                    sessionStorage.removeItem("profile");
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

            <div className="row">
                <div className="col-12 flex">
                    <div className="card w-2/3 h-min mr-5">
                        <div className="card__body">
                            <div className="mb-9">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiAdjustments className="w-8 h-8 mr-3 dark:text-white" />
                                    <span className="block text-2xl font-bold dark:text-white">Cập nhật thông tin</span>
                                </div>
                            </div>
                            <div className="block mb-4 text-xl font-medium dark:text-white">THÔNG TIN CƠ BẢN</div>
                            <form onSubmit={handleSubmitAvatar}>
                                <div className="mb-4 w-1/2 m-auto">
                                    <div className="flex flex-col items-center mb-2">
                                        <img alt="Profile" src={image} className="rounded-full w-24 h-24 shadow-lg" />
                                    </div>
                                    <div className="mb-2 mt-4">
                                        <Label htmlFor="avatar-upload" value="Tải ảnh đại diện" />
                                    </div>
                                    <FileInput id="avatar-upload" helperText="PNG, JPG, JPEG, BMP (Tối đa 5MB)." accept=".jpg, .png, .jpeg, .bmp" onChange={handleImageUpload} />
                                    {!isFileValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* {fileMessage}</p>}

                                    <div className="flex justify-center mb-11 mt-4">
                                        <Button type="submit" isProcessing={isLoadingAvatar} color="blue" className="w-28 right-0">
                                            Tải lên
                                        </Button>
                                    </div>
                                </div>
                            </form>

                            <form onSubmit={handleSubmitInfo}>
                                <div className="flex gap-x-9">
                                    <div className="w-1/2">
                                        <div className="mb-6">
                                            <div className="mb-2 block">
                                                <Label htmlFor="lastName" value="Họ" style={{ color: "var(--txt-color)" }} />
                                            </div>
                                            <TextInput id="lastName" placeholder="Nguyễn" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
                                            {!isLastNameValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập họ</p>}
                                        </div>

                                        <Select
                                            selectName="Giới tính"
                                            options={genderList}
                                            selectedValue={gender}
                                            onChangeHandler={(e) => {
                                                setGender(e.target.value);
                                            }}
                                            name="name"
                                            field="id"
                                            className="mt-0 mb-2"
                                        />

                                        <div className="mb-6 mt-5">
                                            <div className="mb-2 block">
                                                <Label htmlFor="email" value="Email" style={{ color: "var(--txt-color)" }} />
                                            </div>
                                            <TextInput id="email" placeholder="thuan@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                            {!isEmailValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập email</p>}
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="mb-2">
                                            <div className="mb-2 block">
                                                <Label htmlFor="firstName" value="Tên" style={{ color: "var(--txt-color)" }} />
                                            </div>
                                            <TextInput id="firstName" placeholder="Văn Thuận" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
                                            {!isFirstNameValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập tên</p>}
                                        </div>

                                        <div className="mb-5 mt-6">
                                            <div className="mb-2 block">
                                                <Label htmlFor="firstName" value="Ngày sinh" style={{ color: "var(--txt-color)" }} />
                                            </div>
                                            <Datepicker
                                                language="vi-VN"
                                                labelTodayButton="Hôm nay"
                                                labelClearButton="Xoá"
                                                id="dateOfBirth"
                                                defaultDate={new Date(dateOfBirth)}
                                                datepicker-format="dd/MM/yyyy"
                                                onSelectedDateChanged={(date) => {
                                                    setDateOfBirth(date);
                                                }}
                                                required
                                            />
                                            {!isDateOfBirthValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Người dùng cần ít nhất 15 tuổi</p>}
                                        </div>

                                        <div className="mb-2 ">
                                            <div className="block mb-2">
                                                <Label htmlFor="phone" value="Số điện thoại" style={{ color: "var(--txt-color)" }} />
                                            </div>
                                            <TextInput id="phone" value={phone} placeholder="0123456789" required onChange={(e) => setPhone(e.target.value)} maxLength={11} />
                                            {!isPhoneValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập số điện thoại</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-between mb-11">
                                    <Button type="submit" isProcessing={isLoadingInfo} color="success" className="w-28 right-0">
                                        Lưu
                                    </Button>
                                </div>
                            </form>

                            <div className="block mb-2 text-xl font-medium dark:text-white">MẬT KHẨU</div>

                            <form onSubmit={handleSubmitPassword}>
                                <div className="w-1/2 mb-4">
                                    <div className="mb-2 block">
                                        <Label htmlFor="password" value="Mật khẩu cũ" style={{ color: "var(--txt-color)" }} />
                                    </div>
                                    <TextInput id="oldPassword" type="password" placeholder="********" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className="mr-9" />
                                    {!isOldPasswordValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập mật khẩu cũ</p>}
                                </div>
                                <div className="flex gap-x-9 mb-4">
                                    <div className="w-1/2">
                                        <div className="mb-2 block">
                                            <Label htmlFor="newPassword" value="Mật khẩu mới" style={{ color: "var(--txt-color)" }} />
                                        </div>
                                        <TextInput id="newPassword" type="password" placeholder="********" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                        {!isNewPasswordValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập mật khẩu mới</p>}
                                    </div>

                                    <div className="w-1/2">
                                        <div className="mb-2 block">
                                            <Label htmlFor="confirmPassword" value="Xác nhận mật khẩu" style={{ color: "var(--txt-color)" }} />
                                        </div>
                                        <TextInput id="confirmPassword" type="password" placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                        {!isConfirmPasswordValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* {confirmPasswordMessage}</p>}
                                    </div>
                                </div>
                                <div className="justify-between mt-5">
                                    <Button type="submit" isProcessing={isLoadingPassword} className="w-28">
                                        Đổi
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="card w-1/3 p-0 h-min">
                        <img alt="ProfileBonnie image" src={profileBackground} className="w-full m-0 image__profile__background" />
                        <div className="card__body">
                            <div className="flex flex-col items-center pb-5">
                                <img alt="Profile" src={user && user.image ? user.image : profileImage} className="mb-3 rounded-full border-solid border-4 border-white w-28 h-28" style={{ marginTop: "-3.5rem" }} />

                                <h5 className="mb-2 text-2xl font-medium dark:text-white">
                                    {user && user.lastName} {user && user.firstName}
                                </h5>
                                <div className="flex gap-x-1">
                                    <Button color="success" pill>
                                        {user && user.role && roleList && roleList[user.role.roleName]}
                                    </Button>
                                </div>
                                <div className="profile-info mt-5">
                                    <div className="flex text-center font-bold">
                                        <span className="block text-base uppercase font-medium dark:text-white">{user && user.organization && user.organization.orgName}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col profile-info">
                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiUser className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">
                                            {user && user.gender === 0 && "Nam"}
                                            {user && user.gender === 1 && "Nữ"}
                                            {user && user.gender === 2 && "Khác"}
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiCake className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">{user && moment(user.dateOfBirth).format("DD/MM/yyyy")}</span>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiAtSymbol className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">{user && user.email}</span>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiPhone className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">{user && user.phone}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <h2 className="page-header">tài liệu đã tải lên</h2>
                            <div className="card__body">
                                <Table totalPages="10" headData={tableHead} renderHead={(item, index) => renderHead(item, index)} bodyData={documentList} renderBody={(item, index) => renderBody(item, index)} />

                                {isFetching && <Spinner aria-label="Default status example" className="flex items-center w-full mb-2 mt-2" style={{ color: "var(--main-color)" }} />}

                                <div className="flex overflow-x-auto sm:justify-center">
                                    <Pagination previousLabel="Trước" nextLabel="Sau" currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup className="z-49">
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <HiDocumentRemove className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Bạn có chắc chắn muốn xoá tài liệu này không?</h3>
                            <div className="flex justify-center gap-4">
                                <Button color="failure" isProcessing={isLoadingDelete} onClick={() => deleteDocument(docId)}>
                                    {"Chắc chắn"}
                                </Button>
                                <Button color="gray" disabled={isLoadingDelete} onClick={() => setOpenModal(false)}>
                                    Huỷ bỏ
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default Profile;
