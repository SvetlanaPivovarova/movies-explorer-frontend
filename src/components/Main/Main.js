import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";

function Main({ isLoggedIn }) {

    return(
        <main>
            <NavigationSidebar isMenuOpened={isLoggedIn} />
            <Header modifier="true" loggedIn={isLoggedIn} />
            <Promo />
            <NavTab />
            <section id="about-project">
                <AboutProject />
            </section>
            <section id="about-techs">
                <Techs />
            </section>
            <section id="about-student">
                <AboutMe />
            </section>
            <Portfolio />
            <Footer />
        </main>
    )
}

export default Main;