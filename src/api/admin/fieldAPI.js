import { privateAxios } from "../axios";

export const getAllFields = async (config) => {
    try {
        const response = await privateAxios.get("/fields", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};
