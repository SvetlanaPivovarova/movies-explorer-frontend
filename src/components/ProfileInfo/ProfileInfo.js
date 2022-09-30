import React, { useCallback, useState, useEffect, useContext } from "react";
import "./ProfileInfo.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { PATTERNS } from "../../utils/constants";

function ProfileInfo({ onEdit, onExit }) {
    const { name, email } = useContext(CurrentUserContext);

    const [values, setValues] = useState({ name: name, email: email });
    const [errors, setErrors] = useState({ name: '' });
    const [isValid, setIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [nameIsValid, setNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);

    const { NAME, EMAIL } = PATTERNS;

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
        console.log('login:', values);
    };

    const validateForm = useCallback(() => {
        setNameIsValid(NAME.test(values.name));
        setEmailIsValid(EMAIL.test(values.email));
    }, [EMAIL, NAME, values.email, values.name]);

    useEffect(() => {
        validateForm();
        if (!isValid || !(nameIsValid && emailIsValid)) {
            setFormIsValid(false);
        } else {
            setFormIsValid(true);
        }
    }, [emailIsValid, formIsValid, isValid, nameIsValid, validateForm]);

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    function handleSubmit(e) {
        e.preventDefault();
        const { name, email } = values;
        console.log('email:', email);
        if (onEdit && email && name) {
            onEdit(name, email);
        }
        resetForm();
    }

    useEffect(() => {
        console.log({CurrentUserContext});
        setValues({ name, email });
    }, [name, email]);

    return(
        <section className="profile content">
            <h2 className="profile__greeting">
                Привет, {name}!
            </h2>
            <form className="profile__info" onSubmit={handleSubmit}>
                <li className="profile__info-item profile__info-item_underlined">
                    <label htmlFor="user" className="profile__text">Имя</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    className="profile__text profile__text-info"
                    required
                    minLength="2"
                    maxLength="40"
                    value={values.name || ''}
                    onChange={handleChange}
                    />
                </li>
                <span id="user-error" className="form__error"/>
                <li className="profile__info-item">
                    <label htmlFor="e-mail" className="profile__text">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        className="profile__text profile__text-info"
                        required
                        minLength="2"
                        maxLength="40"
                        value={values.email || ''}
                        onChange={handleChange}
                    />
                </li>
                <span id="email-error" className="form__error"/>
                <button type="submit" disabled={!formIsValid} className="profile__button">Редактировать</button>
            </form>
            <button
                className="profile__button profile__exit-button"
                onClick={onExit}
            >
                Выйти из аккаунта
            </button>
        </section>
    )
}

export default ProfileInfo;