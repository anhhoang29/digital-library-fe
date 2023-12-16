import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { Button, Toast } from "flowbite-react";
import { HiOutlineCheck, HiX } from "react-icons/hi";

import { emailRegrex } from "../../../utils/regrex";

import { resetPassword } from "../../../api/main/userAPI";
import { sendEmail, verify } from "../../../api/main/authAPI";
import "./login-form.css";

const AdminForgotPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [verificationCode, setVerificationCode] = useState();

    const [message, setMessage] = useState("Đã xảy ra lỗi! Xin vui lòng thử lại!");
    const [emailMessage, setEmailMessage] = useState("");
    const [newPasswordMessage, setNewPasswordMessage] = useState("");
    const [confirmationPasswordMessage, setConfirmationPasswordMessage] = useState("");
    const [verificationCodeMessage, setVerificationCodeMessage] = useState("");
    const [status, setStatus] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        setMessage("");
        setEmailMessage("");
        setNewPasswordMessage("");
        setConfirmationPasswordMessage("");
        setVerificationCodeMessage("");
    }, [email, newPassword, confirmationPassword, verificationCode]);

    const validateEmail = () => {
        if (email === "" || email.trim() === "") {
            setEmailMessage("Email không được để trống");
        } else if (!emailRegrex.test(email)) {
            setEmailMessage("Email không hợp lệ");
        }
    };

    const validateVerificationCode = () => {
        if (!verificationCode) {
            setEmailMessage("Email không được để trống");
        } else if (!emailRegrex.test(email)) {
            setEmailMessage("Email không hợp lệ");
        }
    };

    const validateNewPassword = () => {
        if (newPassword === "" || newPassword.trim() === "") {
            setNewPasswordMessage("Mật khẩu mới không được để trống");
        } else if (newPassword.length < 8) {
            setNewPasswordMessage("Mật khẩu mới phải có ít nhất 8 ký tự");
        }
    };

    const validateConfirmationPassword = () => {
        if (newPassword !== confirmationPassword) {
            setConfirmationPasswordMessage("Mật khẩu không khớp nhau");
        }
    };

    const handleEmailSubmit = async (e) => {
        e.preventDefault();

        validateEmail();

        setIsVerified(false);

        if (!emailMessage) {
            try {
                const response = await sendEmail({
                    params: {
                        email: email,
                    },
                });
                if (response.status === 200) {
                    setStatus(1);
                    setMessage("Đã gửi mã xác thực đến email của bạn");
                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                } else {
                    setEmailMessage("Email không tồn tại");
                    setStatus(-1);
                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
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

    const handleCodeSubmit = async (e) => {
        e.preventDefault();

        validateVerificationCode();

        setIsVerified(false);

        if (!verificationCodeMessage) {
            try {
                const response = await verify({
                    params: {
                        email: email,
                        code: verificationCode,
                    },
                });
                if (response.status === 200) {
                    setStatus(1);
                    setIsVerified(true);
                    setMessage("Xác thực thành công, vui lòng nhập mật khẩu mới");
                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                } else {
                    if (response.message === "User not found") setMessage("Email không tồn tại");
                    else if (response.message === "Verification code is expired") setMessage("Mã xác thực đã hết hạn");
                    else if (response.message === "Wrong verification code") setMessage("Mã xác thực không hợp lệ");
                    else setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");
                    setStatus(-1);
                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
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

    const handleResetSubmit = async (e) => {
        e.preventDefault();

        validateNewPassword();
        validateConfirmationPassword();

        if (!newPasswordMessage && !confirmationPasswordMessage) {
            setIsLoading(true);

            try {
                const data = {
                    email: email,
                    newPassword: newPassword,
                    confirmPassword: confirmationPassword,
                };

                const response = await resetPassword(data);

                setIsLoading(false);

                if (response.status === 200) {
                    setStatus(1);
                    setMessage("Khôi phục mật khẩu thành công! Vui lòng đăng nhập lại!");

                    await new Promise((e) => setTimeout(e, 4000));
                    setStatus(0);
                    navigate("/admin/login");
                } else {
                    if (response.message === "Passwords not matched") setConfirmationPasswordMessage("Mật khẩu mới không khớp!");
                    else {
                        if (response.message === "User not found") setMessage("Người dùng không tồn tại!");
                        else setMessage("Đã xảy ra lỗi! Xin vui lòng thử lại!");

                        setStatus(-1);
                        setTimeout(() => {
                            setStatus(0);
                        }, 4000);
                    }
                }
            } catch (error) {
                setIsLoading(false);
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
                        <div className="w-full items-center">
                            <div className="w-full ">
                                <h1 className="mb-14 text-3xl font-semibold text-gray-700 dark:text-gray-200">Khôi phục mật khẩu</h1>

                                <label className="block text-sm">
                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Vui lòng nhập email tài khoản</p>
                                    <form onSubmit={handleEmailSubmit}>
                                        <div className="flex flex-wrap gap-3">
                                            <input
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                                 flex-1 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                type="email"
                                                required
                                            />
                                            <Button type="submit">Lấy mã</Button>
                                        </div>
                                    </form>
                                    {emailMessage && (
                                        <p className="mt-2 italic">
                                            <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline">* {emailMessage}</div>
                                        </p>
                                    )}
                                </label>

                                <hr className="mt-6 mb-4" />

                                <label className="block text-sm">
                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Vui lòng nhập mã xác thực</p>
                                    <form onSubmit={handleCodeSubmit}>
                                        <div className="flex flex-wrap gap-3">
                                            <input
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                                 flex-1 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                onChange={(e) => setVerificationCode(e.target.value)}
                                                value={verificationCode}
                                                type="text"
                                                length={6}
                                                required
                                            />
                                            <Button type="submit" color="success">
                                                Xác thực
                                            </Button>
                                        </div>
                                    </form>

                                    {verificationCodeMessage && (
                                        <p className="mt-2 italic">
                                            <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline">* {verificationCodeMessage}</div>
                                        </p>
                                    )}
                                </label>

                                <div hidden={!isVerified}>
                                    <hr className="mt-6 mb-4" />
                                    <form onSubmit={handleResetSubmit}>
                                        <label className="block text-sm">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Mật khẩu mới</p>
                                            <input
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                                 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                value={newPassword}
                                                minLength={8}
                                                type="password"
                                                placeholder="********"
                                                required
                                            />

                                            {newPasswordMessage && (
                                                <p className="mt-2 italic">
                                                    <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline">* {newPasswordMessage}</div>
                                                </p>
                                            )}
                                        </label>

                                        <label className="block mt-6 text-sm">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400 text-left mb-2">Xác nhận mật khẩu</p>
                                            <input
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
                                w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                onChange={(e) => setConfirmationPassword(e.target.value)}
                                                value={confirmationPassword}
                                                minLength={8}
                                                type="password"
                                                placeholder="********"
                                                required
                                            />
                                            {confirmationPasswordMessage && (
                                                <p className="mt-2 italic">
                                                    <div className="text-sm font-medium text-red-600 dark:text-purple-400 hover:underline">* {confirmationPasswordMessage}</div>
                                                </p>
                                            )}
                                        </label>

                                        <Button color="success" type="submit" isProcessing={isLoading} className="w-full mt-6">
                                            Khôi phục mật khẩu
                                        </Button>
                                    </form>
                                </div>

                                <hr className="mt-6 mb-4" />

                                <p className="mt-4 text-right">
                                    <Link className="text-sm font-medium text-blue-600 dark:text-purple-400 hover:underline" to="/admin/login">
                                        Đăng nhập
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
                            </div>
                        </div>
                    </div>

                    <div className="flex p-6 sm:p-12 md:w-1/2">
                        <img aria-hidden="true" className="object-cover ml-0 w-full h-full dark:hidden" src={require("../../../assets/images/forgotpassword-image.jpg")} alt="GGGG" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminForgotPassword;
