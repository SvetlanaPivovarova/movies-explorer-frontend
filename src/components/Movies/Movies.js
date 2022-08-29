import React, {useState} from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "../Preloader/Preloader"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";


function Movies({ isLoading }) {
    const [isSearchQueryEntered, setIsSearchQueryEntered] = useState(false);

    return(
        <>
            <NavigationSidebar isMenuOpened="true" />
            <Header loggedIn="true" />
            <SearchForm />
            <FilterCheckbox />
            {isLoading?
                <Preloader />
                :
                <>
                    <MoviesCardList />
                    <ButtonMore />
                </>
            }

            <Footer />
        </>

    )
}

export default Movies;