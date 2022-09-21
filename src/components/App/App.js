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
//import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import * as auth from "../../utils/auth";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
//import {useMovies} from "../../utils/useMovies";
import {ERROR_REQUEST_TEXT, ERROR_SEARCH_TEXT, SHORT_MOVIE_DURATION } from "../../utils/constants";
import ProtectedRoute from "../ProtectedRoute";
import toolTipIconSuc from '../../images/successfuly.svg';
import toolTipIconUnsuc from '../../images/unsuccessfuly.svg';
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [errorEmpty, setErrorEmpty] = useState('');

    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);

    const [search, setSearch] = useState({ query: '', isShort: false });
    const [isSearched, setIsSearched] = useState(false);
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    const [tooltipMessage, setTooltipMessage] = useState('');
    const [messageIcon, setMessageIcon] = useState('');
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

    const history = useHistory();

    //const searchedMovies = useMovies(movies, search.query, search.isShort);
    //const searchedSavedMovies = useMovies(savedMovies, querySavedMovies, isChecked);

    // регистрация
    const handleRegister = (email, password, name) => {
        auth.register({ email, password, name })
            .then(() => {
                handleLogin(password, email);
                setIsInfoTooltipOpen(true);
                setTooltipMessage('Вы успешно зарегистрировались!');
                setMessageIcon(toolTipIconSuc);
            })
            .catch(err => {
                setErrorRegister(err);
                setIsInfoTooltipOpen(true);
                setTooltipMessage('Что-то пошло не так!\n' +
                    'Попробуйте ещё раз.');
                setMessageIcon(toolTipIconUnsuc);
                console.log(err);
            })
    }

    // авторизация
    const handleLogin = (password, email) => {
        auth.authorize(password, email)
            .then((res) => {
                setLoggedIn(true);
                setCurrentUser(res);
                history.push('/movies');
                console.log('loggedIn', loggedIn);
            })
            .catch((err) => {
                    setIsInfoTooltipOpen(true);
                    setTooltipMessage('Что-то пошло не так!\n' +
                        'Попробуйте ещё раз.');
                    setMessageIcon(toolTipIconUnsuc);
                    console.log(err);
            })
    }

    // выход из аккаунта
    const handleSignOut = () => {
        localStorage.removeItem('search');
        mainApi.signOut()
            .then(() => {
                setLoggedIn(false);
                setCurrentUser({});
                setSavedMovies([]);
                setSearchedMovies([]);
                localStorage.clear();
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //информация о пользователе
    const getUserInfo = () => {
        mainApi.getProfile()
            .then((user) => {
                console.log('data:', user.data);
                setCurrentUser(user.data);
                //setUserData(user.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getUserInfo();
    }, [loggedIn]);

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

    //useEffect(() => {
    //    checkToken();
    //}, []);

    //const checkToken = () => {
    //    const jwt = localStorage.getItem('jwt');
    //    if (jwt) {
    //        auth.checkToken(jwt)
    //            .then(() => {
    //                //setUserData(response.data.email);
    //                setLoggedIn(true);
     //               history.push('/movies');
     //           })
     //           .catch((err) => {
     //               console.log(err);
     //           })
      //  }
    //}

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
            console.log('queryFilm:', search.query);
            console.log('queryShort:', search.isShort);
            const filteredMovies = filteringMovies(movies, search.query, search.isShort);
            setSearchedMovies(filteredMovies);
            localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
            if (filteredMovies.length === 0) {
                console.log('filteredMovies.length', filteredMovies.length);
                setErrorEmpty(ERROR_SEARCH_TEXT);
                console.log(errorEmpty);
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

    const [errorRegister, setErrorRegister] = useState('');

    // getting movies
    //Как только поиск произведён, текст запроса, найденные фильмы и состояние переключателя
    // короткометражек сохраняются в хранилище, а блок результатов появляется.
    const getMovies = (req) => {
        if (!movies.length) {
            setIsLoading(true);
            moviesApi.getMovies()
                .then((data) => {
                    setMovies(data);
                    localStorage.setItem('movies', JSON.stringify(data));
                    setIsSearched(true);
                    console.log(data);

                })
                .catch(() => {
                    setError(ERROR_REQUEST_TEXT);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
        setSearch(req);
        localStorage.setItem('search', JSON.stringify(req));

    };

    const createSavedMovie = (item) => {
        mainApi.createSavedMovie(item)
            .then((newSavedMovie) => {
                setSavedMovies([...savedMovies, newSavedMovie]);
                localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
                console.log('savedMovies:', savedMovies);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //function handleMovieLike(movie) {
    //    const isLiked = movie.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
     //   api.changeLikeCardStatus(card._id, !isLiked)
     //       .then((newCard) => {
      //          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      //      })
      //      .catch((err) => {
      //          console.error(err);
      //          throw err;
      //      });
    //}

    const closePopup = () => {
        setIsInfoTooltipOpen(false);
        setTooltipMessage('');
        setMessageIcon('');
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <ProtectedRoute path="/movies" isLoggedIn={loggedIn}>
                        <Movies
                            isLoading={isLoading}
                            search={search}
                            setSearch={setSearch}
                            errorEmpty={errorEmpty}
                            getMovies={getMovies}
                            onMovieLike={createSavedMovie}
                            //movies={searchedMovies}
                            movies={isSearched ? searchedMovies : []}
                        />
                </ProtectedRoute>
                <ProtectedRoute path="/saved-movies" isLoggedIn={loggedIn}>
                    <SavedMovies
                        search={search}
                        setSearch={setSearch}
                        getMovies={getMovies}
                        movies={savedMovies}
                        createSavedMovie={createSavedMovie}
                    />
                </ProtectedRoute>
                <ProtectedRoute path="/profile" isLoggedIn={loggedIn}>
                    <Profile
                        data={currentUser}
                        onEdit={updateUserProfile}
                        onExit={handleSignOut}
                    />
                </ProtectedRoute>
                <Route path="/signup">
                    <Register
                        onRegister={handleRegister}
                        error={errorRegister}
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
