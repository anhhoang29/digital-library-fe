import React from "react";
import RootRouters from "./components/routers/RootRouters";
import { BrowserRouter as Router } from "react-router-dom";

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
