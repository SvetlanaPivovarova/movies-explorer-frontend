import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return(
        <section className="portfolio content content_color_black">
            <h3 className="portfolio__heading">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="" target="_blank">
                        <p className="portfolio__link-text">Статичный сайт</p>
                        <button className="portfolio__link-icon" type="button" aria-label="Открыть ссылку">↗</button>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="" target="_blank">
                        <p className="portfolio__link-text">Адаптивный сайт</p>
                        <button className="portfolio__link-icon" type="button" aria-label="Открыть ссылку">↗</button>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="" target="_blank">
                        <p className="portfolio__link-text">Одностраничное приложение</p>
                        <button className="portfolio__link-icon" type="button" aria-label="Открыть ссылку">↗</button>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;