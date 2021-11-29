import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const onFormSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
    };

    return (
        <section className="login">
            <form id="login" onSubmit={onFormSubmit}>

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