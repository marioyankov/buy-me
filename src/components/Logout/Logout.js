import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContexts';
import { useAlertContext, types } from '../../contexts/AlertContext';

import * as authService from '../../services/authService';

const Logout = () => {
    const navigate = useNavigate();
    const { logout } = useAuthContext();
    const { addAlert } = useAlertContext();


    useEffect(() => {
        authService.logout()
            .then(() => {
                logout();
                authService.userLoggedOut();
                addAlert('You have successfully logged out!', types.success);
                navigate('/');
            })
            .catch(authService.gotError);
    }, [logout, navigate, addAlert])

    return null;
}

export default Logout;