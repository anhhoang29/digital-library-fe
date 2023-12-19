import { useEffect } from "react";
import { privateAxios } from "./axios";
// import useRefreshToken from "./useRefreshToken";
import { useNavigate } from "react-router-dom";

const usePrivateAxios = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const requestInterceptor = privateAxios.interceptors.request.use(
            (config) => {
                const accessToken = localStorage.getItem("accessToken");
                const user = JSON.parse(sessionStorage.getItem("profile"));

                if (!accessToken) {
                    if (user && user.role && user.role.roleName === "ROLE_ADMIN") navigate("/admin/login");
                    else if (user && user.role && user.role.roleName === "ROLE_MANAGER") navigate("/manager/login");
                    else navigate("/login");

                    sessionStorage.setItem("entryMessage", "Phiên đăng nhập đã hết. Vui lòng đăng nhập lại!");
                } else {
                    if (!user) {
                        navigate("/login");

                        sessionStorage.setItem("entryMessage", "Phiên đăng nhập đã hết. Vui lòng đăng nhập lại!");
                    } else {
                        config.headers.Authorization = `Bearer ${accessToken}`;
                        sessionStorage.removeItem("entryMessage");
                    }
                }
                return config;
            },
            (error) => Promise.reject(error),
        );

        const responseInterceptor = privateAxios.interceptors.response.use(
            (response) => {
                const user = JSON.parse(sessionStorage.getItem("profile"));

                if (response.data.status === 401 || response.data.status === 403) {
                    if (response.data.status === 401) {
                        sessionStorage.setItem("entryMessage", "Vui lòng đăng nhập trước!");
                    } else if (response.data.status === 403) {
                        sessionStorage.setItem("entryMessage", "Tài khoản không có quyền truy cập!");
                    }
                    if (user && user.role && user.role.roleName === "ROLE_ADMIN") navigate("/admin/login");
                    else if (user && user.role && user.role.roleName === "ROLE_MANAGER") navigate("/manager/login");
                    if (user && user.role && user.role.roleName === "ROLE_STUDENT") navigate("/login");
                } else {
                    sessionStorage.removeItem("entryMessage");
                }
                return response;
            },
            (error) => {
                return Promise.reject(error);
            },
        );

        return () => {
            privateAxios.interceptors.request.eject(requestInterceptor);
            privateAxios.interceptors.response.eject(responseInterceptor);
        };
    }, [navigate]);
    return privateAxios;
};

export default usePrivateAxios;
