// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import { ErrorBoundary } from "react-error-boundary";
// import  RootRouters  from './components/routers/RootRouters';
// import { RouterProvider } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      {/* <ErrorBoundary FallbackComponent={ErrorBoundary}> */}
//     <RouterProvider router={RootRouters} />
//     {/* </ErrorBoundary> */}
//   </React.StrictMode >
// );

import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { legacy_createStore as createStore } from "redux";

import { Provider } from "react-redux";

import rootReducer from "./redux/reducers";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
import "./assets/css/index.css";

import App from "./App";

import "./index.css";

const store = createStore(rootReducer);

document.title = "Wisdo";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        {/* <React.StrictMode> */}
            <App />
        {/* </React.StrictMode> */}
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
