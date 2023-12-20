import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Navbar, Toast } from "flowbite-react";
import { HiOutlineCheck, HiX } from "react-icons/hi";

import { emailRegrex } from "../../../utils/regrex";

import { signup } from "../../../api/main/authAPI";
import { getAccessibleOrganizations } from "../../../api/main/organizationAPI";
import onlineLibrary from "../../../assets/images/online_library_2.webp";
import Select from "../../../components/management/select/Select";
import "./login-form.css";
import SimpleNavbar from "../../../components/student/navbar/SimpleNavbar";
import CustomFooter from "../../../components/student/footer/Footer";

const StudentRegister = () => {
    const navigate = useNavigate();

    const [organizationList, setOrganizationList] = useState([]);
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [organizationId, setOrganizationId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("Đã xảy ra lỗi! Xin vui lòng thử lại!");
    const [lastNameMessage, setLastNameMessage] = useState("");
    const [firstNameMessage, setFirstNameMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [organizationMessage, setOrganizationMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
    const [status, setStatus] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        getOrganizationList();
    }, []);

    // useEffect(() => {
    //     setMessage("");
    //     setEmailMessage("");
    //     setPasswordMessage("");
    // }, [email, password]);

    const getOrganizationList = async () => {
        try {
            const response = await getAccessibleOrganizations({
                params: {
                    page: 0,
                    size: 100,
                },
            });
            if (response.status === 200) {
                setOrganizationList(response.data);
            } else {
                // navigate("/admin/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const validateLastname = () => {
        if (lastName === "" || lastName.trim() === "") {
            setLastNameMessage("Họ không được để trống");
        }
    };

    const validateFirstname = () => {
        if (firstName === "" || firstName.trim() === "") {
            setFirstNameMessage("Tên không được để trống");
        }
    };

    const validateOrganization = () => {
        if (organizationId === "") {
            setOrganizationMessage("Vui lòng chọn trường");
        }
    };

    const validateEmail = () => {
        if (email === "" || email.trim() === "") {
            setEmailMessage("Email không được để trống");
        } else if (!emailRegrex.test(email)) {
            setEmailMessage("Email không hợp lệ");
        }
    };

    const validatePassword = () => {
        if (password === "" || password.trim() === "") {
            setPasswordMessage("Mật khẩu không được để trống");
        } else if (password.length < 8) {
            setPasswordMessage("Mật khẩu phải có ít nhất 8 ký tự");
        }
    };

    const validateConfirmPassword = () => {
        if (password !== confirmPassword) {
            setConfirmPasswordMessage("Mật khẩu không khớp");
        }
    };

    const validateInput = () => {
        validateLastname();
        validateFirstname();
        validateOrganization();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        if (!lastNameMessage && !firstNameMessage && !organizationMessage && !emailMessage && !passwordMessage && !confirmPasswordMessage) {
            return true;
        }
        return false;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateInput()) {
            try {
                setIsLoading(true);

                const response = await signup({
                    lastName: lastName,
                    firstName: firstName,
                    email: email,
                    orgId: organizationId,
                    password: password,
                    confirmPassword: confirmPassword,
                });

                setIsLoading(false);

                if (response.status === 200) {
                    setMessage("Đăng ký tài khoản thành công! Vui lòng đăng nhập!");
                    setStatus(1);
                    setTimeout(() => {
                        setStatus(0);
                        navigate("/login");
                    }, 4000);
                } else {
                    if (response.message === "Email already registered") setMessage("Email đã được đăng ký trước đó!");
                    else if (response.message === "Password not matched") setMessage("Mật khẩu không khớp!");
                    else setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");

                    setStatus(-1);
                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                }
            } catch (error) {
                navigate("/error-500");
            }
        }
    };

    return (
        <>
            <div className="sticky top-0 bg-white w-full z-20 border-b">
                <SimpleNavbar />
            </div>

            <div className="grid place-items-center min-h-screen bg-gray-50 dark:bg-gray-900 pb-10">
                <div className="flex flex-col overflow-y-auto md:flex-row w-2/3 bg-red bg-white shadow-lg rounded-lg mt-5">
                    <div className="w-1/2 grid place-items-center">
                        <img aria-hidden="true" className="object-cover w-3/4" src={onlineLibrary} alt="GGGG" />
                    </div>

                    <div className="w-1/2">
                        {/* <div>
                            <img aria-hidden="true" className="object-cover ml-0 w-full h-full dark:hidden" src={logo} alt="GGGG" />
                        </div> */}

                        <div className="w-full items-center p-5">
                            <div className="w-full border-green-500 border-2 p-5 rounded-lg shadow-lg ">
                                <h1 className="mb-6 text-3xl font-semibold text-gray-700 dark:text-gray-200 z-50">Đăng ký</h1>
                                <form onSubmit={handleSubmit}>
                                    <label className="block text-sm">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Họ</p>
                                        <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                                 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={(e) => {
                                                setLastName(e.target.value);
                                                setLastNameMessage("");
                                            }}
                                            value={lastName}
                                            type="text"
                                        />

                                        {lastNameMessage && (
                                            <p className="mt-2 italic">
                                                <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline">* {lastNameMessage}</div>
                                            </p>
                                        )}
                                    </label>

                                    <label className="block text-sm mt-6">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Tên</p>
                                        <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                                 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={(e) => {
                                                setFirstName(e.target.value);
                                                setFirstNameMessage("");
                                            }}
                                            value={firstName}
                                            type="text"
                                        />

                                        {firstNameMessage && (
                                            <p className="mt-2 italic">
                                                <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline">* {firstNameMessage}</div>
                                            </p>
                                        )}
                                    </label>

                                    <label className="block text-sm mt-6">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Email</p>
                                        <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                                 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                setEmailMessage("");
                                            }}
                                            value={email}
                                            type="text"
                                        />

                                        {emailMessage && (
                                            <p className="mt-2 italic">
                                                <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline">* {emailMessage}</div>
                                            </p>
                                        )}
                                    </label>

                                    <div className="mb-6 mt-6">
                                        <Select
                                            selectName="Trường học"
                                            options={organizationList}
                                            selectedValue={organizationId}
                                            onChangeHandler={(e) => {
                                                setOrganizationId(e.target.value);
                                                setOrganizationMessage("");
                                            }}
                                            name="orgName"
                                            field="orgId"
                                            required
                                        />
                                        {organizationMessage && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng chọn trường học</p>}
                                    </div>

                                    <label className="block mt-6 text-sm">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400 text-left mb-2">Mật khẩu</p>
                                        <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
                                w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                setPasswordMessage("");
                                            }}
                                            value={password}
                                            type="password"
                                        />
                                        {passwordMessage && (
                                            <p className="mt-2 italic">
                                                <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline">* {passwordMessage}</div>
                                            </p>
                                        )}
                                    </label>

                                    <label className="block mt-6 text-sm">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400 text-left mb-2">Mật khẩu xác nhận</p>
                                        <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
                                w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={(e) => {
                                                setConfirmPassword(e.target.value);
                                                setConfirmPasswordMessage("");
                                            }}
                                            value={confirmPassword}
                                            type="password"
                                            required
                                        />
                                        {confirmPasswordMessage && (
                                            <p className="mt-2 italic">
                                                <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline">* {confirmPasswordMessage}</div>
                                            </p>
                                        )}
                                    </label>

                                    <Button type="submit" isProcessing={isLoading} className="bg-green-400 enabled:hover:bg-green-500 focus:ring-green-300 w-full mt-6">
                                        Đăng ký
                                    </Button>
                                </form>
                                <hr className="mt-6 mb-4" />
                                <button
                                    type="button"
                                    className="flex justify-center w-full text-gray-800 bg-white border login-form-border hover:bg-gray-200 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 transition-colors active:bg-gray-300 duration-150 focus:outline-none focus:shadow-outline-gray">
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                        <path
                                            fillRule="evenodd"
                                            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Google
                                </button>

                                <p className="mt-4">
                                    <Link className="text-sm font-medium text-green-400 dark:text-purple-400 hover:underline" to="/login">
                                        Đã có tài khoản? Đăng nhập ngay
                                    </Link>
                                </p>

                                {status === -1 && (
                                    <Toast className="top-5 right-5 fixed z-50">
                                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                                            <HiX className="h-5 w-5" />
                                        </div>
                                        <div className="ml-3 text-sm font-normal">{message}</div>
                                        <Toast.Toggle />
                                    </Toast>
                                )}
                                {status === 1 && (
                                    <Toast className="top-5 right-5 fixed z-50">
                                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                                            <HiOutlineCheck className="h-5 w-5" />
                                        </div>
                                        <div className="ml-3 text-sm font-normal">{message}</div>
                                        <Toast.Toggle />
                                    </Toast>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <CustomFooter />
            </div>
        </>
    );
};

export default StudentRegister;
