import React, {useState} from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


function SearchForm({ search, setSearch, getMovies }) {
    const [frontSearch, setFrontSearch] = useState(search);
    //const [isValidSearch, setIsValidSearch] = useState(false);
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
        //setIsValidSearch(e.target.validity.valid);
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
                <div className="search-form__container">
                    <input
                        type="text"
                        placeholder="Фильм"
                        name="film"
                        className="search-form__text"
                        onChange={handleSearchInputChange}
                        value={frontSearch.query || ''}
                        required
                    />

                    <button type="submit" disabled={!frontSearch.query} className="search-form__submit-btn" />
                </div>

                <FilterCheckbox
                    checked={frontSearch.isShort}
                    onChange={handleChangeCheckbox}
                />
            </form>
        </section>
    )
}

export default SearchForm;