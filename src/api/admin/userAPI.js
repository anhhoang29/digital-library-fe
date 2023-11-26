import { privateAxios } from "../axios";

export const getAllUsers = async (config) => {
    try {
        const response = await privateAxios.get("/users", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createUser = async (data, config) => {
    try {
        const response = await privateAxios.post("/users", data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateUser = async (userId, data, config) => {
    try {
        const response = await privateAxios.put(`/users/${userId}`, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAUser = async (userId, config) => {
    try {
        const response = await privateAxios.get(`/users/${userId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteAUser = async (userId, config) => {
    try {
        const response = await privateAxios.delete(`/users/${userId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};