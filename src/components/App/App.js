import { Route, Switch } from 'react-router-dom';
import './App.css';
import SavedMovies from "../SavedMovies/SavedMovies";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
    return (
        <div className="page">
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/movies">
                    <Movies />
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
