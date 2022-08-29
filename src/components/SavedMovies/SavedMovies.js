import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";

function SavedMovies() {
    return(
        <>
            <NavigationSidebar isMenuOpened="true" />
            <Header loggedIn="true" />
            <SearchForm />
            <FilterCheckbox />
            <SavedMoviesCardList />
            <ButtonMore />
            <Footer />
        </>
    )
}

export default SavedMovies;