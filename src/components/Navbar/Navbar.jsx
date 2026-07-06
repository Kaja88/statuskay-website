import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { routes } from "../../config/routes";

import "./Navbar.css";

function Navbar() {

    const { i18n } = useTranslation();

    const lang = i18n.language;

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className={scrolled ? "navbar scrolled" : "navbar"}>

            <div className="container navbar__container">

                {/* LOGO */}

                <NavLink
                    to={`/${lang}`}
                    className="navbar__logo"
                >
                    STATUS KAY
                </NavLink>

                {/* MENU */}

                <nav>

                    <ul className="navbar__menu">

                        <li>
                            <NavLink
                                to={`/${lang}/${routes.about.path[lang]}`}
                                className="navbar__link"
                            >
                                {routes.about.label[lang]}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to={`/${lang}/${routes.services.path[lang]}`}
                                className="navbar__link"
                            >
                                {routes.services.label[lang]}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to={`/${lang}/${routes.gallery.path[lang]}`}
                                className="navbar__link"
                            >
                                {routes.gallery.label[lang]}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to={`/${lang}/${routes.blog.path[lang]}`}
                                className="navbar__link"
                            >
                                {routes.blog.label[lang]}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to={`/${lang}/${routes.directions.path[lang]}`}
                                className="navbar__link"
                            >
                                {routes.directions.label[lang]}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to={`/${lang}/${routes.contact.path[lang]}`}
                                className="navbar__link"
                            >
                                {routes.contact.label[lang]}
                            </NavLink>
                        </li>

                    </ul>

                </nav>

                {/* LANGUAGE SWITCHER */}

                <div className="navbar__languages">

                    <button
                        onClick={() => i18n.changeLanguage("en")}
                    >
                        🇬🇧
                    </button>

                    <button
                        onClick={() => i18n.changeLanguage("sl")}
                    >
                        🇸🇮
                    </button>

                </div>

                {/* BOOK BUTTON */}

                <NavLink
                    to={`/${lang}/${routes.booking.path[lang]}`}
                    className="button"
                >
                    {routes.booking.label[lang]}
                </NavLink>

            </div>

        </header>

    );

}

export default Navbar;