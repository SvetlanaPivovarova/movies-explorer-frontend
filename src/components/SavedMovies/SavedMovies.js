import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";

function SavedMovies() {
    return(
        <>
            <Header />
            <SearchForm />
            <FilterCheckbox />
            <SavedMoviesCardList />
            <ButtonMore />
            <Footer />
        </>
    )
}

export default SavedMovies;