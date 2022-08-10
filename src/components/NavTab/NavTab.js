import React from 'react';
import './NavTab.css'

function NavTab() {
    return(
        <section className="content content_color_grey">
            <nav className="nav-tab">
                <ul className="nav-tab__items">
                    <li className="nav-tab__item">О проекте</li>
                    <li className="nav-tab__item">Технологии</li>
                    <li className="nav-tab__item">Студент</li>
                </ul>

            </nav>
        </section>
    )
}

export default NavTab;