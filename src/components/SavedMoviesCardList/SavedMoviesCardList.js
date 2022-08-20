import React from "react";
import {initialCards} from "../../utils/data";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMoviesCardList() {
    return(
        <section className="movies-list content content_type_small-padding">
            {initialCards.map((card) => (
                card.isLiked ?
                <MoviesCard
                item={card}
                key={card._id}
                isLiked={card.isLiked}
                /> : ''

            ))
            }
        </section>
    )
}

export default SavedMoviesCardList;