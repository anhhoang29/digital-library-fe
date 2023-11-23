import React from "react";

import { Route, Routes } from "react-router-dom";

import Dashboard from "../../pages/admin/Dashboard";
import Customers from "../../pages/admin/Customers";
import Documents from "../../pages/admin/document/Documents";
import NewDocument from "../../pages/admin/document/NewDocument";
import DetailDocument from "../../pages/admin/document/DetailDocument";
import EditDocument from "../../pages/admin/document/EditDocument";
import Users from "../../pages/admin/user/Users";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/documents/new" element={<NewDocument />} />
            <Route path="/admin/documents/:slug" element={<DetailDocument />} />
            <Route path="/admin/documents/:slug/edit" element={<EditDocument />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/documents" element={<Documents />} />
            <Route path="/admin/home" element={<Dashboard />} />
            <Route path="/admin/" element={<Dashboard />} />
        </Routes>
    );
};

export default AdminRoutes;
