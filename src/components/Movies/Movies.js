import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "../Preloader/Preloader"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
//import Preloader from "../Preloader/Preloader";


function Movies() {
    return(
        <>
            <Header loggedIn="true" />
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList />
            <ButtonMore />
            <Footer />
        </>

    )
}

export default Movies;