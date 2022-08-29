import React, {useState} from "react";
import "./SearchForm.css";
import moviesApi from "../../utils/MoviesApi";

function SearchForm() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setSearchQuery(e.target.value);
    }





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
                    onChange={handleInputChange}
                    required
                />
                <button type="submit" className="search-form__submit-btn" />
            </form>
        </section>
    )
}

export default SearchForm;