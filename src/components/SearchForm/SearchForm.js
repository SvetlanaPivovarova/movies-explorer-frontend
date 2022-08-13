import React from "react";
import "./SearchForm.css";

function SearchForm() {
    return(
        <section className="content">
            <form className="form" name="search-film">
                <input
                    type="text"
                    placeholder="Фильм"
                    name="film"
                    className="form__text"
                    required
                />
                <button type="submit" className="form__submit-btn" />
            </form>
        </section>
    )
}

export default SearchForm;