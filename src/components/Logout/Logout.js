import { gotError, userLoggedOut } from '../../backendlessConfig';

const Logout = () => {
    const Backendless = require('backendless');

    Backendless.UserService.logout()
        .then(userLoggedOut)
        .catch(gotError);

        return null;
}

export default Logout;