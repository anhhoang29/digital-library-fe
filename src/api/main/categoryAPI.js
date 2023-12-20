import axios, { privateAxios } from "../axios";

export const getAllCategories = async (config) => {
    try {
        const response = await privateAxios.get("/categories/all", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAccessibleCategories = async (config) => {
    try {
        const response = await axios.get("/categories", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getACategory = async (categoryId, config) => {
    try {
        const response = await privateAxios.get(`/categories/${categoryId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createCategory = async (data, config) => {
    try {
        const response = await privateAxios.post("/categories", data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateCategory = async (categoryId, data, config) => {
    try {
        const response = await privateAxios.put(`/categories/${categoryId}`, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteACategory = async (categoryId, config) => {
    try {
        const response = await privateAxios.delete(`/categories/${categoryId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const activateCategory = async (categoryId, config) => {
    try {
        const response = await privateAxios.put(`/categories/${categoryId}/activation`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};
