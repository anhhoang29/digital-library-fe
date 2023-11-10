import React from "react";
import "./style.css";
import AuthPage from "./AuthPage";


const SignUp = () => {
    return (
        <AuthPage
            title="Sign Up"
            hintText="If you already have an account"
            linkText="Login here !"
            linkUrl="./login"
        >
            <div className="form-group">
                <h1 className="signup-text">Sign Up</h1>
                <div className="email-input-group">
                    <div className="input-box"></div>
                    <div className="input-label">Enter Email</div>
                </div>
                <div className="username-input-group">
                    <div className="input-box"></div>
                    <div className="input-label">Create User name</div>
                </div>
                <div className="contact-input-group">
                    <div className="input-box"></div>
                    <div className="input-label">Contact number</div>
                </div>
                <div className="password-input-group">
                    <div className="input-box"></div>
                    <div className="input-label">Password</div>
                </div>
                <div className="confirm-password-input-group">
                    <div className="input-box"></div>
                    <div className="input-label">Confirm Password</div>
                </div>
                <div className="register-button-group">
                    <div className="register-button"></div>
                    <div className="register-text">Register</div>
                </div>
                <div className="or-hint-text">or continue with</div>
                <div className="google-signup-group">
                    <div className="google-logo"></div>
                </div>
            </div>
        </AuthPage>
    );
};

export default SignUp;