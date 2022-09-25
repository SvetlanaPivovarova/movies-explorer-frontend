import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";

function SavedMovies({ isLoggedIn, search, setSearch, getMovies, movies, createSavedMovie, onMovieDelete }) {
    return(
        <>
            <NavigationSidebar isMenuOpened="true" />
            <Header
                modifier={false}
                loggedIn={isLoggedIn}
            />
            <SearchForm
                search={search}
                setSearch={setSearch}
                getMovies={getMovies}
            />
            <MoviesCardList
                movies={movies}
                onMovieLike={createSavedMovie}
                onMovieDelete={onMovieDelete}
            />
            <ButtonMore />
            <Footer />
        </>
    )
}

export default SavedMovies;