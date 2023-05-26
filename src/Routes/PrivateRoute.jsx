import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <svg
                    className="animate-spin h-16 w-16 text-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        className="text-indigo-500"
                        fill="currentColor"
                        d="M11.502 2.006c-5.494 0-9.995 4.501-9.995 9.995 0 5.494 4.501 9.995 9.995 9.995 5.494 0 9.995-4.501 9.995-9.995 0-5.494-4.501-9.995-9.995-9.995zm0 18.99c-5.27 0-9.536-4.267-9.536-9.536 0-5.27 4.267-9.536 9.536-9.536 5.27 0 9.536 4.267 9.536 9.536 0 5.27-4.267 9.536-9.536 9.536z"
                    />
                    <path
                        className="text-white"
                        fill="currentColor"
                        d="M12.007 4.425L8.825 17.567l-3.82-.995 4.182-13.142 3.82.995z"
                    />
                </svg>
                <span className="text-2xl text-indigo-500">Loading...</span>
            </div>
        )
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;