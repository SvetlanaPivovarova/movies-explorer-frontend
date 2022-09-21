import { API_URL } from "./constants";

class MainApi {
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
                //throw 'Ошибка запроса';
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

    getProfile() {
        const promise = fetch((`${this._url}/users/me`), {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        });
        return this._makeRequest(promise);
    }

    editProfile({name, email}) {
        const promise = fetch((`${this._url}/users/me`), {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                name: name,
                email: email
            })
        });
        return this._makeRequest(promise);
    }

    signOut() {
        const promise = fetch((`${this._url}/signout`), {
            method: 'GET',
            headers: this._headers,
            credentials: 'include'
        });
        return this._makeRequest(promise);
    }
}

const mainApi = new MainApi(API_URL, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    }
});

export default mainApi;
