import React from 'react';
import "./FilterCheckbox.css";

function FilterCheckbox({ checked, onChange }) {

    return(
        <div className="checkbox-container content">
            <label className="checkbox__label" htmlFor="short-films">
                <input
                    type="checkbox"
                    name="short-films"
                    className="checkbox-input"
                    id="short-films"
                    value={checked || ''}
                    checked={checked}
                    onChange={onChange}
                />
                <span className={
                    checked ?
                        "checkbox-pseudo checkbox-pseudo_type_selected" : "checkbox-pseudo"} />
                <span className="checkbox-visible" />
            </label>
            <p className="checkbox__label-text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;