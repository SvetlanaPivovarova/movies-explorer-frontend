export const SHORT_MOVIE_DURATION = 40;

export const BASE_URL = 'https://api.nomoreparties.co';
export const MOVIES_API_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const API_URL = 'https://api.pivovarova.diploma.nomoredomains.xyz';

export const ERROR_REQUEST_TEXT = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const ERROR_SEARCH_TEXT = 'Ничего не найдено';
export const NO_MOVIE_DATA = 'Нет данных';

export const SCREEN_SIZE = {
    DESKTOP: 1024,
    TAB: 719,
    MOBILE: 320
};

export const MOVIES_NUMBER = {
    DESKTOP_MOVIES: 12,
    TAB_MOVIES: 8,
    MOBILE_MOVIES: 5
}

export const ADDITIONAL_MOVIES_NUMBER = {
    DESKTOP_ADDITIONAL_MOVIES: 3,
    TAB_ADDITIONAL_MOVIES: 2,
    MOBILE_ADDITIONAL_MOVIES: 2,
}

export const PATTERNS = {
    NAME: /^[А-Яа-яa-zA-Z- ]+$/,
    EMAIL: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,4})$/i,
    PASSWORD: /^[A-Za-z0-9-!@#$%^&*]+$/,
    URL: /^https?:\/\/(www\.)?[a-zA-Z0-9]+\.[\w\d\-._~:?#[\]@!$&'()*+,;=]{2,}#?/
};