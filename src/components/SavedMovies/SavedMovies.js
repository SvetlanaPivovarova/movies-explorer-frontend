import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";

function SavedMovies({ search, setSearch, getMovies, movies, createSavedMovie }) {
    return(
        <>
            <NavigationSidebar isMenuOpened="true" />
            <Header loggedIn="true" />
            <SearchForm
                search={search}
                setSearch={setSearch}
                getMovies={getMovies}
            />
            <SavedMoviesCardList
                movies={movies}
                onMovieLike={createSavedMovie}
            />
            <ButtonMore />
            <Footer />
        </>
    )
}

export default SavedMovies;