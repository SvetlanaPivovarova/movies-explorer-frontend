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
                         //isSearchedInSave,
                         filterSavedMovies,
                         filteredSavedMovies,
                         savedMovies,
                         createSavedMovie,
                         onMovieDelete}) {
    const [isSearchedInSave, setIsSearchedInSave] = useState('');
    //const [search, setSearch] = useState({query: '', isShort: false});
    //const [filteredMovies, setFilteredMovies] = useState(movies);
    //const [error, setError] = useState('');

    //const searchInSavedMovies = (search) => {
    //    if (!!movies.length) {
    //        const filteredMovies = filtering(movies, search.query, search.isShort);
    //        setFilteredMovies(filteredMovies);
    //        if (filteredMovies.length === 0) {
    //            setError('Ничего не найдено');
    //        } else setError('');
    //    }
    //    setSearch(search);
    //};

    //useEffect(() => {
    //    if (movies.length) {
    //        const filteredMovies = filtering(movies, search.query, search.isShort);
    //        setFilteredMovies(filteredMovies);
    //        if (filteredMovies.length === 0) {
    //            setError('Ничего не найдено');
    //        } else setError('');
    //    }
    //}, [filtering, movies, search.query, search.isShort]);

    // {error && <p className='movies__error-empty' >{error}</p> }


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
                filterSavedMovies={filterSavedMovies}
                setIsSearchedInSave={setIsSearchedInSave}
                //getMovies={searchInSavedMovies}
            />
            <MoviesCardList
                movies={isSearchedInSave ? filteredSavedMovies : savedMovies}
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