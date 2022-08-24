import React from 'react';
import './NavTab.css'

function NavTab() {
    return(
        <section className="content content_color_grey">
            <nav className="nav-tab">
                <ul className="nav-tab__items">
                    <li className="nav-tab__item">
                        <a href="#about-project" className="nav-tab__item-link">
                            О проекте
                        </a>
                    </li>
                    <li className="nav-tab__item">
                        <a href="#about-techs" className="nav-tab__item-link">
                            Технологии
                        </a>
                    </li>
                    <li className="nav-tab__item">
                        <a href="#about-student" className="nav-tab__item-link">
                            Студент
                        </a>
                    </li>
                </ul>

            </nav>
        </section>
    )
}

export default NavTab;