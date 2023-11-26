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

                if (!accessToken) navigate("/admin/login");
                else config.headers.Authorization = `Bearer ${accessToken}`;

                return config;
            },
            (error) => Promise.reject(error),
        );

        const responseInterceptor = privateAxios.interceptors.response.use(
            (response) => {
                if (response.data.status === 401) {
                    if (response.data.message === "User unauthorized. Please log in first.") navigate("/admin/login");
                } else if (response.data.status === 403) navigate("/admin/login");

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
