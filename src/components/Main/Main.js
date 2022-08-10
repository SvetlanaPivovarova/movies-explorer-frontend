import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";

function Main() {

    return(
        <main>
            <Header />
            <Promo />
            <NavTab />
            <AboutProject />
            <section className="profile content__section">

            </section>
            <section className="elements content__section">

            </section>
        </main>
    )
}

export default Main;