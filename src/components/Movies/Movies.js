import React, {useState} from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";


function Movies({ isLoading, search, setSearch, error, getMovies }) {
    //const [isSearchQueryEntered, setIsSearchQueryEntered] = useState(false);
    console.log(search);
    console.log(error);

    return(
        <>
            <NavigationSidebar isMenuOpened="true" />
            <Header loggedIn="true" />
            <SearchForm
                search={search}
                setSearch={setSearch}
                getMovies={getMovies}
            />
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