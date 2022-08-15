import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "../Preloader/Preloader"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
//import Preloader from "../Preloader/Preloader";


function Movies() {
    return(
        <>
            <Header />
            <SearchForm />
            <FilterCheckbox />
        </>

    )
}

export default Movies;