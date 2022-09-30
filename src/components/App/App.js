import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";

import './App.css';
import SavedMovies from "../SavedMovies/SavedMovies";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import * as auth from "../../utils/auth";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import {ERROR_REQUEST_TEXT, ERROR_SEARCH_TEXT, SHORT_MOVIE_DURATION } from "../../utils/constants";
import ProtectedRoute from "../ProtectedRoute";
import toolTipIconSuc from '../../images/successfuly.svg';
import toolTipIconUnsuc from '../../images/unsuccessfuly.svg';
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [errorEmpty, setErrorEmpty] = useState('');

    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [savedMoviesFromServ, setSavedMoviesFromServ] = useState([]);

    const [search, setSearch] = useState({ query: '', isShort: false });
    const [isSearched, setIsSearched] = useState(false);
    const [searchedMovies, setSearchedMovies] = useState([]);

    const [tooltipMessage, setTooltipMessage] = useState('');
    const [messageIcon, setMessageIcon] = useState('');
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

    const history = useHistory();

    //async token check
    useEffect(() => {
        async function checkToken() {
            try {
                //setIsLoading(true);
                const user = await mainApi.getProfile();
                setLoggedIn(true);
                const savedMoviesNew = await mainApi.getSavedMovies();
                setSavedMoviesFromServ(savedMoviesNew);
                setCurrentUser(user.data);
                history.push('/movies');
            } catch (error) {
                setLoggedIn(false);
                console.log(error);
            }
            //finally {
            //    setIsLoading(false);
            //}
        }
        checkToken();
    }, []);

    // регистрация
    // авторизация
    // async
    async function handleLogin(email, password) {
        try {
            setIsLoading(true);
            //await auth.authorize(email, password);
            const _id = await auth.authorize(email, password);
            console.log('_id', _id);
            if (_id) {
                setLoggedIn(true);
                const [savedMoviesN, user] = await Promise.all([mainApi.getSavedMovies(), mainApi.getProfile()]);
                setSavedMoviesFromServ(savedMoviesN);
                setCurrentUser(user.data);
                console.log('savedM:', savedMoviesN);
                console.log('user:', user.data);
                history.push('/movies');
            }
        } catch (error) {
            setIsInfoTooltipOpen(true);
            setTooltipMessage('Что-то пошло не так!\n' +
                'Попробуйте ещё раз.');
            setMessageIcon(toolTipIconUnsuc);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleRegister(email, password,  name) {
        try {
            setIsLoading(true);
            await auth.register({ email, password,  name });
            await handleLogin(email, password);
        } catch (error) {
            setIsInfoTooltipOpen(true);
            setTooltipMessage('Что-то пошло не так!\n' +
                'Попробуйте ещё раз.');
            setMessageIcon(toolTipIconUnsuc);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    // выход из аккаунта
    const handleSignOut = () => {
        localStorage.clear();
        setLoggedIn(false);
        setCurrentUser({});
        setSavedMovies([]);
        setSearchedMovies([]);
        history.push('/');
    }

    // обновляет информацию о пользователе (email и имя)
    const updateUserProfile = (name, email) => {
        mainApi.editProfile({ name, email })
            .then(({ data: newUser }) => {
                setCurrentUser(newUser);
                const {email, name} = newUser;
                console.log('data:', {email, name});
                setIsInfoTooltipOpen(true);
                setTooltipMessage('Данные успешно обновлены!');
                setMessageIcon(toolTipIconSuc);
            })
            .catch((err) => {
                setIsInfoTooltipOpen(true);
                setTooltipMessage('Что-то пошло не так!\n' +
                    'Попробуйте ещё раз.');
                setMessageIcon(toolTipIconUnsuc);
                console.log(err);
                throw err;
            });
    }

    // фильтрация
    const filteringMovies = (movies, query, isShort) => {
        const allSearchedMovies = [...movies].filter(({ nameRU }) => {
            return nameRU.toLowerCase().includes(query.toLowerCase().trim());
        });
        return query
            ? isShort
                ? allSearchedMovies.filter(({ duration }) => duration <= SHORT_MOVIE_DURATION)
                : allSearchedMovies
            : movies;
    }
    
    useEffect(() => {
        if (movies.length) {
            const filteredMovies = filteringMovies(movies, search.query, search.isShort);
            setSearchedMovies(filteredMovies);
            localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
            if (filteredMovies.length === 0) {
                setErrorEmpty(ERROR_SEARCH_TEXT);
            } else setErrorEmpty('');
            }
        }, [movies, errorEmpty, search.query, search.isShort]);

    useEffect(() =>{
        if (localStorage.getItem('searchedMovies')) {
            setSearchedMovies(JSON.parse(localStorage.getItem('searchedMovies')));
        }
        if (localStorage.getItem('search')) {
            setSearch(JSON.parse(localStorage.getItem('search')));
        }
    }, [])

    // getting all movies
    //Как только поиск произведён, текст запроса, найденные фильмы и состояние переключателя
    // короткометражек сохраняются в хранилище, а блок результатов появляется.

    async function getAllMovies(req) {
        try {
            setIsLoading(true);
            const allMovies = await moviesApi.getMovies();
            setMovies(allMovies);
            localStorage.setItem('allMovies', JSON.stringify(allMovies));
            setIsSearched(true);
            setSearch(req);
            localStorage.setItem('search', JSON.stringify(req));
        }
        catch (error) {
            setError(ERROR_REQUEST_TEXT);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('allMovies')) {
            setMovies(JSON.parse(localStorage.getItem('allMovies')))
            console.log('фильмы есть', movies);
        }
    }, []);

    useEffect(() => {
        if(isSearched) {
            if(!movies.length) {
                getMovies();
            }
        }
    }, [isSearched, movies.length]);

    const getMovies = (req) => {
        const cashedMovies = JSON.parse(localStorage.getItem('allMovies'));
        if (cashedMovies === null) {
            setIsLoading(true);
            moviesApi.getMovies()
                .then((data) => {
                    setMovies(data);
                    localStorage.setItem('allMovies', JSON.stringify(data));
                    setIsSearched(true);
                })
               .catch(() => {
                    setError(ERROR_REQUEST_TEXT);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        } else {
            const filteredMovies = filteringMovies(cashedMovies, req.query, req.isShort);
            setSearchedMovies(filteredMovies);
            localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
            setIsSearched(true);
            if (filteredMovies.length === 0) {
                setErrorEmpty(ERROR_SEARCH_TEXT);
            } else setErrorEmpty('');
        }

        setSearch(req);
        localStorage.setItem('search', JSON.stringify(req));
    };

    const createSavedMovie = (item) => {
        mainApi.createSavedMovie(item)
            .then((res) => {
                const newSavedMovies = [...savedMovies, res];
                setSavedMovies(newSavedMovies);
                localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
            //.then((newSavedMovie) => {
                console.log('saved', res._id);
            //    setSavedMovies([...savedMovies, newSavedMovie]);
            //    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
                console.log('savedMovies:', savedMovies);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleDeleteMovie = (movieId) => {
        mainApi.deleteSavedFilm(movieId)
            .then(() => {
                const filteredMovies = savedMovies.filter(
                    (item) => item._id !== movieId
                );
                setSavedMovies(filteredMovies);
                localStorage.setItem('savedMovies', JSON.stringify(filteredMovies));
            })
            .catch((err) => console.log(err));
    }

    const closePopup = () => {
        setIsInfoTooltipOpen(false);
        setTooltipMessage('');
        setMessageIcon('');
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
            <NavigationSidebar isMenuOpened={loggedIn} />
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <ProtectedRoute path="/movies" isLoggedIn={loggedIn}>
                        <Movies
                            isLoading={isLoading}
                            isSearched={isSearched}
                            search={search}
                            setSearch={setSearch}
                            errorEmpty={errorEmpty}
                            errorRequest={error}
                            filterMovies={getMovies}
                            movies={isSearched ? searchedMovies : []}
                            onMovieLike={createSavedMovie}
                            isLoggedIn={loggedIn}
                            onMovieDelete={handleDeleteMovie}
                            savedMovies={savedMoviesFromServ}
                        />
                </ProtectedRoute>
                <ProtectedRoute path="/saved-movies" isLoggedIn={loggedIn}>
                    <SavedMovies
                        isLoggedIn={loggedIn}
                        search={search}
                        setSearch={setSearch}
                        filterMovies={getAllMovies}
                        filterSavedMovies={filteringMovies}
                        savedMovies={savedMoviesFromServ}
                        createSavedMovie={createSavedMovie}
                        onMovieDelete={handleDeleteMovie}
                    />
                </ProtectedRoute>
                <ProtectedRoute path="/profile" isLoggedIn={loggedIn}>
                    <Profile
                        isLoggedIn={loggedIn}
                        onEdit={updateUserProfile}
                        onExit={handleSignOut}
                    />
                </ProtectedRoute>
                <Route path="/signup">
                    <Register
                        onRegister={handleRegister}
                    />
                </Route>
                <Route path="/signin">
                    <Login onLogin={handleLogin} />
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>

            <InfoTooltip
                isOpen={isInfoTooltipOpen}
                messageIcon={messageIcon}
                tooltipMessage={tooltipMessage}
                onClose={closePopup}
            />

        </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
