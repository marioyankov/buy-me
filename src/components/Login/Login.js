import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

import { useAuthContext } from '../../contexts/AuthContexts';
import { useAlertContext, types } from '../../contexts/AlertContext';

import * as authService from '../../services/authService';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const { addAlert } = useAlertContext();

    const onFormSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password, true)
            .then(authData => {
                login(authData);
                authService.userLoggedIn(authData);
                addAlert('You have successfully logged in!', types.success);
                navigate('/');
            })
            .catch(authService.gotError);
    };

    return (
        <section className="login">
            <form id="login" onSubmit={onFormSubmit} method="POST">

                <article className="login-article">
                    <h1 className="login-title">Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                    />
                    <label htmlFor="login-pass">Password: </label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        placeholder="password"
                    />
                    <input type="submit" className="btn-submit" value="Login" />

                    <span className="login-text">If you don't have profile click <Link to="/register">here</Link></span>
                </article>
            </form>
        </section>
    );
}

export default Login;