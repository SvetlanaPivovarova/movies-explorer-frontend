import React, {useState, useEffect} from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";

function Movies({
                    isLoading,
                    search,
                    setSearch,
                    errorEmpty,
                    errorRequest,
                    filterMovies,
                    filterSavedMovies,
                    movies,
                    onMovieLike,
                    isLoggedIn,
                    onMovieDelete,
                    savedMovies
                }) {
    const getScreenWidth = () => {
        return document.documentElement.clientWidth;
    };

    const [screenSize, setScreenSize] = useState({ width: getScreenWidth() })
    const [moviesNumber, setMoviesNumber] = useState(0);
    const [addingMoviesNumber, setAddingMoviesNumber] = useState(0)
    const [renderingMovies, setRenderingMovies] = useState([]);
    const [isButtonMoreShown, setIsButtonMoreShown] = useState(false);

    useEffect(() => {
        let delay = null;

        const resizeHandler = () => {
            clearTimeout(delay);
            delay = setTimeout(() => {
                setScreenSize({ width: getScreenWidth() });
            }, 300)
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    useEffect(() => {
        if (screenSize.width > 1024) {
            if (!moviesNumber) {
                setMoviesNumber(12)
            }
            setAddingMoviesNumber(3);
        } else if (screenSize.width > 719) {
            if (!moviesNumber) {
                setMoviesNumber(8)
            }
            setAddingMoviesNumber(2);
        } else if (screenSize.width > 320) {
            if (!moviesNumber) {
                setMoviesNumber(5)
            }
            setAddingMoviesNumber(2);
        }
    }, [moviesNumber, screenSize.width]);

    useEffect(() => {
        const moreRenderingMovies = movies.slice(0, moviesNumber);
        setRenderingMovies(moreRenderingMovies);
        console.log('movies.length:', movies.length)
        if (moreRenderingMovies.length < movies.length) {
            setIsButtonMoreShown(true);
        } else setIsButtonMoreShown(false);
    }, [addingMoviesNumber, moviesNumber, movies]);

    function addMoreMovie() {
        setMoviesNumber(moviesNumber + addingMoviesNumber);
        console.log('MoviesNumber:', moviesNumber);
    }

    return(
        <>
            <NavigationSidebar isMenuOpened="true" />
            <Header loggedIn={isLoggedIn} />
            <SearchForm
                search={search}
                setSearch={setSearch}
                filterMovies={filterMovies}
                filterSavedMovies={filterSavedMovies}
                //getMovies={getMovies}
            />
            {isLoading
                ?
                <Preloader />
                :
                errorRequest
                    ?
                    <p className="movies__error-empty">{errorRequest}</p>
                    :
                errorEmpty
                    ?
                        <p className="movies__error-empty">{errorEmpty}</p>
                        :

                        <>
                            <MoviesCardList
                                movies={renderingMovies}
                                onMovieLike={onMovieLike}
                                onMovieDelete={onMovieDelete}
                                savedMovies={savedMovies}
                            />
                            <ButtonMore
                                onClick={addMoreMovie}
                                isVisible={isButtonMoreShown}
                            />
                        </>
            }

            <Footer />
        </>

    )
}

export default Movies;