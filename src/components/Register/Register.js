import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <section className="register">
            <form id="register">
                <article className="register-article">
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="example@example.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    <span>If you already have profile click <NavLink to="/login">here</NavLink></span>
                </article>
            </form>
        </section>
    );
}

export default Register;