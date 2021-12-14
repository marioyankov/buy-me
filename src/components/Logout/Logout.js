import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContexts';
import * as authService from '../../services/authService';

const Logout = () => {
    const navigate = useNavigate();
    const { logout } = useAuthContext();

    useEffect(() => {
        authService.logout()
            .then(() => {
                logout();
                authService.userLoggedOut();
                navigate('/');
            })
            .catch(authService.gotError);
    }, [logout, navigate])

    return null;
}

export default Logout;