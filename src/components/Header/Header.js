import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.css';
import logoHeader from '../../images/logo.svg'; // Путь к изображению внутри сборки
import AccountIcon from "../AccountIcon/AccountIcon";

function Header( { modifier, loggedIn } ) {
    const headerClassName = (
        `header content ${modifier ? 'header_type_lending' : 'header__navigation_type_hyde'}`
    );

    return(
        <header className={headerClassName}>
            <img className="header__logo" src={logoHeader} alt="Логотип сайта"/>
            {loggedIn?
                (
                    <nav className="header__navigation">
                        <NavLink
                            to="/movies"
                            className="header__navigation-item"
                            activeClassName="header__navigation-item_active">
                            Фильмы
                        </NavLink>
                        <NavLink
                            to="/saved-movies"
                            className="header__navigation-item"
                            activeClassName="header__navigation-item_active">
                            Сохранённые фильмы
                        </NavLink>
                        <AccountIcon activeClassName="account-icon_type_bold" />
                    </nav>
                )
                :
                (<ul className="header__navigation">
                    <li className="header__navigation-item">Регистрация</li>
                    <li className="header__navigation-item">
                        <button className="header__auth-button">Войти</button>
                    </li>
                </ul>)
            }

        </header>
    );
}

export default Header;