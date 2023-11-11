import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PublicAdminRoutes from "../../routers/PublicAdminRouters";

const Blank = () => {
    return (
        <BrowserRouter>
            <Route>
                <PublicAdminRoutes />
            </Route>
        </BrowserRouter>
    );
};

export default Blank;
