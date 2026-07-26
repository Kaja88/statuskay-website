import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./Layout.css";

function Layout({ lang }) {

    const { i18n } = useTranslation();

    useEffect(() => {

        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }

    }, [lang, i18n]);

    return (

        <>

            <Navbar lang={lang} />

            <main>

                <Outlet context={{ lang }} />

            </main>

            <Footer lang={lang} />

        </>

    );

}

export default Layout;
