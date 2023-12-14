import { privateAxios } from "../axios";

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

