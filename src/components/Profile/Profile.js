import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

function Profile({ onEdit, onExit }) {
    return(
        <>
            <Header />
            <ProfileInfo
                onEdit={onEdit}
                onExit={onExit}
            />
        </>
    )
}

export default Profile;