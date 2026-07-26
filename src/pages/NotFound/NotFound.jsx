import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { defaultLanguage } from "../../config/languages";
import { buildPath } from "../../config/routes";

import "./NotFound.css";

function NotFound() {

    const { t } = useTranslation();

    return (

        <section className="not-found">

            <div className="container-small">

                <p className="not-found__logo">STATUS KAY</p>

                <h1>{t("notFoundTitle")}</h1>

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
