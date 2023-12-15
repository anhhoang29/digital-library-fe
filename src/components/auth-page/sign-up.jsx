import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Toast } from "flowbite-react";
import { HiX } from "react-icons/hi";
import authAction from "../../redux/actions/authAction";
import { emailRegrex } from "../../utils/regrex";
import { register } from "../../api/main/authAPI";
import logo from '../assets/images/logo.png';
import { HiCheck } from "react-icons/hi";
import qs from "qs";

function SignUp() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [firstNameMessage, setFirstNameMessage] = useState("");
    const [lastNameMessage, setLastNameMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(0);
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        setMessage("");
        setEmailMessage("");
        setFirstNameMessage("");
        setLastNameMessage("");
        setPasswordMessage("");
        setConfirmPasswordMessage("");
    }, [email, firstName, lastName, password, confirmPassword]);

    const navigate = useNavigate();

    useNavigate((location) => {
        if (location.state && location.state.from) {
            return location.state.from;
        }
        return "/";
    });
    const validateEmail = () => {
        if (email === "" || email.trim() === "") {
            setEmailMessage("Email không được để trống");
        } else if (!emailRegrex.test(email)) {
            setEmailMessage("Email không hợp lệ");
        }
    };
    const validateFirstName = () => {
        if (firstName === "" || firstName.trim() === "") {
            setFirstNameMessage("Tên không được để trống");
        }
    };
    const validateLastName = () => {
        if (lastName === "" || lastName.trim() === "") {
            setLastNameMessage("Họ không được để trống");
        }
    };
    const validatePassword = () => {
        if (password === "" || password.trim() === "") {
            setPasswordMessage("Mật khẩu không được để trống");
        }
    };
    const validateConfirmPassword = () => {
        if (confirmPassword === "" || confirmPassword.trim() === "") {
            setConfirmPasswordMessage("Mật khẩu không được để trống");
        } else if (confirmPassword !== password) {
            setConfirmPasswordMessage("Mật khẩu không khớp");
        }
    }
    const handleSignUp = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        validateEmail();
        validateFirstName();
        validateLastName();
        validatePassword();
        validateConfirmPassword();

        if (email && firstName && lastName && password && confirmPassword) {
            try {
                const response = await register((JSON.stringify({
                    firstName,
                    lastName,
                    password,
                    email,
                    orgId: "",
                    roleId: "c0a801b9-8ac0-1a60-818a-c04a8f950035"
                })),
                    ({
                        headers: { "Content-Type": "application/json" },
                        withCredentials: true,
                    }));
                setIsLoading(false);
                if (response.status === 401 || response.status === 400) {
                    setMessage("Có lỗi xảy ra");
                    setStatus(-1);
                } else {
                    setMessage("Đăng ký thành công");
                    setStatus(1);
                    dispatch(authAction.setUser(response.data));
                    dispatch(authAction.setIsLoggedIn(true));

                    if (location.state && location.state.from) {
                        navigate(location.state.from);
                    } else {
                        setTimeout(() => {
                            navigate("/login");
                            setStatus(0);
                        }
                            , 2000);
                    }
                }
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        }
    };

    return (
        <div className="Login1Register w-[1440px] h-[1024px] relative bg-white">
            <div className="Group3 w-[469px] h-60 left-[175px] top-[294px] absolute">
                <div className="Group1 w-[469px] h-[133px] left-0 top-0 absolute">
                    <div className="SignUpTo left-0 top-0 absolute text-black text-[50px] font-semibold font-['Poppins']">Sign Up to </div>
                    <div className="DigitalLibraryEducation w-[459px] left-[4px] top-[88px] absolute text-black text-[35px] font-medium font-['Poppins']">Digital Library Education</div>
                </div>
                <div className="Group2 w-[321px] h-[54px] left-[4px] top-[186px] absolute">
                    <div className="IfYouAlreadyHaveAnAccount w-[308px] left-0 top-0 absolute text-black text-base font-normal font-['Poppins']">If you already have an account </div>
                    <div className="YouCanLoginHere w-[308px] left-0 top-[30px] absolute">
                        <span style={{ color: 'black', fontSize: 'base', fontWeight: 'normal', fontFamily: 'Poppins' }}>You can   </span>
                        <a href='/login' style={{ color: '#7975D2', fontSize: 'base', fontWeight: 'bold', fontFamily: ['Poppins'] }}>Login here !</a>
                    </div>
                </div>
            </div>
            <div className="Group19 w-[369px] h-[683.46px] left-[892px] top-[100px] absolute">
                <input
                    type="text"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="Group15 w-[369px] h-[62px] left-0 top-[73px] absolute  bg-indigo-50 rounded-lg justify-center items-center inline-flex"
                    style={{ color: 'indigo', border: 'none', outline: 'none', width: '369px', height: '62px', borderRadius: '0.5rem', fontFamily: ['Poppins'] }}
                />
                <emailMessage className="text-red-500 text-sm">{emailMessage}</emailMessage>
                <input
                    type="text"
                    value={firstName}
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    className="Group17 w-[369px] h-[62px] left-0 top-[153px] absolute  bg-indigo-50 rounded-lg justify-center items-center inline-flex"
                    style={{ color: 'indigo', border: 'none', outline: 'none', width: '369px', height: '62px', borderRadius: '0.5rem', fontFamily: ['Poppins'] }}
                />
                <firstNameMessage className="text-red-500 text-sm">{firstNameMessage}</firstNameMessage>
                <input
                    type="text"
                    value={lastName}
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    className="Group18 w-[369px] h-[62px] left-0 top-[233px] absolute  bg-indigo-50 rounded-lg justify-center items-center inline-flex"
                    style={{ color: 'indigo', border: 'none', outline: 'none', width: '369px', height: '62px', borderRadius: '0.5rem', fontFamily: ['Poppins'] }}
                />
                <lastNameMessage className="text-red-500 text-sm">{lastNameMessage}</lastNameMessage>
                <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="Group6 w-[369px] h-[62px] left-0 top-[313px] absolute  bg-indigo-50 rounded-lg justify-center items-center inline-flex"
                    style={{ color: 'indigo', border: 'none', outline: 'none', width: '369px', height: '62px', borderRadius: '0.5rem', fontFamily: ['Poppins'] }}
                />
                <passwordMessage className="text-red-500 text-sm">{passwordMessage}</passwordMessage>
                <input
                    type="password"
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                    className="Group6 w-[369px] h-[62px] left-0 top-[394px] absolute  bg-indigo-50 rounded-lg justify-center items-center inline-flex"
                    style={{ color: 'indigo', border: 'none', outline: 'none', width: '369px', height: '62px', borderRadius: '0.5rem', fontFamily: ['Poppins'] }}
                />
                <confirmPasswordMessage className="text-red-500 text-sm">{confirmPasswordMessage}</confirmPasswordMessage>
                <div className="Group14 w-[369px] h-[59px] left-0 top-[484px] absolute justify-center items-center inline-flex">
                    <div className="Group9 w-[369px] h-[59px] relative">
                        <div className="Rectangle2 w-[369px] h-[59px] left-0 top-0 absolute bg-blue-500 rounded-[9px] shadow" />
                        <button
                            className="Register left-[158px] top-[18px] absolute text-white text-base font-medium font-Poppins"
                            onClick={handleSignUp}
                        >
                            Register
                        </button>
                    </div>
                </div>
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
                            <HiCheck className="h-5 w-5" />
                        </div>
                        <div className="ml-3 text-sm font-normal">{message}</div>
                        <Toast.Toggle />
                    </Toast>
                )}
                {error && (
                    <Toast className="top-5 right-5 fixed">
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                            <HiX className="h-5 w-5" />
                        </div>
                        <div className="ml-3 text-sm font-normal">{error}</div>
                        <Toast.Toggle />
                    </Toast>
                )}


                <div className="OrContinueWith left-[120px] top-[590px] absolute text-zinc-400 text-base font-medium font-['Poppins']">or continue with</div>
                <div className="Google w-[41.46px] h-[41.46px] left-[176px] top-[642px] absolute flex-col justify-start items-start inline-flex" />
                <div className="SignUp left-0 top-0 absolute text-black text-3xl font-medium font-['Poppins']">Sign Up</div>
            </div>
            <img className="Library23 w-[336px] h-[336px] left-[140px] top-[5px] absolute" src={logo} />
        </div>
    );
};

export default SignUp;