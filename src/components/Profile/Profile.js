import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

function Profile() {
    return(
        <>
            <Header />
            <ProfileInfo name="Светлана" email="pochta@yandex.ru" />
        </>
    )
}

export default Profile;