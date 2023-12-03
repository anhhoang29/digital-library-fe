import { privateAxios } from "../axios";

export const getGeneralStatistics = async (config) => {
    try {
        const response = await privateAxios.get("/statistics/admin", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getGeneralStatisticsForManager = async (config) => {
    try {
        const response = await privateAxios.get("/statistics/manager", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};