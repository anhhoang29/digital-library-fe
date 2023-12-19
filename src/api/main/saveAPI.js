import { privateAxios } from "../axios";

export const checkSavedStatus = async (slug, config) => {
    try {
        const response = await privateAxios.get(`/documents/${slug}/saved`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const saveDocument = async (slug, config) => {
    try {
        const response = await privateAxios.post(`/documents/${slug}/save`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getSavedDocuments = async (config) => {
    try {
        const response = await privateAxios.get("/documents/saved", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};