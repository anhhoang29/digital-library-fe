import axios, { privateAxios } from "../axios";

export const getAllOrganizations = async (config) => {
    try {
        const response = await privateAxios.get("/organizations/all", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAccessibleOrganizations = async (config) => {
    try {
        const response = await axios.get("/organizations", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const searchOrganizations = async (config) => {
    try {
        const response = await axios.get("/organizations/search", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAnOrganization = async (organizationId, config) => {
    try {
        const response = await privateAxios.get(`/organizations/${organizationId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createOrganization = async (data, config) => {
    try {
        const response = await privateAxios.post("/organizations", data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateOrganization = async (organizationId, data, config) => {
    try {
        const response = await privateAxios.put(`/organizations/${organizationId}`, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteAnOrganization = async (organizationId, config) => {
    try {
        const response = await privateAxios.delete(`/organizations/${organizationId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const activateAnOrganization = async (organizationId, config) => {
    try {
        const response = await privateAxios.put(`/organizations/${organizationId}/activation`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};
