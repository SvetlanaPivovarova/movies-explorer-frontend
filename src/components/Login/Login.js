import React, { useState } from "react";
import "./Login.css";
import logoHeader from "../../images/logo.svg";
import {Link} from "react-router-dom";

function Login({onLogin}) {
    const [login, setLogin] = useState({});

    const handleChange = (event) => {
        const { value, name } = event.target;
        setLogin({ ...login, [name]: value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(login.password, login.email);
    }

    return(
        <section className="login">
            <img className="form__logo" src={logoHeader} alt="Логотип сайта"/>
            <h2 className="form__greeting">Рады видеть!</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="e-mail" className="form__label">E-mail</label>
                <input
                    type="e-mail"
                    name="email"
                    className="form__text form__text_type_email"
                    required
                    minLength="2"
                    maxLength="40"
                    value={login.email || ''}
                    onChange={handleChange}
                />
                <span id="email-error" className="form__error"/>
                <label htmlFor="e-mail" className="form__label">Пароль</label>
                <input
                    type="password"
                    name="password"
                    className="form__text form__text_type_password"
                    required
                    minLength="5"
                    maxLength="40"
                    value={login.password || ''}
                    onChange={handleChange}
                />
                <span id="password-error" className="form__error"/>
                <button
                    type="submit"
                    className="form__button form__button_type_login"
                >
                    Войти
                </button>
            </form>
            <div className="form__signin">
                <p className="form__signin-text">Ещё не зарегистрированы?</p>
                <Link to="/sign-up" className="form__signin-text form__signin-text_link">Регистрация</Link>
            </div>
        </section>
    )
}

export default Login;