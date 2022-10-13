import {MOVIES_API_URL} from "./constants";

class MoviesApi {
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }

    _makeRequest(promise) {
        return promise.then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}: ${res.statusText}`);
            }
        })
            .then((result) => {
                return result;
            })
    }

    getMovies() {
        const promise = fetch((`${this._url}`), {
            method: 'GET',
            headers: this._headers,
        });
        return this._makeRequest(promise);
    }
}

const moviesApi = new MoviesApi({
    url: MOVIES_API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

export default moviesApi;