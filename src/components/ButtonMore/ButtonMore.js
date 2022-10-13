import React from 'react';
import './ButtonMore.css';

function ButtonMore({ onClick, isVisible }) {
    return(
        <section className="button-more content">
            <button
                className={isVisible ? "button-more__button" : "button-more__button_invisible"}
                onClick={onClick}>
                    Ещё
            </button>
        </section>
    )
}

export default ButtonMore;