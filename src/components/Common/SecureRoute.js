import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../services/authService";
import { useAuthContext } from '../../contexts/AuthContexts';

const SecureRoute = () => {
    const { user } = useAuthContext();
    const currentUser  = isAuthenticated(user);

    return currentUser ? <Outlet /> : <Navigate to='/login' />;
}

export default SecureRoute;