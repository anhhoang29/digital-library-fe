import React from "react";

import { Route, Routes } from "react-router-dom";

import Page404 from "../../pages/404Page.jsx";
import ManagerDashboard from "../../pages/manager/Dashboard.jsx";
import ManagerProfile from "../../pages/manager/Profile.jsx";
import ManagerDetailDocument from "../../pages/manager/document/DetailDocument.jsx";
import ManagerDocuments from "../../pages/manager/document/Documents.jsx";
import ManagerEditDocument from "../../pages/manager/document/EditDocument.jsx";
import ManagerNewDocument from "../../pages/manager/document/NewDocument.jsx";
import ManagerPendingDocuments from "../../pages/manager/document/PendingDocument.jsx";
import Reviews from "../../pages/manager/review/Reviews.jsx";
import ManagerDetailUser from "../../pages/manager/user/DetailUser.jsx";
import ManagerUsers from "../../pages/manager/user/Users.jsx";

const ManagementRoutes = () => {
    return (
        <Routes>
            <Route path="/documents/new" element={<ManagerNewDocument />} />
            <Route path="/documents/latest" element={<ManagerDocuments />} />
            <Route path="/documents/pending" element={<ManagerPendingDocuments />} />
            <Route path="/documents/:slug" element={<ManagerDetailDocument />} />
            <Route path="/documents/:slug/edit" element={<ManagerEditDocument />} />
            <Route path="/users/latest" element={<ManagerUsers />} />
            <Route path="/users/:userId" element={<ManagerDetailUser />} />
            <Route path="/users" element={<ManagerUsers />} />
            <Route path="/documents" element={<ManagerDocuments />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/profile" element={<ManagerProfile />} />
            <Route path="/home" element={<ManagerDashboard />} />

            <Route path="*" element={<Page404 />} />
        </Routes>
    );
};

export default ManagementRoutes;
