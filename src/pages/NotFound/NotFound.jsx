import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { defaultLanguage } from "../../config/languages";
import { buildPath } from "../../config/routes";

import daisy from "../../assets/not-found/daisy.jpg";

import "./NotFound.css";

function NotFound() {

    const { t } = useTranslation();

    useEffect(() => {

        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex";
        document.head.appendChild(meta);

        return () => document.head.removeChild(meta);

    }, []);

    return (

        <section className="not-found">

            <div className="container-small">

                <p className="not-found__logo">STATUS KAY</p>

                <h1>{t("notFoundTitle")}</h1>

                <img
                    src={daisy}
                    alt="Daisy"
                    className="not-found__image"
                />

                <p>{t("notFoundText")}</p>

                <Link
                    to={buildPath(defaultLanguage, "home")}
                    className="button"
                >
                    {t("notFoundCta")}
                </Link>

            </div>

        </section>

    );

}

export default NotFound;
