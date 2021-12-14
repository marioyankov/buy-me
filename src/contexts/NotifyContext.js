import { createContext, useContext, useState, useCallback } from "react";

export const NotifyContext = createContext();

export const types = {
    error: 'error',
    success: 'success',
    info: 'info',
}

const initialNotify = {show: false, message: '', type: types.info}

export const NotifyProvider = ({children}) => {
    const [notify, setNotify] = useState(initialNotify);

    const addNotification = useCallback((message, type = types.info) => {
        setNotification({show: true, message, type});
    }, []);

    const hideNotification = useCallback(() => setNotification(initialNotify), [])
    
    return (
        <NotificationContext.Provider value={{notification, addNotification, hideNotification}}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotificationContext = () => {
    const state = useContext(NotifyContext);

    return state;
};