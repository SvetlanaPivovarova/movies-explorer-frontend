import React, { useState, useEffect } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";

function SavedMovies({ isLoggedIn,
                         search,
                         setSearch,
                         filterMovies,
                         filterSavedMovies,
                         savedMovies,
                         createSavedMovie,
                         onMovieDelete,
                         saved}) {
    const [isSearchedInSave, setIsSearchedInSave] = useState('');
    const [searchInSaved, setSearchedInSaved] = useState({ query: '', isShort: false })
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        if(savedMovies.length) {
            const filteredSavedMovies = filterSavedMovies(savedMovies, searchInSaved.query, searchInSaved.isShort);
            setFilteredMovies(filteredSavedMovies);
        }
    }, [savedMovies, searchInSaved.query, searchInSaved.isShort, filterSavedMovies, saved]);

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
                filterMovies={filterMovies}
                setIsSearchedInSave={setIsSearchedInSave}
                setSearchedInSaved={setSearchedInSaved}
            />
            <MoviesCardList
                movies={isSearchedInSave ? filteredMovies : savedMovies}
                savedMovies={savedMovies}
                onMovieLike={createSavedMovie}
                onMovieDelete={onMovieDelete}
            />
            <ButtonMore />
            <Footer />
        </>
    )
}

export default SavedMovies;