import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { routes, buildPath, getRouteKeyFromSlug } from "../../config/routes";
import { supportedLanguages } from "../../config/languages";

import "./Navbar.css";

const navKeys = ["about", "services", "blog", "directions", "contact"];

function Navbar({ lang }) {

    const navigate = useNavigate();

    const location = useLocation();

    const langRef = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);

    const [langMenuOpen, setLangMenuOpen] = useState(false);

    const [lastPathname, setLastPathname] = useState(location.pathname);

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (langRef.current && !langRef.current.contains(event.target)) {
                setLangMenuOpen(false);
            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);

    }, []);

    if (location.pathname !== lastPathname) {

        setLastPathname(location.pathname);

        setMenuOpen(false);

        setLangMenuOpen(false);

    }

    const handleLanguageChange = (targetLang) => {

        setLangMenuOpen(false);

        if (targetLang === lang) return;

        const slug = location.pathname.split("/")[2] || "";

        const currentKey = getRouteKeyFromSlug(lang, slug);

        navigate(buildPath(targetLang, currentKey));

    };

    return (

        <header className={menuOpen ? "navbar navbar--menu-open" : "navbar"}>

            <div className="container navbar__row">

                {/* LOGO */}

                <NavLink
                    to={buildPath(lang, "home")}
                    className="navbar__logo"
                >
                    STATUS KAY
                </NavLink>

                {/* MENU + BOOK BUTTON */}

                <nav className={menuOpen ? "navbar__nav open" : "navbar__nav"}>

                    <ul className="navbar__menu">

                        {navKeys.map((key) => (

                            <li key={key}>
                                <NavLink
                                    to={buildPath(lang, key)}
                                    className="navbar__link"
                                >
                                    {routes[key].label[lang]}
                                </NavLink>
                            </li>

                        ))}

                        <li>
                            <NavLink
                                to={buildPath(lang, "booking")}
                                className="navbar__link"
                            >
                                {routes.booking.label[lang]}
                            </NavLink>
                        </li>

                    </ul>

                </nav>

                <div className="navbar__actions">

                    {/* LANGUAGE SWITCHER */}

                    <div
                        className="navbar__lang"
                        ref={langRef}
                    >

                        <button
                            className="navbar__lang-toggle"
                            onClick={() => setLangMenuOpen((open) => !open)}
                            aria-expanded={langMenuOpen}
                        >
                            <span>{lang.toUpperCase()}</span>
                            <ChevronDown size={14} />
                        </button>

                        {langMenuOpen && (

                            <ul className="navbar__lang-menu">

                                {supportedLanguages.map((code) => (

                                    <li key={code}>
                                        <button
                                            onClick={() => handleLanguageChange(code)}
                                            aria-current={code === lang}
                                        >
                                            {code.toUpperCase()}
                                        </button>
                                    </li>

                                ))}

                            </ul>

                        )}

                    </div>

                    {/* MOBILE TOGGLE */}

                    <button
                        className="navbar__toggle"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>

                </div>

            </div>

        </header>

    );

}

export default Navbar;
