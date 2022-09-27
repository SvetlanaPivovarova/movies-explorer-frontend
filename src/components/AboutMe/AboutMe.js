import React from 'react';
import './AboutMe.css';
import studentPhoto from '../../images/student-photo.jpg';

function AboutMe() {
    return(
        <section className="content content_color_black content__section">
            <h2 className="content__heading">Студент</h2>
            <div className="about-me">
                <div className="about-me__info">
                    <h3 className="about-me__name">Светлана</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 36 лет</p>
                    <p className="about-me__text">
                        Живу в&nbsp;Ижевске. Закончила кафедру радиотехники ИжГТУ. Замужем, воспитываем двух дочерей.
                        Несколько лет работала инженером-схемотехником по&nbsp;микроэлектронике на&nbsp;одном
                        из&nbsp;Ижевских заводов. Но&nbsp;решила круто изменить свою жизнь&nbsp;&mdash;
                        пошла учиться на&nbsp;фронтенд-разработчика. Но&nbsp;первые HTML-файлы были написаны еще 10&nbsp;лет назад.
                    </p>
                    <ul className="content__links">
                        <li className="content__link">
                            <a className="content__link-item" href="https://vk.com/id859528" target="_blank" rel="noreferrer">VK</a>
                        </li>
                        <li className="content__link">
                            <a className="content__link-item" href="https://github.com/SvetlanaPivovarova/" target="_blank" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </div>
                <img className="about-me__photo" src={studentPhoto} alt="Фотография"/>
            </div>
        </section>
    )
}

export default AboutMe;