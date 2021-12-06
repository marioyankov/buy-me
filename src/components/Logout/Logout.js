import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContexts';

import { gotError, userLoggedOut } from '../../backendlessConfig';

const Logout = () => {
    const Backendless = require('backendless');
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        Backendless.UserService.logout()
            .then(() => {
                logout();
                userLoggedOut();
                // TODO: navigate
            })
            .catch(gotError);
    }, [Backendless.UserService, logout])

    return null;
}

export default Logout;