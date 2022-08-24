import React from "react";
import "./SearchForm.css";

function SearchForm() {
    return(
        <section className="content">
            <form className="search-form" name="search-film">
                <input
                    type="text"
                    placeholder="Фильм"
                    name="film"
                    className="search-form__text"
                    required
                />
                <button type="submit" className="search-form__submit-btn" />
            </form>
        </section>
    )
}

export default SearchForm;