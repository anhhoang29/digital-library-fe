import React, { useState } from "react";

import { Button, Datepicker, FileInput, Label, TextInput } from "flowbite-react";
import { HiAdjustments, HiAtSymbol, HiCake, HiPhone, HiUser } from "react-icons/hi";

import Select from "../../components/admin/select/Select";

import profileBackground from "../../assets/images/default_background.jpg";
import profileImage from "../../assets/images/default_profile.jpg";

const Profile = () => {
    const genderList = [
        { id: 0, name: "Nam" },
        { id: 1, name: "Nữ" },
        { id: 2, name: "Khác" },
    ];

    const [openModal, setOpenModal] = useState(false);
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [gender, setGender] = useState(0);
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [image, setImage] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(0);

    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isDateOfBirthValid, setIsDateOfBirthValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
    const [isFileValid, setIsFileValid] = useState(true);
    const [fileMessage, setFileMessage] = useState("");
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
    const [mainMessage, setMainMessage] = useState("Đã xảy ra lỗi!");

    const [user, setUser] = useState(null);

    const handleImageUpload = (e) => {
        setImageFile(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div>
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
                            <form onSubmit={""}>
                                <div className="mb-4 w-1/2 m-auto">
                                    <div className="flex flex-col items-center mb-2">
                                        <img alt="Profile" src={profileImage} className="rounded-full w-24 h-24 shadow-lg" />
                                    </div>
                                    <div>
                                        <Label htmlFor="avatar-upload" value="Tải ảnh đại diện" />
                                    </div>
                                    <FileInput id="avatar-upload" helperText="PNG, JPG, JPEG, BMP (Tối đa 5MB)." accept=".jpg, .png, .jpeg, .bmp" onChange={handleImageUpload} />
                                    {!isFileValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* {fileMessage}</p>}
                                </div>

                                <div className="flex gap-x-9">
                                    <div className="w-1/2">
                                        <div className="mb-4">
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
                                            className="mt-0"
                                        />

                                        <div className="mb-4">
                                            <div className="mb-2 block">
                                                <Label htmlFor="email" value="Email" style={{ color: "var(--txt-color)" }} />
                                            </div>
                                            <TextInput id="email" placeholder="thuan@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                            {!isEmailValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập email</p>}
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="firstName" value="Tên" style={{ color: "var(--txt-color)" }} />
                                            </div>
                                            <TextInput id="firstName" placeholder="Văn Thuận" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
                                            {!isFirstNameValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập tên</p>}
                                        </div>

                                        <div className="mb-3 mt-3">
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

                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="phone" value="Số điện thoại" style={{ color: "var(--txt-color)" }} />
                                            </div>
                                            <TextInput id="phone" value={phone} placeholder="0123456789" required onChange={(e) => setPhone(e.target.value)} maxLength={11} />
                                            {!isPhoneValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập số điện thoại</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-between mb-11">
                                    <Button type="submit" isProcessing={isLoading} color="success" className="w-28 right-0">
                                        Lưu
                                    </Button>
                                </div>
                            </form>

                            <div className="block mb-2 text-xl font-medium dark:text-white">MẬT KHẨU</div>

                            <form onSubmit={""}>
                                <div className="flex gap-x-9 mb-2">
                                    <div className="w-1/2">
                                        <div className="mb-2 block">
                                            <Label htmlFor="password" value="Mật khẩu" style={{ color: "var(--txt-color)" }} />
                                        </div>
                                        <TextInput id="password" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        {!isPasswordValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập mật khẩu</p>}
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
                                    <Button type="submit" isProcessing={isLoading} className="w-28">
                                        Đổi
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="card w-1/3 p-0">
                        <img alt="ProfileBonnie image" src={profileBackground} className="w-full m-0 image__profile__background" />
                        <div className="card__body">
                            <div className="flex flex-col items-center pb-5">
                                <img alt="ProfileBonnie image" src={profileImage} className="mb-3 rounded-full border-solid border-4 border-white w-28 h-28" style={{ marginTop: "-3.5rem" }} />
                                {/* {user && user.image ? user.image : profileImage} */}

                                <h5 className="mb-2 text-2xl font-medium dark:text-white">{/* {user && user.lastName} {user && user.firstName} */}</h5>
                                <div className="flex gap-x-1">
                                    <Button color="success" pill>
                                        {/* {user && user.role && roleMappings && roleMappings[user.role.roleName]} */}
                                    </Button>
                                    <Button pill>
                                        {/* color={user && user.deleted ? "success" : "failure"} */}
                                        {/* {user && !user.deleted ? "Đang hoạt động" : "Đã xoá"} */}
                                    </Button>
                                </div>
                                <div className="mt-5  profile-info">
                                    <div className="flex text-center font-bold">
                                        <span className="block text-base uppercase font-medium dark:text-white"></span>
                                        {/* {user && user.organization && user.organization.orgName} */}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col profile-info">
                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiUser className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">
                                            {/* {user && user.gender === 0 && "Nam"}
                                        {user && user.gender === 1 && "Nữ"}
                                        {user && user.gender === 2 && "Khác"} */}
                                        </span>
                                    </div>
                                    <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white"></div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiCake className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white"></span>
                                        {/* {user && moment(user.dateOfBirth).format("DD/MM/yyyy")} */}
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiAtSymbol className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white"></span>
                                        {/* {user && user.email} */}
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiPhone className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white"></span>
                                        {/* {user && user.phone} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
