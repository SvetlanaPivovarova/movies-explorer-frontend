import React, {useState} from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


function SearchForm({ search, setSearch, getMovies }) {
    const [frontSearch, setFrontSearch] = useState(search);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!frontSearch.query) {
            setError('Введите ключевое слово поиска');
            console.log(error);
        }
        else {
            setSearch(frontSearch);
            getMovies(frontSearch);
        }
    }

    const handleSearchInputChange = (e) => {
        setFrontSearch({ ...frontSearch, query: e.target.value });
    };

    const handleChangeCheckbox = (e) => {
        setFrontSearch({ ...frontSearch, isShort: e.target.checked });
        setSearch({ ...frontSearch, isShort: e.target.checked });
    };

    return(
        <section className="content">
            <form
                className="search-form"
                name="search-film"
                onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Фильм"
                    name="film"
                    className="search-form__text"
                    onChange={handleSearchInputChange}
                    value={frontSearch.query || ''}
                    required
                />
                <FilterCheckbox
                    checked={frontSearch.isShort}
                    onChange={handleChangeCheckbox}
                />
                <button type="submit" className="search-form__submit-btn" />
            </form>
        </section>
    )
}

export default SearchForm;