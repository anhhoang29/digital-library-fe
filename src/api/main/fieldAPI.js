import { privateAxios } from "../axios";

export const getAllFields = async (config) => {
    try {
        const response = await privateAxios.get("/fields/all", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getAccessibleFields = async (config) => {
    try {
        const response = await privateAxios.get("/fields", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAField = async (fieldId, config) => {
    try {
        const response = await privateAxios.get(`/fields/${fieldId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createField = async (data, config) => {
    try {
        const response = await privateAxios.post("/fields", data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateField = async (fieldId, data, config) => {
    try {
        const response = await privateAxios.put(`/fields/${fieldId}`, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteAField = async (fieldId, config) => {
    try {
        const response = await privateAxios.delete(`/fields/${fieldId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};