import { privateAxios } from "../axios";

export const getAllCategories = async (config) => {
    try {
        const response = await privateAxios.get("/categories", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};
