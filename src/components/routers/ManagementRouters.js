import React from "react";

import { Route, Routes } from "react-router-dom";

import Dashboard from "../../pages/admin/Dashboard.jsx";
import Profile from "../../pages/admin/Profile.jsx";
import Categories from "../../pages/admin/category/Categories.jsx";
import DetailDocument from "../../pages/admin/document/DetailDocument.jsx";
import Documents from "../../pages/admin/document/Documents.jsx";
import EditDocument from "../../pages/admin/document/EditDocument.jsx";
import NewDocument from "../../pages/admin/document/NewDocument.jsx";
import PendingDocuments from "../../pages/admin/document/PendingDocument.jsx";
import Fields from "../../pages/admin/field/Fields.jsx";
import Organizations from "../../pages/admin/organization/Organizations.jsx";
import DetailUser from "../../pages/admin/user/DetailUser.jsx";
import Users from "../../pages/admin/user/Users.jsx";

import ManagerDashboard from "../../pages/manager/Dashboard.jsx";
import ManagerProfile from "../../pages/manager/Profile.jsx";
import ManagerDetailDocument from "../../pages/manager/document/DetailDocument.jsx";
import ManagerDocuments from "../../pages/manager/document/Documents.jsx";
import ManagerEditDocument from "../../pages/manager/document/EditDocument.jsx";
import ManagerNewDocument from "../../pages/manager/document/NewDocument.jsx";
import ManagerPendingDocuments from "../../pages/manager/document/PendingDocument.jsx";
import ManagerDetailUser from "../../pages/manager/user/DetailUser.jsx";
import ManagerUsers from "../../pages/manager/user/Users.jsx";

const ManagementRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/documents/new" element={<NewDocument />} />
            <Route path="/admin/documents/latest" element={<Documents />} />
            <Route path="/admin/documents/pending" element={<PendingDocuments />} />
            <Route path="/admin/documents/:slug" element={<DetailDocument />} />
            <Route path="/admin/documents/:slug/edit" element={<EditDocument />} />
            <Route path="/admin/users/latest" element={<Users />} />
            <Route path="/admin/users/:userId" element={<DetailUser />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/categories" element={<Categories />} />
            <Route path="/admin/documents" element={<Documents />} />
            <Route path="/admin/fields" element={<Fields />} />
            <Route path="/admin/organizations" element={<Organizations />} />
            <Route path="/admin/profile" element={<Profile />} />
            <Route path="/admin/home" element={<Dashboard />} />

            <Route path="/manager/documents/new" element={<ManagerNewDocument />} />
            <Route path="/manager/documents/latest" element={<ManagerDocuments />} />
            <Route path="/manager/documents/pending" element={<ManagerPendingDocuments />} />
            <Route path="/manager/documents/:slug" element={<ManagerDetailDocument />} />
            <Route path="/manager/documents/:slug/edit" element={<ManagerEditDocument />} />
            <Route path="/manager/users/latest" element={<ManagerUsers />} />
            <Route path="/manager/users/:userId" element={<ManagerDetailUser />} />
            <Route path="/manager/users" element={<ManagerUsers />} />
            <Route path="/manager/documents" element={<ManagerDocuments />} />
            <Route path="/manager/profile" element={<ManagerProfile />} />
            <Route path="/manager/home" element={<ManagerDashboard />} />
        </Routes>
    );
};

export default ManagementRoutes;
