import React from "react";

import { Route, Routes } from "react-router-dom";

import Dashboard from "../../pages/admin/Dashboard";
import Customers from "../../pages/admin/Customers";
import Products from "../../pages/admin/Products";
import NewDocument from "../../pages/admin/document/NewDocument";
import DetailDocument from "../../pages/admin/document/DetailDocument";
import EditDocument from "../../pages/admin/document/EditDocument";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/documents/new" element={<NewDocument />} />
            <Route path="/admin/documents/detail" element={<DetailDocument />} />
            <Route path="/admin/documents/update" element={<EditDocument />} />
            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/home" element={<Dashboard />} />
            <Route path="/admin/" element={<Dashboard />} />
        </Routes>
    );
};

export default AdminRoutes;
