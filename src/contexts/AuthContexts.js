import { createContext, useContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";


const initialAuthState = {};

export const AuthContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('Backendless_2431C311-F65C-5509-FF07-EBD7CFA6C200', initialAuthState);

    const login = (authData) => {
        setUser(authData);
    }

    const logout = () => {
        setUser(initialAuthState);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
};