import React, {useEffect, useState} from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

function SearchForm({ search, setSearch, filterMovies, setIsSearchedInSave, setSearchedInSaved }) {
    let location = useLocation();

    const [frontSearch, setFrontSearch] = useState(search);
    const [error, setError] = useState('');
    const [frontSearchInSaved, setFrontSearchInSaved] = useState({ query: '', isShort: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!frontSearch.query) {
            setError('Введите ключевое слово поиска');
            console.log(error);
        }
        else {
            setSearch(frontSearch);
            filterMovies(frontSearch);
            console.log('Checked:', search.isShort);
        }
    };

    const handleSubmitInSaved = (e) => {
        e.preventDefault();
        //setSearch(frontSearchInSaved);
        //filterSavedMovies(frontSearchInSaved);
        setSearchedInSaved(frontSearchInSaved);
        setIsSearchedInSave(true);
    }

    const handleSearchInputChangeInSaved = (e) => {
        setFrontSearchInSaved({ ...frontSearchInSaved, query: e.target.value });
    };

    const handleSearchInputChange = (e) => {
        setFrontSearch({ ...frontSearch, query: e.target.value });
        //setSearch({ ...frontSearch, query: e.target.value });
        console.log('query:', search.query);
    };

    const handleChangeCheckboxInSaved = (e) => {
        setFrontSearchInSaved({ ...frontSearchInSaved, isShort: e.target.checked });
    };

    const handleChangeCheckbox = (e) => {
        setFrontSearch({ ...frontSearch, isShort: e.target.checked });
        setSearch({ ...frontSearch, isShort: e.target.checked });
    };

    useEffect(() => {
        //setSearch({ query: frontSearch.query, isShort: frontSearch.isShort })
        localStorage.setItem('search', JSON.stringify(search));
        // eslint-disable-next-line
    }, [frontSearch.query, frontSearch.isShort])

    return(
        <section className="content">
            <form
                className="search-form"
                name="search-film"
                onSubmit={location.pathname === '/movies' ? handleSubmit : handleSubmitInSaved}>
                <div className="search-form__container">
                    <input
                        type="text"
                        placeholder="Фильм"
                        name="film"
                        className="search-form__text"
                        onChange={location.pathname === '/movies' ? handleSearchInputChange : handleSearchInputChangeInSaved}
                        value={location.pathname === '/movies'
                            ?
                        frontSearch.query || ''
                    : frontSearchInSaved.query || ''}
                        required
                    />

                    <button
                        type="submit"
                        disabled={location.pathname === '/movies' ? !frontSearch.query : false}
                        className="search-form__submit-btn"
                    />
                </div>

                <FilterCheckbox
                    checked={location.pathname === '/movies' ? frontSearch.isShort : frontSearchInSaved.isShort}
                    onChange={location.pathname === '/movies' ? handleChangeCheckbox : handleChangeCheckboxInSaved}
                />
            </form>
        </section>
    )
}

export default SearchForm;