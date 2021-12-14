import { Backendless } from '../backendlessConfig';


export const login = async (email, password) => {
    let res = await Backendless.UserService.login(email, password, true);

    return res;
};

export const register = async (email, password) => {
    let user = new Backendless.User();
    user.email = email;
    user.password = password;

    let res = await Backendless.UserService.register(user);

    return res;
};

export const logout = async () => {
    let res = await Backendless.UserService.logout();

    return res;
};

export const userRegistered = (user) => {
    console.log(`${user.email} has been registered`)
}

export const gotError = (error) => {
    //TODO: show notification
    console.log(`error message: ${error.message}`);
}

export const userLoggedIn = (user) => {
    console.log(user)
    console.log(`${user.email} has logged in`);
}

export const userLoggedOut = () => {
    console.log('user has been logged out');
}

export const isAuthenticated = (user) => {
    return Boolean(user.email);
}
