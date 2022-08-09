import logoHeader from '../../images/logo.svg'; // Путь к изображению внутри сборки
import React from 'react';
import './Header.css';

function Header() {
    return(
        <header className="header">
            <img className="header__logo" src={logoHeader} alt="Логотип сайта"/>
            <ul className="header__navigation">
                <li className="header__navigation-item">Регистрация</li>
                <li className="header__navigation-item">
                    <button className="header__auth-button">Войти</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;