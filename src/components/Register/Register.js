import React, { useState } from "react";
import "./Register.css";
import logoHeader from "../../images/logo.svg";
import {Link} from "react-router-dom";

function Register({ onRegister, error }) {
    const [login, setLogin] = useState({ email: "", password: "", name: "" });
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValues({...values, [name]: value});
        console.log('login:', values);
    };

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password, name } = values;
        console.log('email:', email);
        if (onRegister && password && email && name) {
            onRegister(email, password, name);
            console.log('login', login);
        }
    }

    return(
        <section className="register">
            <img className="form__logo" src={logoHeader} alt="Логотип сайта"/>
            <h2 className="form__greeting">Добро пожаловать!</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="user" className="form__label">Имя</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    className="form__text form__text_type_name"
                    required
                    minLength="2"
                    maxLength="40"
                    value={values.name || ''}
                    onChange={handleChange}
                    />
                    <span id="user-error" className="form__error"/>
                <label htmlFor="e-mail" className="form__label">E-mail</label>
                    <input
                    type="email"
                    name="email"
                    className="form__text form__text_type_email"
                    required
                    minLength="2"
                    maxLength="40"
                    value={values.email || ''}
                    onChange={handleChange}
                    />
                    <span id="email-error" className="form__error"/>
                <label htmlFor="e-mail" className="form__label">Пароль</label>
                <input
                    type="text"
                    name="password"
                    className="form__text form__text_type_email"
                    required
                    minLength="5"
                    maxLength="40"
                    value={values.password || ''}
                    onChange={handleChange}
                />
                <span id="password-error" className="form__error"/>
                {error?
                <p>{error.message}</p>
                : ''
                }
                <button type="submit" className="form__button">Зарегистрироваться</button>
            </form>
            <div className="form__signin">
                <p className="form__signin-text">Уже зарегистрированы? </p>
                <Link to="/sign-in" className="form__signin-text form__signin-text_link">Войти</Link>
            </div>
        </section>
    )
}

export default Register;