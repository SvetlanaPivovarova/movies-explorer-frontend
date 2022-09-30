import React, { useState, useCallback, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Login.css";
import logoHeader from "../../images/logo.svg";
import { PATTERNS } from "../../utils/constants";

function Login({ onLogin }) {
    const [login, setLogin] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);

    const { EMAIL, PASSWORD } = PATTERNS;

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setLogin({...login, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    const validateForm = useCallback(() => {
        setEmailIsValid(EMAIL.test(login.email));
        setPasswordIsValid(PASSWORD.test(login.password));
    }, [EMAIL, PASSWORD, login.email, login.password]);

    useEffect(() => {
        validateForm();
        if (!isValid || !(emailIsValid && passwordIsValid)) {
            setFormIsValid(false);
        } else {
            setFormIsValid(true);
        }
    }, [emailIsValid, formIsValid, isValid, passwordIsValid, validateForm]);

    //const resetForm = useCallback(
    //    (newValues = {}, newErrors = {}, newIsValid = false) => {
    //        setLogin(newValues);
    //        setErrors(newErrors);
    //        setIsValid(newIsValid);
    //    },
    //    [setLogin, setErrors, setIsValid]
    //);

    function handleLogin(e) {
        e.preventDefault();
        onLogin(login.email, login.password);
    }

    return(
        <section className="login">
            <NavLink to="/">
                <img className="form__logo" src={logoHeader} alt="Логотип сайта"/>
            </NavLink>
            <h2 className="form__greeting">Рады видеть!</h2>
            <form className="form" onSubmit={handleLogin}>
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
                    disabled={!formIsValid}
                >
                    Войти
                </button>
            </form>
            <div className="form__signin">
                <p className="form__signin-text">Ещё не зарегистрированы?</p>
                <Link to="/signup" className="form__signin-text form__signin-text_link">Регистрация</Link>
            </div>
        </section>
    )
}

export default Login;