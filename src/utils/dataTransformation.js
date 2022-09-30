import { PATTERNS } from "./constants";

const { URL } = PATTERNS;

export const getUrlForTrailer = (trailer) => {
    return URL.test(trailer) ? trailer : `https://youtube.com`;
};

// формат длительности фильма
export const durationFormat = (item) => {
    const hours = Math.floor(item.duration / 60);
    const min = item.duration % 60;
    return hours ? `${hours}ч ${min}м` : `${min}м`;
}