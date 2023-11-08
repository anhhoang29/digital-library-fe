import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Cookies from "js-cookie";

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    const token = Cookies.get("token");

    return (
        <Route
            {...rest}
            render={(props) => {
                return token && currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                );
            }}
        ></Route>
    );
}
