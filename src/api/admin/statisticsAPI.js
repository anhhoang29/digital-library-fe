import { privateAxios } from "../axios";

export const getGeneralStatistics = async (config) => {
    try {
        const response = await privateAxios.get("/statistics", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};