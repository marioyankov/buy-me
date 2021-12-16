import { useAlertContext } from "../../../contexts/AlertContext";

import './Alert.css';

const Alert = () => {
    const {alert, hideAlert} = useAlertContext();

    if (!alert.show) {
        return null;
    }

    return (
        <article className={alert.type}>
            <span className="close-btn" onClick={hideAlert}>&times;</span>
            <span className="alert-message">{alert.message}</span>
        </article>
    );
};

export default Alert;