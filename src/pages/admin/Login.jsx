import React from "react";
import LoginForm from "../../components/admin/login-form/LoginForm";

const AdminLogin = () => {
    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img aria-hidden="true" className="object-cover w-full h-full dark:hidden" src={require("../../assets/images/login-art.png")} alt="GGGG" />
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
