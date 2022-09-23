import {API_URL, BASE_URL} from "./constants";

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

    createSavedMovie(movie) {
        const {
            country,
            director,
            duration,
            year,
            description,
            trailerLink,
            nameRU,
            nameEN
        } = movie;
        const promise = fetch((`${this._url}/movies`), {
            method: 'POST',
            //credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image: `${BASE_URL}${movie.image.url}`,
                trailerLink,
                nameRU,
                nameEN,
                thumbnail: `${BASE_URL}${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
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
                headers: this._headers,
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
            //credentials: 'include',
        });
        return this._makeRequest(promise);
    }

    editProfile({name, email}) {
        const promise = fetch((`${this._url}/users/me`), {
            method: 'PATCH',
            headers: this._headers,
            //credentials: 'include',
            body: JSON.stringify({
                name: name,
                email: email
            })
        });
        return this._makeRequest(promise);
    }
}

const mainApi = new MainApi(API_URL, {
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    }
});

export default mainApi;
