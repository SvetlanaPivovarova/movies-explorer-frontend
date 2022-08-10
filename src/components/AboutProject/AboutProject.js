import React from "react";
import "./AboutProject.css";

function AboutProject() {
    return(
        <section className="about-project content content_color_black">
            <h2 className="about-project__heading">О проекте</h2>
            <div className="about-project__columns">
                <article className="about-project__description">
                    <p className="about-project__title">Дипломный проект включал 5 этапов</p>
                    <p className="about-project__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
                    </p>
                </article>
                <article className="about-project__description">
                    <p className="about-project__title">На выполнение диплома ушло 5 недель</p>
                    <p className="about-project__text">
                        У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </article>
            </div>
            <div className="about-project__table">
                <p className="about-project__item about-project__item_type_bright">1 неделя</p>
                <p className="about-project__item about-project__item_type_pale">4 недели</p>
                <p className="about-project__item">Back-end</p>
                <p className="about-project__item">Front-end</p>
            </div>
        </section>

    )
}

export default AboutProject;