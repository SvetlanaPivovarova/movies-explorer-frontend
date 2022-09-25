import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

function Profile({ isLoggedIn, onEdit, onExit }) {
    return(
        <>
            <Header
                modifier={false}
                loggedIn={isLoggedIn}
            />
            <ProfileInfo
                onEdit={onEdit}
                onExit={onExit}
            />
        </>
    )
}

export default Profile;