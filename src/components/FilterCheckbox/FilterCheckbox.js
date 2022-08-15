import React, {useState} from 'react';
import "./FilterCheckbox.css";

function FilterCheckbox() {
    const [isShortMovie, setIsShortMovie] = useState(false);
    const toggleShortMovie = () => {
        setIsShortMovie(!isShortMovie);
    }

    return(
        <div className="checkbox-container content">
            <label className="checkbox__label" htmlFor="short-films">
                <input
                    type="checkbox"
                    name="short-films"
                    className="checkbox-input"
                    id="short-films"
                    value="short"
                    checked={isShortMovie}
                    onChange={toggleShortMovie}
                />
                <span className={
                    isShortMovie ?
                        "checkbox-pseudo checkbox-pseudo_type_selected" : "checkbox-pseudo"} />
                <span className="checkbox-visible" />
            </label>
            <p className="checkbox__label-text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;