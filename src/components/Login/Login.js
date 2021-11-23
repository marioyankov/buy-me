import { NavLink } from 'react-router-dom';

const Login = () => {

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="login">
            <form id="login" onSubmit={onFormSubmit}>

                <article className="login-article">
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="example@example.com" />
                    <label htmlFor="login-pass">Password: </label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <span>If you don't have profile click <NavLink to="/register">here</NavLink></span>
                </article>
            </form>
        </section>
    );
}

export default Login;