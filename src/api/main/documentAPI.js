import axios, { privateAxios } from "../axios";

export const getAllDocuments = async (config) => {
    try {
        const response = await privateAxios.get("/documents", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getDocumentsByOrganizations = async (org, config) => {
    try {
        const response = await privateAxios.get(`/documents/organizations/${org}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPendingDocuments = async (config) => {
    try {
        const response = await privateAxios.get("/documents/pending", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const uploadNewDocument = async (data, config) => {
    try {
        const response = await privateAxios.post("/documents", data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateDocument = async (slug, data, config) => {
    try {
        const response = await privateAxios.put(`/documents/${slug}`, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getADocument = async (slug, config) => {
    try {
        const response = await privateAxios.get(`/documents/${slug}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getADocumentForGuest = async (slug, config) => {
    try {
        const response = await axios.get(`/documents/${slug}/public`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteADocument = async (docId, config) => {
    try {
        const response = await privateAxios.delete(`/documents/${docId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const approveADocument = async (docId, config) => {
    try {
        const response = await privateAxios.put(`/documents/${docId}/approval`, "", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getLatestDocuments = async (config) => {
    try {
        const response = await privateAxios.get("/documents/latest", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getLatestDocumentsByOrganization = async (org, config) => {
    try {
        const response = await privateAxios.get(`/documents/organizations/${org}/latest`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUploadedDocuments = async (config) => {
    try {
        const response = await privateAxios.get("/documents/mine", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUploadedDocumentsByUser = async (userId, config) => {
    try {
        const response = await privateAxios.get(`/documents/user/${userId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const searchDocuments = async (config) => {
    try {
        const response = await privateAxios.get("/documents/search", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const searchDocumentsByOrganization = async (org, config) => {
    try {
        const response = await privateAxios.get(`/documents/organizations/${org}/search`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getDocumentsForStudent = async (config) => {
    try {
        const response = await privateAxios.get("/documents/students", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getDocumentsForGuest = async (config) => {
    try {
        const response = await axios.get("/documents/public", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const searchDocumentsForStudent = async (config) => {
    try {
        const response = await privateAxios.get("/documents/students/search", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const searchDocumentsForGuest = async (config) => {
    try {
        const response = await axios.get("/documents/public/search", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getMyUploadedDocuments = async (config) => {
    try {
        const response = await privateAxios.get("/documents/myuploads", config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUploadedDocumentsForStudent = async (userId, config) => {
    try {
        const response = await privateAxios.get(`/documents/view/user/${userId}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUploadedDocumentsForGuest = async (userId, config) => {
    try {
        const response = await axios.get(`/documents/view/user/${userId}/public`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export function addDocumentToList(newDocument) {
    // Lấy danh sách recentDocuments từ localStorage
    let recentDocuments = JSON.parse(localStorage.getItem("recentDocuments")) || [];

    // Kiểm tra xem document đã tồn tại trong danh sách chưa
    const existingDocument = recentDocuments.find((doc) => doc.id === newDocument.id);

    // Nếu document không tồn tại, thêm nó vào đầu danh sách
    if (!existingDocument) {
        // Thêm document mới vào đầu danh sách
        recentDocuments.unshift(newDocument);

        // Kiểm tra nếu số lượng recentDocuments vượt quá 12, loại bỏ phần tử cuối cùng
        if (recentDocuments.length > 12) {
            recentDocuments.pop();
        }

        // Lưu danh sách mới vào localStorage
        localStorage.setItem("recentDocuments", JSON.stringify(recentDocuments));
    }
}
export const getAllDocumentsForGuest = async (page, size, order, sortOrder, category, field, organization) => {
    try {
        const response = await axios.get("/documents/public", {
            params: {
                page: page || 0,
                size: size || 20,
                order: order || "updatedAt",
                sortOrder: sortOrder || "desc",
                category: category || "all",
                field: field || "all",
                organization: organization || "all",
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};