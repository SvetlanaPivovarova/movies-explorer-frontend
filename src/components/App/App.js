import { Route, Switch } from 'react-router-dom';
import {useState} from "react";

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

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [search, setSearch] = useState({ query: '' });

    // getting movies
    const getMovies = (req) => {
        if (!movies.length) {
            setIsLoading(true);
            moviesApi.getMovies()
                .then((data) => {
                    setMovies(data);
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
