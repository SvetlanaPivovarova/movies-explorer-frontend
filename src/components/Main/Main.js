import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";

function Main() {

    return(
        <main className="content">
            <Header />
            <Promo />
            <NavTab />
            <section className="profile content__section">

            </section>
            <section className="elements content__section">

            </section>
        </main>
    )
}

export default Main;