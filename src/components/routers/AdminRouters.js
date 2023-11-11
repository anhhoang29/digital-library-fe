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
        <Route>
            <Route path="/admin/documents/new" component={NewDocument} />
            <Route path="/admin/documents/detail" component={DetailDocument} />
            <Route path="/admin/documents/update" component={EditDocument} />
            <Route path="/admin/customers" component={Customers} />
            <Route path="/admin/products" component={Products} />
            <Route path="/home" component={Dashboard} />
        </Route>
    );
};

export default AdminRoutes;
