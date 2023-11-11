import React, { useRef } from "react";
import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import axios from "../../../api/axios";

import { Toast } from "flowbite-react";
import { HiX } from "react-icons/hi";

import { emailRegrex } from "../../../utils/regrex";

import "./login-form.css";

const LOGIN_URL = "/auth/login";

const LoginForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/admin";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");

    const errRef = useRef();

    useEffect(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
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

        validateEmail();
        validatePassword();

        if (!emailMessage && !passwordMessage) {
            try {
                const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                });

                if (response.data.status === 401) {
                    setMessage("Email hoặc mật khẩu không đúng");
                } else if (response.data.status === 403) {
                    setMessage("Tài khoản không có quyền truy cập");
                } else if (response.data.status === 400) {
                    setMessage("Có lỗi xảy ra");
                } else {
                    localStorage.setItem("accessToken", response.data.data.accessToken);
                    localStorage.setItem("refreshToken", response.data.data.refreshToken);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
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
                                placeholder="Nguyễn Văn Thuận"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                ref={errRef}
                                type="text"
                            />

                            {emailMessage && (
                                <p className="mt-2 italic">
                                    <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline" href="./forgot-password.html">
                                        * {emailMessage}
                                    </div>
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
                                placeholder="***************"
                                type="password"
                            />
                            {passwordMessage && (
                                <p className="mt-2 italic">
                                    <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline" href="./forgot-password.html">
                                        * {passwordMessage}
                                    </div>
                                </p>
                            )}
                        </label>

                        {/* You should use a button here, as the anchor is only used for the example */}
                        <button
                            type="submit"
                            className="block w-full px-4 py-2 mt-6 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-800 focus:outline-none focus:shadow-outline-green">
                            Đăng nhập
                        </button>
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
                        <a className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline" href="./forgot-password.html">
                            Quên mật khẩu?
                        </a>
                    </p>
                    {message && (
                        <Toast className="top-5 right-5 fixed">
                            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                                <HiX className="h-5 w-5" />
                            </div>
                            <div className="ml-3 text-sm font-normal">{message}</div>
                            <Toast.Toggle />
                        </Toast>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
