import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";

function Main() {

    return(
        <main>
            <Header />
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <section className="profile content__section">

            </section>
            <section className="elements content__section">

            </section>
        </main>
    )
}

export default Main;