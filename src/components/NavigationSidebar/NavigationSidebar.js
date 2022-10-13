import React from "react";
import "./NavigationSidebar.css";
import {NavLink} from "react-router-dom";
import AccountIcon from "../AccountIcon/AccountIcon";

function NavigationSidebar({ isMenuOpened }) {
    return(
        <div className={`menu ${isMenuOpened && "menu_opened"}`}>
                <input className="menu__checkbox-pseudo" id="menu-toggle" type="checkbox"/>
                <label className="menu-btn" htmlFor="menu-toggle">
                    <span />
                </label>
                <nav className="menu__nav">
                    <div className="menu__link-group">
                        <NavLink
                            exact to="/"
                            className="menu__nav-item"
                            activeClassName="menu__nav_active">
                            Главная
                        </NavLink>
                        <NavLink
                            to="/movies"
                            className="menu__nav-item"
                            activeClassName="menu__nav_active">
                            Фильмы
                        </NavLink>
                        <NavLink
                            to="/saved-movies"
                            className="menu__nav-item menu__nav-item_type_last"
                            activeClassName="menu__nav_active">
                            Сохранённые фильмы
                        </NavLink>
                        <AccountIcon activeClassName="account-icon_type_underlined" />
                    </div>

                </nav>
            </div>
    )
}

export default NavigationSidebar;