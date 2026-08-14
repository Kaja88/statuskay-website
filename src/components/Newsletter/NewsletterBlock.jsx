import { useTranslation } from "react-i18next";

import NewsletterForm from "./NewsletterForm";

import "./Newsletter.css";

function NewsletterBlock() {

    const { t } = useTranslation();

    return (

        <div className="newsletter-block">

            <h3>{t("newsletterTitle")}</h3>

            <p>{t("newsletterText")}</p>

            <NewsletterForm />

        </div>

    );

}

export default NewsletterBlock;
