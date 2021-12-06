import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContexts';
import './Register.css';

import { userRegistered, gotError } from '../../backendlessConfig';


const Register = () => {
    const Backendless = require('backendless');
    const { login } = useContext(AuthContext);

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let confirmPassword = formData.get('confirm-password');

        try {
            if (password === confirmPassword) {
                let user = new Backendless.User();
                user.email = email;
                user.password = password;

                Backendless.UserService.register(user)
                    .then(authData => {
                        login(authData);
                        userRegistered();
                        // TODO: navigate
                    })
                    .catch(gotError);
            }
        } catch (e) {
            alert(e)
        }


    }

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
}

export default Register;