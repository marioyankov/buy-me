import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContexts';
import { useAlertContext, types } from '../../contexts/AlertContext';
import * as authService from '../../services/authService';

import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const { addAlert } = useAlertContext();


    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let confirmPassword = formData.get('confirm-password');

        if (password === confirmPassword) {
            authService.register(email, password)
                .then(authData => {
                    login(authData);
                    addAlert('You have successfully registered!', types.success);
                    navigate('/');
                })
                .catch(error => {
                    authService.gotError(error);
                });
        } else {
            addAlert("Passwords don/'t match!", types.error);
        }
    };

    return (
        <section className="register">
            <form id="register" onSubmit={onRegisterHandler} method="POST">
                <article className="register-article">
                    <h1 className="register-title">Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="example@example.com" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn-submit" type="submit" value="Register" />

                    <span className="register-text">If you already have profile click <Link to="/login">here</Link></span>
                </article>
            </form>
        </section>
    );
};

export default Register;