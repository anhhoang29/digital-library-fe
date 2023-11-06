import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "../Home";
import Login from "../login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { AuthProvider } from "../../contexts/AuthContext";
import { DataProvider } from "../../contexts/DataContext";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { LanguageProvider } from "../../contexts/LanguageContext";

const RootRouters = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <DataProvider>
                    <ThemeProvider>
                        <LanguageProvider>
                            <Switch>
                                {/* <Route exact path="/" component={Home} /> */}
                                <PublicRoute path="/login" component={Login} />
                                {/* <PublicRoute path="/signup" component={Signup} /> */}
                                {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
                                <Route component={NotFound} />
                            </Switch>
                        </LanguageProvider>
                    </ThemeProvider>
                </DataProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default RootRouters;