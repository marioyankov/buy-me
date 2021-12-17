import { createContext, useContext, useState, useCallback } from "react";

export const AlertContext = createContext();

export const alertTypes = {
    error: 'error',
    success: 'success',
    info: 'info',
};

const initialAlert = {show: false, message: '', type: alertTypes.info};

export const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState(initialAlert);

    const addAlert = useCallback((message, type = alertTypes.info) => {
        setAlert({show: true, message, type});

        setTimeout(() => {
            setAlert(initialAlert);
        }, 5000)
    }, []);

    const hideAlert = useCallback(() => {
        setAlert(initialAlert)
    }, []);
    
    return (
        <AlertContext.Provider value={{alert, addAlert, hideAlert}}>
            {children}
        </AlertContext.Provider>
    );
};

export const useAlertContext = () => {
    const state = useContext(AlertContext);

    return state;
};