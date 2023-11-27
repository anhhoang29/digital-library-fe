import axios, { privateAxios } from "../axios";

export const getAllDocuments = async (config) => {
    try {
        const response = await privateAxios.get("/documents", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPendingDocuments = async (config) => {
    try {
        const response = await privateAxios.get("/documents/pending", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const uploadNewDocument = async (data, config) => {
    try {
        const response = await axios.post("/documents", data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateDocument = async (slug, data, config) => {
    try {
        const response = await axios.put(`/documents/${slug}`, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getADocument = async (slug, config) => {
    try {
        const response = await axios.get(`/documents/${slug}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteADocument = async (docId, config) => {
    try {
        const response = await axios.delete(`/documents/${docId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const approveADocument = async (docId, config) => {
    try {
        const response = await privateAxios.put(`/documents/${docId}/approval`, "", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getLatestDocuments = async (config) => {
    try {
        const response = await privateAxios.get("/documents/latest", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};
