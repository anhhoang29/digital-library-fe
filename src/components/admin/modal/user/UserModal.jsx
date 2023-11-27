import { Button, Datepicker, FileInput, Label, Modal, TextInput, Toast } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiExclamation, HiOutlineCloudUpload } from "react-icons/hi";

import Select from "../../select/Select";

import { getAccessibleOrganizations } from "../../../../api/admin/organizationAPI";
import { createUser, getAUser, updateUser } from "../../../../api/admin/userAPI";
import usePrivateAxios from "../../../../api/usePrivateAxios";

import profileImage from "../../../../assets/images/default_profile.jpg";

const UserModal = (props) => {
    usePrivateAxios();

    const { userId, openUserModal, isCreatingNew, triggerModal, refreshUserList } = props;

    const genderList = [
        { id: 0, name: "Nam" },
        { id: 1, name: "Nữ" },
        { id: 2, name: "Khác" },
    ];
    const roleList = [
        { id: "c0a801b9-8ac0-1a60-818a-c04a8fb50038", roleName: "Admin" },
        { id: "c0a801b9-8ac0-1a60-818a-c04a8fa60037", roleName: "Quản lý" },
        { id: "c0a801b9-8ac0-1a60-818a-c04a8f9f0036", roleName: "Giảng viên" },
        { id: "c0a801b9-8ac0-1a60-818a-c04a8f950035", roleName: "Sinh viên" },
    ];

    const [openModal, setOpenModal] = useState(openUserModal);
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [gender, setGender] = useState(0);
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orgId, setOrgId] = useState("");
    const [roleId, setRoleId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [image, setImage] = useState(null);
    const [organizationList, setOrganizationList] = useState([{}]);

    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(0);

    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isDateOfBirthValid, setIsDateOfBirthValid] = useState(true);
    const [isOrganizationValid, setIsOrganizationValid] = useState(true);
    const [isRoleValid, setIsRoleValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
    const [isFileValid, setIsFileValid] = useState(true);
    const [fileMessage, setFileMessage] = useState("");
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
    const [mainMessage, setMainMessage] = useState("Đã xảy ra lỗi!");

    useEffect(() => {
        if (triggerModal !== 0) {
            setOpenModal(true);
            if (!isCreatingNew) {
                getUserByUserId();
            } else {
                setImage(profileImage);
            }
            getOrganizationList();
        }
    }, [triggerModal]);

    const onCloseModal = () => {
        setOpenModal(false);
        setLastName("");
        setFirstName("");
        setImage(profileImage);
        setGender(0);
        //setDateOfBirth(new Date());
        setEmail("");
        setPhone("");
        setOrgId("");
        setRoleId("");
        setPassword("");
        setConfirmPassword("");
        setFileMessage("");
    };

    const getUserByUserId = async () => {
        try {
            const response = await getAUser(userId);

            if (response.status === 200) {
                const user = response.data;
                setLastName(user.lastName);
                setFirstName(user.firstName);
                user.image ? setImage(user.image) : setImage(profileImage);
                setGender(user.gender);
                setDateOfBirth(user.dateOfBirth);
                setEmail(user.email);
                setPhone(user.phone);
                user.organization ? setOrgId(user.organization.orgId) : setOrgId("");
                user.role ? setRoleId(user.role.id) : setRoleId("");
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getOrganizationList = async () => {
        try {
            const response = await getAccessibleOrganizations();

            if (response.status === 200) {
                setOrganizationList(response.data);
                URL.createObjectURL();
            } else {
            }
        } catch (error) {
            console.log(error);
        }
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

    const validateOraganization = () => {
        if (orgId === "" || orgId.trim() === "") setIsOrganizationValid(false);
        else setIsOrganizationValid(true);
    };

    const validateRole = () => {
        if (roleId === "" || roleId.trim() === "") setIsRoleValid(false);
        else setIsRoleValid(true);
    };

    const validatePassword = () => {
        if (isCreatingNew)
            if (password === "" || password.trim() === "") setIsPasswordValid(false);
            else setIsPasswordValid(true);
    };

    const validateConfirmPassword = () => {
        if (isCreatingNew) {
            if (confirmPassword === "" || confirmPassword.trim() === "") {
                setIsConfirmPasswordValid(false);
                setConfirmPasswordMessage("Vui lòng mật khẩu.");
            } else if (confirmPassword !== password) {
                setIsConfirmPasswordValid(false);
                setConfirmPasswordMessage("Mật khẩu không khớp.");
            } else setIsConfirmPasswordValid(true);
        } else setIsConfirmPasswordValid(true);
    };

    const validateFile = () => {
        if (imageFile === null && isCreatingNew) {
            setFileMessage("Vui lòng chọn ảnh đại diện");
            return false;
        } else if (imageFile !== null && (imageFile.size > 5 * 1024 * 1024 || imageFile.size === 0)) {
            setFileMessage("Vui lòng chọn ảnh hợp lệ và nhỏ hơn 5MB");
            return false;
        } else if (imageFile !== null && imageFile.type !== "image/jpeg" && imageFile.type !== "image/png" && imageFile.type !== "image/jpg" && imageFile.type !== "image/bmp") {
            setFileMessage("Vui lòng chỉ chọn tệp ảnh JPG, JPEG, PNG, BMP");
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
        validateOraganization();
        validateRole();
        validatePassword();
        validateConfirmPassword();
        setIsFileValid(validateFile());

        if (!isLastNameValid || !isFirstNameValid || !isEmailValid || !isPhoneValid || !isDateOfBirthValid || !isOrganizationValid || !isRoleValid || !isPasswordValid || !isConfirmPasswordValid || !validateFile()) {
            return false;
        } else return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateInput()) {
            setIsLoading(true);

            try {
                const user = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    gender: gender,
                    dateOfBirth: dateOfBirth,
                    orgId: orgId,
                    roleId: roleId,
                    password: password,
                    confirmPassword: confirmPassword,
                };

                const formData = new FormData();
                formData.append("user", JSON.stringify(user));
                if (imageFile) formData.append("file", imageFile);

                const config = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                };

                let response = null;
                if (isCreatingNew) response = await createUser(formData, config);
                else response = await updateUser(userId, formData, config);

                setIsLoading(false);

                if (response.status === 200) {
                    setStatus(1);

                    setTimeout(() => {
                        setOpenModal(false);
                        setStatus(0);
                    }, 2000);

                    refreshUserList();
                } else {
                    setStatus(-1);

                    if (response.message === "Email already registered") setMainMessage("Email đã tồn tại!");
                    else if (response.message === "User not found") setMainMessage("Người dùng không tồn tại!");
                    else if (response.message === "Passwords not match") setMainMessage("Mật khẩu không trùng nhau!");
                    else setMainMessage("Đã xảy ra lỗi!");

                    setTimeout(() => {
                        setStatus(0);
                    }, 2000);
                }
            } catch (error) {
                setStatus(-1);
                setTimeout(() => {
                    setStatus(0);
                }, 2000);
            }
        }
    };

    return (
        <>
            {status === -1 && (
                <Toast className="top-1/4 right-5 w-100 fixed">
                    <HiExclamation className="h-5 w-5 text-amber-400 dark:text-amber-300" />
                    <div className="pl-4 text-sm font-normal">{mainMessage}</div>
                </Toast>
            )}

            {status === 1 && (
                <Toast className="top-1/4 right-5 fixed w-100">
                    <HiOutlineCloudUpload className="h-5 w-5 text-green-600 dark:text-green-500" />
                    <div className="pl-4 text-sm font-normal">
                        {!isCreatingNew && "Cập nhật người dùng"} {isCreatingNew && "Tạo người dùng"} thành công!
                    </div>
                </Toast>
            )}

            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
                            {isCreatingNew && "Thêm người dùng mới"}
                            {!isCreatingNew && "Cập nhật người dùng"}
                        </h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <div className="flex flex-col items-center mb-5">
                                    <img alt="Profile" src={image} className="rounded-full w-24 h-24" />
                                </div>
                                <div>
                                    <Label htmlFor="avatar-upload" value="Tải ảnh đại diện" />
                                </div>
                                <FileInput id="avatar-upload" helperText="PNG, JPG, JPEG, BMP (Tối đa 5MB)." accept=".jpg, .png, .jpeg, .bmp" onChange={handleImageUpload} />
                                {!isFileValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* {fileMessage}</p>}
                            </div>

                            <div className="mb-4">
                                <div className="mb-2 block">
                                    <Label htmlFor="lastName" value="Họ" />
                                </div>
                                <TextInput id="lastName" placeholder="Nguyễn" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
                                {!isLastNameValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập họ</p>}
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="firstName" value="Tên" />
                                </div>
                                <TextInput id="firstName" placeholder="Văn Thuận" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
                                {!isFirstNameValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập tên</p>}
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
                            />

                            <div className="mb-4">
                                <div className="mb-2 block">
                                    <Label htmlFor="firstName" value="Ngày sinh" />
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

                            <div className="mb-4">
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Email" />
                                </div>
                                <TextInput id="email" placeholder="thuan@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                {!isEmailValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập email</p>}
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="phone" value="Số điện thoại" />
                                </div>
                                <TextInput id="phone" value={phone} placeholder="0123456789" required onChange={(e) => setPhone(e.target.value)} maxLength={11} />
                                {!isPhoneValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập số điện thoại</p>}
                            </div>

                            <Select
                                selectName="Trường học"
                                options={organizationList}
                                selectedValue={orgId}
                                onChangeHandler={(e) => {
                                    setOrgId(e.target.value);
                                }}
                                name="orgName"
                                field="orgId"
                            />
                            {!isOrganizationValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng chọn trường</p>}

                            <Select
                                selectName="Vai trò"
                                options={roleList}
                                selectedValue={roleId}
                                onChangeHandler={(e) => {
                                    setRoleId(e.target.value);
                                }}
                                name="roleName"
                                field="id"
                                required
                                className="mb-4"
                            />
                            {!isRoleValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng chọn vai trò</p>}

                            <div className="mb-4">
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Mật khẩu" />
                                </div>
                                <TextInput id="password" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                                {!isPasswordValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập mật khẩu</p>}
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="confirmPassword" value="Xác nhận mật khẩu" />
                                </div>
                                <TextInput id="confirmPassword" type="password" placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                {!isConfirmPasswordValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* {confirmPasswordMessage}</p>}
                            </div>

                            <div className="flex justify-between mt-5">
                                <Button type="submit" isProcessing={isLoading} color="success" className="w-28">
                                    Lưu
                                </Button>

                                <Button
                                    onClick={() => {
                                        setOpenModal(false);
                                    }}
                                    disabled={isLoading}
                                    color="failure"
                                    className="w-28">
                                    Huỷ bỏ
                                </Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default UserModal;
