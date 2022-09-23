import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import "./MoviesCard.css";
import {BASE_URL} from "../../utils/constants";

function MoviesCard({item, savedMovies, onMovieLike, onMovieDelete}) {
    const currentUser = React.useContext(CurrentUserContext);
    const { _id } = currentUser;
    // Определяем, являемся ли мы владельцем текущей карточки
    //const isOwn = item.owner._id === currentUser._id;

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    //const isLiked = item.likes.some(i => i._id === currentUser._id);

    const [isLiked, setIsLiked] = useState(false);
    const [imgUrl, setImgUrl] = useState('');

    let location = useLocation();

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
        const { _id } = item;
        console.log('id', _id);
        onMovieDelete(_id);
        setIsLiked(false);
    };

    const handleMovieClick = () => {
        window.open(item.trailerLink, '_blank');
    }

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const moviesCardLikeButtonClassName = (
        `movies-card__like-icon ${isLiked ? 'movies-card__like-icon_active' : ''}`
    );

    // формат длительности фильма
    const durationFormat = (item) => {
        const hours = Math.floor(item.duration / 60);
        const min = item.duration % 60;
        return hours ? `${hours}ч ${min}м` : `${min}м`;
    }

    useEffect(() => {
        const url =
            location.pathname === '/saved-movies'
                ? item.image
                : item?.image?.url.includes(BASE_URL)
                    ? item.image
                    : `${BASE_URL}${item.image.url}`;
        setImgUrl(url);
    }, [item]);

    return(
        <article className="movies-card">
            <img
                className="movies-card__image"
                src={imgUrl}
                alt={item.nameRU}
                onClick={handleMovieClick}
            />
            <div className="movies-card__caption">
                <h2 className="movies-card__title">{item.nameRU}</h2>
                <div className="movies-card__like">
                    {location.pathname === '/saved-movies' && (
                        <button
                            className="movies-card__like-icon movies-card__delete-icon"
                            onClick={handleDeleteClick}
                            type="button"
                            aria-label="Удалить"
                        />
                    )}
                    {location.pathname === '/movies' && (
                        <button
                            className={moviesCardLikeButtonClassName}
                            onClick={handleLikeClick}
                            type="button"
                            aria-label="Нравится"
                        />
                    )}

                </div>
            </div>
            <p className="movies-card__duration">{durationFormat(item)}</p>
        </article>
    )
}

export default MoviesCard;