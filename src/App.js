import React from "react";
import RootRouters from "./components/routers/RootRouters";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <RootRouters />
            </div>
        </Router>
    );
}

export default App;
