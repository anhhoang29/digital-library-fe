import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser, setIsLoggedIn } from "../../redux/actions/LoginAction";
import { emailRegrex } from "../../utils/regrex";
import { SIGN_UP_URL } from "../../api/main/authAPI";


import logo from '../assets/images/logo.png';



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
                const response = await axios.post(SIGN_UP_URL, JSON.stringify({ email, firstName, lastName, password, confirmPassword }), {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                });
                setIsLoading(false);
                if (response.data.status === 401) {
                    setMessage("Email or password is incorrect");
                    setStatus(-1);
                    setTimeout(() => {
                        setMessage("");
                    }, 4000);
                } else if (response.data.status === 400) {
                    setMessage("Có lỗi xảy ra");
                    setStatus(-1);
                    setTimeout(() => {
                        setMessage("");
                    }, 4000);
                } else {
                    dispatch(setUser(response.data.data));
                    dispatch(setIsLoggedIn(true));
                    if (location.state && location.state.from) {
                        navigate(location.state.from);
                    } else {
                        navigate("/");
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
                    name="email"
                    placeholder="Enter email"
                    className="Group15 w-[369px] h-[62px] left-0 top-[73px] absolute  bg-indigo-50 rounded-lg justify-center items-center inline-flex"
                    style={{ color:'indigo',border: 'none', outline: 'none', width: '369px', height: '62px', borderRadius: '0.5rem', fontFamily: ['Poppins'] }}
                />
                {/* <div className="Group15 w-[369px] h-[62px] left-0 top-[73px] absolute justify-center items-center inline-flex">
                    <div className="Group4 w-[369px] h-[62px] relative">
                        <div className="Rectangle1 w-[369px] h-[62px] left-0 top-0 absolute bg-indigo-50 rounded-lg" />
                        <div className="EnterEmail left-[26px] top-[20px] absolute text-indigo-300 text-[15px] font-normal font-['Poppins']">Enter Email</div>
                    </div>
                </div> */}
                
                {/* <div className="Group17 w-[369px] h-[62px] left-0 top-[153px] absolute justify-center items-center inline-flex">
                    <div className="Group4 w-[369px] h-[62px] relative">
                        <div className="Rectangle1 w-[369px] h-[62px] left-0 top-0 absolute bg-indigo-50 rounded-lg" />
                        <div className="FirstName left-[26px] top-[20px] absolute text-indigo-300 text-[15px] font-normal font-['Poppins']">Enter First Name</div>
                    </div>
                </div> */}
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    className="Group17 w-[369px] h-[62px] left-0 top-[153px] absolute  bg-indigo-50 rounded-lg justify-center items-center inline-flex"
                    style={{ color:'indigo',border: 'none', outline: 'none', width: '369px', height: '62px', borderRadius: '0.5rem', fontFamily: ['Poppins'] }}
                />
                {/* <div className="Group18 w-[369px] h-[62px] left-0 top-[233px] absolute justify-center items-center inline-flex">
                    <div className="Group4 w-[369px] h-[62px] relative">
                        <div className="Rectangle1 w-[369px] h-[62px] left-0 top-0 absolute bg-indigo-50 rounded-lg" />
                        <div className="LastName left-[26px] top-[20px] absolute text-indigo-300 text-[15px] font-normal font-['Poppins']">Enter Last Name</div>
                    </div>
                </div> */}
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    className="Group18 w-[369px] h-[62px] left-0 top-[233px] absolute  bg-indigo-50 rounded-lg justify-center items-center inline-flex"
                    style={{ color:'indigo',border: 'none', outline: 'none', width: '369px', height: '62px', borderRadius: '0.5rem', fontFamily: ['Poppins'] }}
                />
                {/* <div className="Group6 w-[369px] h-[62px] left-0 top-[394px] absolute">
                    <div className="Group5 w-[369px] h-[62px] left-0 top-0 absolute">
                        <div className="Rectangle1 w-[369px] h-[62px] left-0 top-0 absolute bg-indigo-50 rounded-lg" />
                        <div className="ConfrimPassword w-[147px] left-[29px] top-[20px] absolute text-indigo-300 text-[15px] font-normal font-['Poppins']">Confrim Password</div>
                    </div>
                    <div className="Invisible1 w-[17px] h-[17px] left-[320px] top-[23px] absolute">
                        <div className="Group w-[17px] h-[14.68px] left-0 top-[1.16px] absolute">
                        </div>
                    </div>
                </div> */}
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="Group6 w-[369px] h-[62px] left-0 top-[394px] absolute  bg-indigo-50 rounded-lg justify-center items-center inline-flex"
                    style={{ color:'indigo',border: 'none', outline: 'none', width: '369px', height: '62px', borderRadius: '0.5rem', fontFamily: ['Poppins'] }}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className="Group6 w-[369px] h-[62px] left-0 top-[313px] absolute  bg-indigo-50 rounded-lg justify-center items-center inline-flex"
                    style={{ color:'indigo',border: 'none', outline: 'none', width: '369px', height: '62px', borderRadius: '0.5rem', fontFamily: ['Poppins'] }}
                />
                {/* <div className="Group6 w-[369px] h-[62px] left-0 top-[313px] absolute">
                    <div className="Group5 w-[369px] h-[62px] left-0 top-0 absolute">
                        <div className="Rectangle1 w-[369px] h-[62px] left-0 top-0 absolute bg-indigo-50 rounded-lg" />
                        <div className="Password w-[147px] left-[29px] top-[20px] absolute text-indigo-300 text-[15px] font-normal font-['Poppins']">Password</div>
                    </div>
                    <div className="Invisible1 w-[17px] h-[17px] left-[320px] top-[23px] absolute">
                        <div className="Group w-[17px] h-[14.68px] left-0 top-[1.16px] absolute">
                        </div>
                    </div>
                </div> */}
                <div className="Group14 w-[369px] h-[59px] left-0 top-[484px] absolute justify-center items-center inline-flex">
                    <div className="Group9 w-[369px] h-[59px] relative">
                        <div className="Rectangle2 w-[369px] h-[59px] left-0 top-0 absolute bg-blue-500 rounded-[9px] shadow" />
                        <button
                            className="Register left-[158px] top-[18px] absolute text-white text-base font-medium font-Poppins"
                            onClick={() => {
                                handleSignUp();
                                console.log('Registration button clicked!');
                            }}
                        >
                            Register
                        </button>
                    </div>
                </div>
                <div className="OrContinueWith left-[120px] top-[590px] absolute text-zinc-400 text-base font-medium font-['Poppins']">or continue with</div>
                <div className="Google w-[41.46px] h-[41.46px] left-[176px] top-[642px] absolute flex-col justify-start items-start inline-flex" />
                <div className="SignUp left-0 top-0 absolute text-black text-3xl font-medium font-['Poppins']">Sign Up</div>
            </div>
            <img className="Library23 w-[336px] h-[336px] left-[140px] top-[5px] absolute" src={logo} />
        </div>
    );
};

export default SignUp;