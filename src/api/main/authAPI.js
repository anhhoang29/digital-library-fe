import axios from "../axios";

export const login = async (data, config) => {
    try {
        const response = await axios.post("/auth/login", data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const sendEmail = async (config) => {
    try {
        const response = await axios.post("/auth/sendEmail", "", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const verify = async (config) => {
    try {
        const response = await axios.post("/auth/verify", "", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};
