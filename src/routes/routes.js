import { createBrowserRouter } from "react-router-dom";
import React from "react";

import Home from "../pages/user/Home";
import Categories from "../pages/user/Categories";
import Spinner from "../spinner";
const ErrorPage = React.lazy(() => import("../error-page"));
const UserLayout = React.lazy(() => import("../layouts/UserLayout"));
const AdminLayout = React.lazy(() => import("../layouts/AdminLayout"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "sign-in",
                element: <Home />,
            },
            {
                path: "categories",
                element: <Categories />,
            },
        ]
    },
    {
        path: "admin",
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "categories",
                element: <Categories />,
            },
        ]
    },
    {
        path: "loading",
        element: <Spinner />,
        errorElement: <ErrorPage />,
    },
]);

export default router;