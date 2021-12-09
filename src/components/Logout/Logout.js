import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContexts';

import { gotError, userLoggedOut } from '../../backendlessConfig';

const Logout = () => {
    const Backendless = require('backendless');
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        Backendless.UserService.logout()
            .then(() => {
                logout();
                userLoggedOut();
                navigate('/');
            })
            .catch(gotError);
    }, [Backendless.UserService, logout])

    return null;
}

export default Logout;