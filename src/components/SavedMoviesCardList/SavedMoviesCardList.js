import React from "react";
import {initialCards} from "../../utils/data";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMoviesCardList({ movies, onMovieLike }) {
    return(
        <section className="movies-list content content_type_small-padding">
            {movies.map((card) => (
                card.isLiked ?
                <MoviesCard
                item={card}
                key={card._id}
                onMovieLike={onMovieLike}
                //isLiked={isLiked}
                /> : ''

            ))
            }
        </section>
    )
}

export default SavedMoviesCardList;