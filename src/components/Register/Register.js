import React from "react";
import "./Register.css";
import logoHeader from "../../images/logo.svg";
import {Link} from "react-router-dom";

function Register() {
    return(
        <section className="register">
            <img className="register__logo" src={logoHeader} alt="Логотип сайта"/>
            <h2 className="register__greeting">Добро пожаловать!</h2>
            <form className="form">
                <label htmlFor="user" className="form__label">Имя</label>
                    <input
                    type="text"
                    name="user"
                    id="name"
                    className="form__text form__text_type_name"
                    required
                    minLength="2"
                    maxLength="40"
                    />
                    <span id="user-error" className="form__error"/>
                <label htmlFor="e-mail" className="form__label">E-mail</label>
                    <input
                    type="email"
                    name="e-mail"
                    className="form__text form__text_type_email"
                    required
                    minLength="2"
                    maxLength="40"
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
                />
                <span id="password-error" className="form__error"/>
                <button type="submit" className="form__button">Зарегистрироваться</button>
            </form>
            <div className="register__signin">
                <p className="register__text">Уже зарегистрированы? </p>
                <Link to="/sign-in" className="register__text register__text_link">Войти</Link>
            </div>
        </section>
    )
}

export default Register;