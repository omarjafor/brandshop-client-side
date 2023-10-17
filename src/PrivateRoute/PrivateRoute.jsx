import { Navigate, useLocation } from "react-router-dom";
import useHook from "../Hooks/UseHook";


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useHook();

    if (loading) return <span className="loading loading-spinner loading-lg"></span>

    if(!user?.email) {
        return <Navigate state={location} to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;