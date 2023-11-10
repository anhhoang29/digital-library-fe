import React from "react";
import "./style.css";
import AuthPage from "./AuthPage";
import Google from '../assets/images/Google.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";



const SignUp = () => {
    return (
        <AuthPage
            title="Sign up for free"
            hintText="If you already have an account"
            linkText="login here!"
            linkUrl="./login"
        >
            <div className="form-group">
                <h1 className="sign-up-text-title">Sign Up</h1>
                <div className="Input-field">
                    <div className="input-box"></div>
                    <input type="text" className="first-name-input" placeholder="First name" />
                </div>
                <div className="Input-field">
                    <div className="input-box"></div>
                    <input type="text" className="last-name-input" placeholder="Last name" />
                </div>
                <div className="email-input-group">
                    <div className="input-box"></div>
                    <input type="text" className="email-username-input" placeholder="Email" />
                </div>
                <div className="password-input-group">
                    <div className="input-box"></div>
                    <input type="password" className="password-input" placeholder="Password" />
                </div>
                <div className="confirm-password-input-group">
                    <div className="input-box"></div>
                    <input type="password" className="confirm-password-input" placeholder="Confirm password" />
                </div>
                <button className="login-button" type="button">
                    <div className="login-button-background"></div>
                    <div className="login-text">Register</div>
                </button>
                <div className="google-sign-in">
                    <p className="continue-with-text">or continue with</p>
                    <a
                        className='flex items-center lg:gap-[10px] gap-[5px] w-full border rounded-[5px] lg:py-[10px] py-[5px] justify-center border-primary xl:text-base lg:text-sm text-xs hover:bg-athensGray cursor-pointer transition ease-in-out'
                        href=""
                    >
                        <img
                            src={Google}
                            className='object-cover xl:w-6 w-5'
                            alt='Google icon'
                        />
                        <span className='text-primary'>Đăng ký với Google</span>
                    </a>
                </div>
            </div>
        </AuthPage>
    );
};

export default SignUp;