import { useState } from "react";

import { gotError } from "../services/authService";

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            let user = localStorage.getItem(key);

            return user ? JSON.parse(user) : initialValue;
        } catch(err) {
            return gotError(err);
        }
    });

    const setItem = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));

            setState(value);
        } catch(err) {
            return gotError(err);
        }
    };

    return [ state, setItem];
};

export default useLocalStorage;