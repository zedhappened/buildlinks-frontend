import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../error-page";
import Home from "../pages/Home";
import Categories from "../pages/Categories";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/categories",
                element: <Categories />,
            },
        ]
    },
]);

export default router;