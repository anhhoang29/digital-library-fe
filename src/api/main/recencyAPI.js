import { privateAxios } from "../axios";

export const getRecentDocuments = async (config) => {
    try {
        const response = await privateAxios.get("/documents/recent", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addToRecentDocuments = async (slug, config) => {
    try {
        const response = await privateAxios.post(`/documents/${slug}/recent`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};
