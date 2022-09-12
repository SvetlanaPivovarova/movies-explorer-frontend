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
                return Promise.reject(`Ошибка: ${res.status}`);
                throw 'Ошибка запроса';
            }
        })
            .then((result) => {
                return result;
            })
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

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-38', {
    headers: {
        authorization: 'e0e4f956-51a1-4eae-85fd-7abacc4211a4',
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    }
});

export {api};