import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../error-page";
import Home from "../pages/user/Home";
import Categories from "../pages/user/Categories";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

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
]);

export default router;