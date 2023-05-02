import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider, useRoutes} from 'react-router-dom';
import AgeVerificationMiddleware from "./middlewares/AgeVerificationMiddleware";
import AgeVerification from "./components/shared/AgeVerification";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <AgeVerificationMiddleware>
                <App/>
            </AgeVerificationMiddleware>
        ),
    },
    {
        path: '/age-verification',
        element: (
            <>
                <App/>
                <AgeVerification/>
            </>
        ),
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
