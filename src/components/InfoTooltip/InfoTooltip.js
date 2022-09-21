import React from "react";
import "./InfoTooltip.css";

function InfoTooltip({isOpen, messageIcon, tooltipMessage, onClose}) {
    return(
        <div className={`popup ${isOpen? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <img className="popup__message-icon" src={messageIcon} alt="Иконка" />
                <p className="popup__message">{tooltipMessage}</p>
                <button className="popup__close-btn" type="button" onClick={onClose} aria-label="Закрыть" />
            </div>
        </div>
    )
}

export default InfoTooltip;