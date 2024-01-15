import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Restricted from "./components/Restricted";
import AdminCategories from "./pages/admin/Categories/AdminCategories";
import Dashboard from "./pages/admin/Dashboard";
import AdminOrders from "./pages/admin/Orders/AdminOrders";
import AdminProducts from "./pages/admin/Products/AdminProducts";
import AdminSettings from "./pages/admin/Settings/AdminSettings";
import Spinner from "./pages/spinner";
import Categories from "./pages/user/Categories";
import Home from "./pages/user/Home";
import Login, { loginAction } from "./pages/user/Login";

const ErrorPage = React.lazy(() => import("./pages/error-page"));
const UserLayout = React.lazy(() => import("./layouts/UserLayout"));
const AdminLayout = React.lazy(() => import("./layouts/AdminLayout"));

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
                element: <Login />,
                action: loginAction,
            },
            {
                path: "categories",
                element: <Categories />,
            },
        ]
    },
    {
        path: "admin",
        element: <Restricted role="admin"><AdminLayout /></Restricted>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "orders",
                element: <AdminOrders />,
            },
            {
                path: "products",
                element: <AdminProducts />,
            },
            {
                path: "categories",
                element: <AdminCategories />,
            },
            {
                path: "settings",
                element: <AdminSettings />,
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