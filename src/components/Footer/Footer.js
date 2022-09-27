import React from "react";
import "./Footer.css";

function Footer() {
    return(
        <footer className="footer content content_color_black">
            <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__info-links">
                <p className="footer__copyright">&copy; 2020</p>
                <ul className="content__links content__links_type_footer">
                    <li className="content__link content__link_type_footer">
                        <a className="content__link-item content__link-item_type_footer" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="content__link content__link_type_footer">
                        <a className="content__link-item content__link-item_type_footer" href="https://github.com/SvetlanaPivovarova/" target="_blank" rel="noreferrer">Github</a>
                    </li>
                    <li className="content__link content__link_type_footer">
                        <a className="content__link-item content__link-item_type_footer" href="https://vk.com/id859528" target="_blank" rel="noreferrer">VK</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;