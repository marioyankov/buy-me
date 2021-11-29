import { Link } from 'react-router-dom';
import './Register.css';


const Register = () => {
    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
    }

    return (
        <section className="register">
            <form id="register" onSubmit={onRegisterHandler} method="POST">
                <article className="register-article">
                    <h1 className="register-title">Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="example@example.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn-submit" type="submit" value="Register" />

                    <span className="register-text">If you already have profile click <Link to="/login">here</Link></span>
                </article>
            </form>
        </section>
    );
}

export default Register;