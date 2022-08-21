import React from "react";
import "./ProfileInfo.css";

function ProfileInfo({ name, email }) {
    return(
        <section className="profile content">
            <h2 className="profile__greeting">
                Привет, {name}!
            </h2>
            <ul className="profile__info">
                <li className="profile__info-item profile__info-item_underlined">
                    <p className="profile__text">Имя</p>
                    <p className="profile__text profile__text-info">{name}</p>
                </li>
                <li className="profile__info-item">
                    <p className="profile__text">E-mail</p>
                    <p className="profile__text profile__text-info">{email}</p>
                </li>
            </ul>
            <button className="profile__button">Редактировать</button>
            <button className="profile__button profile__exit-button">Выйти из аккаунта</button>
        </section>
    )
}

export default ProfileInfo;