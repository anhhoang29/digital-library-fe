import { privateAxios } from "../axios";

export const getAllOrganizations = async (config) => {
    try {
        const response = await privateAxios.get("/organizations", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};
