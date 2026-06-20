import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    const { i18n, t } = useTranslation();

    useEffect(() => {

        function handleScroll() {

            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (

        <header className={scrolled ? "navbar scrolled" : "navbar"}>

            <div className="navbar__container">

                {/* LOGO */}

                <a
                    href="/"
                    className="navbar__logo"
                >
                    STATUS KAY
                </a>

                {/* NAVIGATION */}

                <nav className="navbar__navigation">

                    <ul className="navbar__menu">

                        <li>

                            <a
                                href="#about"
                                className="navbar__link"
                            >
                                {t("aboutSubtitle")}
                            </a>

                        </li>

                        <li>

                            <a
                                href="#services"
                                className="navbar__link"
                            >
                                {t("servicesSubtitle")}
                            </a>

                        </li>

                        <li>

                            <a
                                href="#contact"
                                className="navbar__link"
                            >
                                {t("contactSubtitle")}
                            </a>

                        </li>

                    </ul>

                </nav>

                {/* LANGUAGE SWITCHER */}

                <div className="navbar__languages">

                    <button
                        onClick={() => i18n.changeLanguage("en")}
                    >
                        EN
                    </button>

                    <button
                        onClick={() => i18n.changeLanguage("sl")}
                    >
                        SL
                    </button>

                </div>

            </div>

        </header>

    );
}

export default Navbar;