import { SHORT_MOVIE_DURATION } from "./constants";

export const useMovies = (movies, query = '', isShort) => {
    const searchedMovies = () => {
        const allMovies = [...movies].filter(({ nameRU }) => {
            return nameRU.toLowerCase().includes(query.toLowerCase().trim());
        });
        return query
        ? isShort
            ? allMovies.filter(({ duration }) => duration <= SHORT_MOVIE_DURATION)
                : allMovies
            : movies;
    }
    return searchedMovies;
}
