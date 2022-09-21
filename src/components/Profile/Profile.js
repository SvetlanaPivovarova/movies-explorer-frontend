import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

function Profile({ data, onEdit, onExit }) {

    return(
        <>
            <Header />
            <ProfileInfo
                name={data.name}
                email={data.email}
                onEdit={onEdit}
                onExit={onExit}
            />
        </>
    )
}

export default Profile;