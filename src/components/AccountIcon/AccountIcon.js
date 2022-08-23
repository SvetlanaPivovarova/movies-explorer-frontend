import React from 'react';
import './AccountIcon.css';
import iconAccount from "../../images/iicon-account.svg";
import {NavLink} from "react-router-dom";

function AccountIcon({activeClassName}) {
    return(
        <NavLink
            to="/profile"
            className="account-icon"
            activeClassName={activeClassName}>
            <p className="account-icon__item">Аккаунт</p>
            <div className="account-icon__container">
                <img className="account-icon__icon" src={iconAccount} alt="Аккаунт" />
            </div>
        </NavLink>
    )
}

export default AccountIcon;