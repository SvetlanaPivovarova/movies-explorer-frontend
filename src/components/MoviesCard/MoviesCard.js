import React from "react";
//import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import "./MoviesCard.css";
import preview from "../../images/33-slova-o-dizayne.png";

function MoviesCard({item, isLiked}) {
    //const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    //const isOwn = item.owner._id === currentUser._id;

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    //const isLiked = item.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const moviesCardLikeButtonClassName = (
        `movies-card__like-icon ${isLiked ? 'movies-card__like-icon_active' : ''}`
    );

    return(
        <article className="movies-card">
            <img className="movies-card__image" src={preview} alt={item.name}/>
            <div className="movies-card__caption">
                <h2 className="movies-card__title">{item.name}</h2>
                <div className="movies-card__like">
                    <button className={moviesCardLikeButtonClassName} type="button" aria-label="Нравится" />
                </div>
            </div>
            <p className="movies-card__duration">{item.duration}</p>
        </article>
    )
}

export default MoviesCard;