import { privateAxios } from "../axios";

export const checkLikedStatus = async (slug, config) => {
    try {
        const response = await privateAxios.get(`/documents/${slug}/liked`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getLikedDocuments = async (config) => {
    try {
        const response = await privateAxios.get("/documents/liked", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const likeDocument = async (slug, config) => {
    try {
        const response = await privateAxios.post(`/documents/${slug}/like`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};
