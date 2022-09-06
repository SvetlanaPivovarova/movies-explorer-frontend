import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
    //const [cards, setCards] = React.useState([]);

    return(
        <section className="movies-list content content_type_small-padding">
            {movies.map((card) => (
                <MoviesCard
                    item={card}
                    key={card.id}
                    isLiked={card.isLiked}
                />
            ))
            }
        </section>
    )
}

export default MoviesCardList;