import { SHORT_MOVIE_DURATION } from "./constants";
import {useMemo} from "react";

export const useMovies = (movies, query = '', isShort) => {
    const allSearchedMovies = useMemo(() => {
        const allMovies = [...movies].filter(({ nameRU }) => {
            return nameRU.toLowerCase().includes(query.toLowerCase().trim());
        });
        return query
        ? isShort
            ? allMovies.filter(({ duration }) => duration <= SHORT_MOVIE_DURATION)
                : allMovies
            : movies;
    }, [movies, query, isShort]);
    return allSearchedMovies;
}
