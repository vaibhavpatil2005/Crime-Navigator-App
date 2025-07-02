import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
    const { userData } = useContext(AuthContext);

    if (userData === null) {
        // If user is not authenticated, redirect to login
        return <Navigate to="/login" replace />;
    }

    return <Outlet />; // Render the protected route if user is authenticated
};

export default ProtectedRoute;
