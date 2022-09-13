import {API_URL} from "./constants";

class MoviesApi {
    constructor(url, {headers}) {
        this._url = url;
        this._headers = headers;
    }
    _makeRequest(promise) {
        return promise.then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
                throw 'Ошибка запроса';
            }
        })
            .then((result) => {
                return result;
            })
    }

    createSavedMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
    //    owner: _id,
    }) {
        const promise = fetch((`${this._url}/movies`), {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                nameRU,
                nameEN,
                thumbnail,
                movieId,
               // owner
            })
        });
        return this._makeRequest(promise);
    }

    deleteSavedFilm(id) {
        const promise = fetch((`${this._url}/movies/${id}`), {
            method: 'DELETE',
            headers: this._headers,
        });
        return this._makeRequest(promise);
    }

    changeLikeCardStatus(id, isLiked) {
        if (isLiked) {
            const promise = fetch((`${this._url}/cards/${id}/likes`), {
                method: 'PUT',
                headers: this._headers
            });
            return this._makeRequest(promise);
        }
        else {
            const promise = fetch((`${this._url}/cards/${id}/likes`), {
                method: 'DELETE',
                headers: this._headers,
            });
            return this._makeRequest(promise);
        }
    }
}

class Api {
    constructor(url, {headers}) {
        this._url = url;
        this._headers = headers;
    }

    _makeRequest(promise) {
        return promise.then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
                throw 'Ошибка запроса';
            }
        })
            .then((result) => {
                return result;
            })
    }

    getProfile() {
        const promise = fetch((`${this._url}/users/me`), {
            method: 'GET',
            headers: this._headers,
        });
        return this._makeRequest(promise);
    }

    createNewCard({ name, link, owner }) {
        const promise = fetch((`${this._url}/cards`), {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name,
                link,
                owner
            })
        });
        return this._makeRequest(promise);
    }

    deleteCard(id) {
        const promise = fetch((`${this._url}/cards/${id}`), {
            method: 'DELETE',
            headers: this._headers,
        });
        return this._makeRequest(promise);
    }

    editProfile({name, about}) {
        const promise = fetch((`${this._url}/users/me`), {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
            })
        });
        return this._makeRequest(promise);
    }

    changeLikeCardStatus(id, isLiked) {
        if (isLiked) {
            const promise = fetch((`${this._url}/cards/${id}/likes`), {
                method: 'PUT',
                headers: this._headers
            });
            return this._makeRequest(promise);
        }
        else {
            const promise = fetch((`${this._url}/cards/${id}/likes`), {
                method: 'DELETE',
                headers: this._headers,
            });
            return this._makeRequest(promise);
        }
    }

    editAvatar(newAvatar) {
        const promise = fetch((`${this._url}/users/me/avatar`), {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: newAvatar.avatar
            })
        });
        return this._makeRequest(promise);
    }
}

const moviesApi = new MoviesApi(API_URL, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    }
});

export default moviesApi;
