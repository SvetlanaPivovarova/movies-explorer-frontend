import React, {useEffect, useState} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import "./MoviesCard.css";
import {BASE_URL} from "../../utils/constants";
//import savedMovies from "../SavedMovies/SavedMovies";

function MoviesCard({item, savedMovies, onMovieLike, onMovieDelete}) {
    const currentUser = React.useContext(CurrentUserContext);
    const { _id } = currentUser;
    // Определяем, являемся ли мы владельцем текущей карточки
    //const isOwn = item.owner._id === currentUser._id;

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    //const isLiked = item.likes.some(i => i._id === currentUser._id);

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const isSaved = savedMovies.find((movie) => movie.movieId === item.id);
        setIsLiked(isSaved);
    }, [item, savedMovies]);

    const handleLikeClick = () => {
        setIsLiked(true);
        if (isLiked) {
            const { _id } = savedMovies.find((movie) => movie.movieId === item.id);
            onMovieDelete(_id);
        } else {
            onMovieLike(item, _id);
            setIsLiked(true);
        }
    };

    const handleDeleteClick = () => {
        //onMovieDelete(item);
        setIsLiked(false);
    };

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const moviesCardLikeButtonClassName = (
        `movies-card__like-icon ${isLiked ? 'movies-card__like-icon_active' : ''}`
    );

    return(
        <article className="movies-card">
            <img className="movies-card__image" src={`${BASE_URL}${item.image.url}`} alt={item.nameRU}/>
            <div className="movies-card__caption">
                <h2 className="movies-card__title">{item.nameRU}</h2>
                <div className="movies-card__like">
                    <button
                        className={moviesCardLikeButtonClassName}
                        onClick={handleLikeClick}
                        type="button"
                        aria-label="Нравится"
                    />
                </div>
            </div>
            <p className="movies-card__duration">{item.duration}</p>
        </article>
    )
}

export default MoviesCard;