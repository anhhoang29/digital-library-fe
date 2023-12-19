import { privateAxios } from "../axios";
import axios from "../axios";

export const getReviewsOfOrganization = async (organizationId, config) => {
    try {
        const response = await privateAxios.get(`/organizations/${organizationId}/reviews`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteAReview = async (reviewId, config) => {
    try {
        const response = await privateAxios.delete(`/reviews/${reviewId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getReviewsOfDocument = async (slug, config) => {
    try {
        const response = await axios.get(`/documents/${slug}/reviews`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const checkReviewedStatus = async (slug, config) => {
    try {
        const response = await privateAxios.get(`/documents/${slug}/reviewed`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postAReview = async (docId, data, config) => {
    try {
        const response = await privateAxios.post(`/documents/${docId}/review`, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};