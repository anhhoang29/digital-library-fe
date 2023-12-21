import { privateAxios } from "../axios";
import axios from "../axios";

export const getAllUsers = async (config) => {
    try {
        const response = await privateAxios.get("/users", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllUsersByOrganization = async (org, config) => {
    try {
        const response = await privateAxios.get(`/users/organizations/${org}`, config);
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
        const response = await axios.get(`/users/${userId}`, config);
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

export const getLatestUsers = async (config) => {
    try {
        const response = await privateAxios.get("/users/latest", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getLatestUsersByOrganization = async (org, config) => {
    try {
        const response = await privateAxios.get(`/users/organizations/${org}/latest`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getProfile = async (config) => {
    try {
        const response = await privateAxios.get("/users/profile", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateProfile = async (data, config) => {
    try {
        const response = await privateAxios.put("/users/profile", data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const updateAvatar = async (data, config) => {
    try {
        const response = await privateAxios.put("/users/avatar", data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updatePassword = async (data, config) => {
    try {
        const response = await privateAxios.put("/users/password", data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const resetPassword = async (data, config) => {
    try {
        const response = await axios.put("/users/password/reset", data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};