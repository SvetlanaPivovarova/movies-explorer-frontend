import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMoviesCardList({ movies, onMovieLike }) {
    return(
        <section className="movies-list content content_type_small-padding">
            {movies.map((card) => (
                <MoviesCard
                item={card}
                key={card._id}
                onMovieLike={onMovieLike}
                />

            ))
            }
        </section>
    )
}

export default SavedMoviesCardList;