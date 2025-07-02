import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Service from "../pages/Service";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Analyzer from "../pages/Analyzer";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import MLpage from "../pages/MLpage";

import ProtectedRoute from "./ProtectedRoutes"; // Import the ProtectedRoute component

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/service",
                element: <Service />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                element: <ProtectedRoute />,  // Protect these routes
                children: [
                    {
                        path: "/analyzer",
                        element: <Analyzer />
                    },
                    {
                        path: "/predict",
                        element: <MLpage />
                    }
                ]
            }
        ]
    }
]);

export default Router;
