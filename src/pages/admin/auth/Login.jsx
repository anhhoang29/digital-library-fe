import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import loginAction from "../../../redux/actions/LoginAction";

import axios from "../../../api/axios";

import { Button, Checkbox, Label, Toast } from "flowbite-react";
import { HiOutlineCheck, HiX } from "react-icons/hi";

import { emailRegrex } from "../../../utils/regrex";

import { getProfile } from "../../../api/main/userAPI";
import "./login-form.css";


const LOGIN_URL = "/auth/login";

const AdminLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    // const from = location.state?.from?.pathname || "/admin/documents";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("Đã xảy ra lỗi! Xin vui lòng thử lại!");
    const [emailMessage, setEmailMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [status, setStatus] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [entryMessage, setEntryMessage] = useState("");

    const errRef = useRef();

    useEffect(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        setEntryMessage(sessionStorage.getItem("entryMessage"));

        setTimeout(() => {
            setEntryMessage(null);
            sessionStorage.removeItem("entryMessage");
        }, 4000);
    }, []);

    useEffect(() => {
        setMessage("");
        setEmailMessage("");
        setPasswordMessage("");
    }, [email, password]);

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
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        validateEmail();
        validatePassword();

        if (!emailMessage && !passwordMessage) {
            try {
                const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                });

                setIsLoading(false);

                if (response.data.status === 401) {
                    setMessage("Email hoặc mật khẩu không đúng!");
                    setStatus(-1);
                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                } else if (response.data.status === 403) {
                    setMessage("Tài khoản không có quyền truy cập!");
                    setStatus(-1);
                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                } else if (response.data.status === 400) {
                    setMessage("Có lỗi xảy ra!");
                    setStatus(-1);
                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                } else {
                    setMessage("Đăng nhập thành công!");
                    localStorage.setItem("accessToken", response.data.data.accessToken);
                    localStorage.setItem("refreshToken", response.data.data.refreshToken);

                    const config = {
                        headers: {
                            Authorization: "Bearer " + response.data.data.accessToken,
                        },
                    };

                    const res = await getProfile(config);
                    const user = res.data;

                    if (user.role.roleName === "ROLE_ADMIN") {
                        sessionStorage.setItem("profile", JSON.stringify(user));
                        dispatch(loginAction.setUser(user));

                        setStatus(1);
                        setTimeout(() => {
                            navigate("/admin/home");
                            setStatus(0);
                        }, 2000);
                    } else {
                        setStatus(-1);
                        setMessage("Tài khoản không có quyền truy cập!");
                        setTimeout(() => {
                            navigate("/admin/login");
                            setStatus(0);
                        }, 2000);
                    }
                }
            } catch (error) {
                setStatus(-1);
                setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");
                setTimeout(() => {
                    setStatus(0);
                }, 4000);
            }
        }
    };

    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="flex p-6 sm:p-12 md:w-1/2">
                        <img aria-hidden="true" className="object-cover ml-0 w-full h-full dark:hidden" src={require("../../../assets/images/signin-image.jpg")} alt="GGGG" />
                    </div>

                    <div className="flex p-6 sm:p-12 md:w-1/2">
                        <div className="w-full items-center">
                            {/* <div className="w-full items-center">
                    <img className="w-101 h-101 p-1 mb-5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={require("../../../assets/images/logo.png")} alt="Bordered avatar" />
                </div> */}

                            <div className="w-full ">
                                <h1 className="mb-6 text-3xl font-semibold text-gray-700 dark:text-gray-200">Đăng nhập</h1>
                                <form onSubmit={handleSubmit}>
                                    <label className="block text-sm">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Email</p>
                                        <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                                 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            ref={errRef}
                                            type="text"
                                            required
                                        />

                                        {emailMessage && (
                                            <p className="mt-2 italic">
                                                <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline">* {emailMessage}</div>
                                            </p>
                                        )}
                                    </label>
                                    <label className="block mt-6 text-sm">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400 text-left mb-2">Mật khẩu</p>
                                        <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
                                w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                            type="password"
                                            required
                                        />
                                        {passwordMessage && (
                                            <p className="mt-2 italic">
                                                <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline">* {passwordMessage}</div>
                                            </p>
                                        )}
                                    </label>

                                    <div className="flex items-center gap-2 mt-6">
                                        <Checkbox id="remember" />
                                        <Label htmlFor="remember">Ghi nhớ tôi</Label>
                                    </div>

                                    <Button color="success" type="submit" isProcessing={isLoading} className="w-full mt-6">
                                        Đăng nhập
                                    </Button>
                                </form>

                                <hr className="mt-6 mb-4" />

                                <button
                                    type="button"
                                    className="flex justify-center w-full text-gray-800 bg-white border login-form-border hover:bg-gray-200 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 transition-colors active:bg-gray-600 duration-150 focus:outline-none focus:shadow-outline-gray">
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                        <path
                                            fillRule="evenodd"
                                            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Google
                                </button>

                                <p className="mt-4 text-right">
                                    <Link className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline" to="/admin/forgot-password">
                                        Quên mật khẩu?
                                    </Link>
                                </p>
                                {status === -1 && (
                                    <Toast className="top-5 right-5 fixed">
                                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                                            <HiX className="h-5 w-5" />
                                        </div>
                                        <div className="ml-3 text-sm font-normal">{message}</div>
                                        <Toast.Toggle />
                                    </Toast>
                                )}
                                {status === 1 && (
                                    <Toast className="top-5 right-5 fixed">
                                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                                            <HiOutlineCheck className="h-5 w-5" />
                                        </div>
                                        <div className="ml-3 text-sm font-normal">{message}</div>
                                        <Toast.Toggle />
                                    </Toast>
                                )}
                                {entryMessage !== "" && entryMessage !== null && (
                                    <Toast className="top-5 right-5 fixed">
                                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                                            <HiX className="h-5 w-5" />
                                        </div>
                                        <div className="ml-3 text-sm font-normal">{entryMessage}</div>
                                        <Toast.Toggle />
                                    </Toast>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
