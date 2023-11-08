import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { ErrorBoundary } from "react-error-boundary";
import  RootRouters  from './components/routers/RootRouters';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <ErrorBoundary FallbackComponent={ErrorBoundary}> */}
    <RouterProvider router={RootRouters} />
    {/* </ErrorBoundary> */}
  </React.StrictMode >
);
reportWebVitals();
