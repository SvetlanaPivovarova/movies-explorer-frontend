import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from "react";

import './App.css';
import SavedMovies from "../SavedMovies/SavedMovies";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import moviesApi from "../../utils/MoviesApi";
import {useMovies} from "../../utils/useMovies";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [movies, setMovies] = useState([]);
    //const [savedMovies, setSavedMovies] = useState([]);

    //const [search, setSearch] = useState('');
    const [search, setSearch] = useState({ query: '', isShort: false });
    const [isSearched, setIsSearched] = useState(false);
    //const [queryMovies, setQueryMovies] = useState('');
    //const [isShort, setIsShort] = useState(false);
   // const [searchRequestSavedMov, setSearchRequestSavedMov] = useState('')
   // const [isChecked, setIsChecked] = useState(false);


    const searchedMovies = useMovies(movies, search.query, search.isShort);
    console.log(searchedMovies);
    //const searchedSavedMovies = useMovies(savedMovies, querySavedMovies, isChecked);


    //useEffect(() => {
    //    if (movies.length) {
    //        const filteredMovies = filterMovies(movies, search);
    //        setSearchedMovies(filteredMovies);
    //        localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
    //        if (filteredMovies.length === 0) {
    //            setError('Ничего не найдено');
    //        } else setError('');
    //    }
    //}, [movies, search]);

   // useEffect(() => {
   //     if (localStorage.getItem('searchedMovies')) {
    //        setSearchedMovies(JSON.parse(localStorage.getItem('searchedMovies')));
    //    }
     //   if (localStorage.getItem('search')) {
     //       setSearch(JSON.parse(localStorage.getItem('search')));
     //   }
    //}, []);

    useEffect(() =>{

        if (localStorage.getItem('search')) {
            setSearch(JSON.parse(localStorage.getItem('search')));
        }
    }, [])

    // getting movies
    const getMovies = (req) => {
        if (!movies.length) {
            setIsLoading(true);
            moviesApi.getMovies()
                .then((data) => {
                    setMovies(data);
                    setIsSearched(true);
                    console.log(data);
                })
                .catch((err) => {
                    setError('Во время запроса произошла ошибка');
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
        setSearch(req);
        localStorage.setItem('search', JSON.stringify(req));
    };

    return (
        <div className="page">

            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/movies">
                    <Movies
                        isLoading={isLoading}
                        search={search}
                        setSearch={setSearch}
                        error={error}
                        getMovies={getMovies}
                        //movies={searchedMovies}
                        movies={isSearched ? movies : []}
                    />
                </Route>
                <Route path="/saved-movies">
                    <SavedMovies />
                </Route>
                <Route path="/signup">
                    <Register />
                </Route>
                <Route path="/signin">
                    <Login />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
