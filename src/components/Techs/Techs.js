import React from 'react';
import './Techs.css';

function Techs() {
    return(
        <section className="content content_color_grey content__section">
            <h2 className="content__heading">Технологии</h2>
            <div className="techs">
                <p className="techs__title">7 технологий</p>
                <p className="techs__text">
                    На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.
                </p>
                <ul className="techs__icons">
                    <li className="techs__icon">HTML</li>
                    <li className="techs__icon">CSS</li>
                    <li className="techs__icon">JS</li>
                    <li className="techs__icon">React</li>
                    <li className="techs__icon">Git</li>
                    <li className="techs__icon">Express.js</li>
                    <li className="techs__icon">mongoDB</li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;