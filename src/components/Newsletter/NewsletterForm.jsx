import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { buildPath } from "../../config/routes";
import { supportedLanguages, defaultLanguage } from "../../config/languages";

function NewsletterForm({ compact = false }) {

    const { t, i18n } = useTranslation();

    // Layout switches i18n to the language in the URL, so this matches the page.
    const lang = supportedLanguages.includes(i18n.language) ? i18n.language : defaultLanguage;

    const [email, setEmail] = useState("");

    const [status, setStatus] = useState("idle");

    const handleSubmit = async (event) => {

        event.preventDefault();

        setStatus("submitting");

        try {

            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });

            if (!response.ok) throw new Error("Request failed");

            setStatus("success");

            setEmail("");

        } catch {

            setStatus("error");

        }

    };

    if (status === "success") {

        return (

            <p className="newsletter-form__success">
                {t("newsletterSuccess")}
            </p>

        );

    }

    return (

        <form
            className={compact ? "newsletter-form newsletter-form--compact" : "newsletter-form"}
            onSubmit={handleSubmit}
        >

            <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={t("newsletterEmailPlaceholder")}
                required
            />

            {/* GDPR consent: unticked by default, and "required" makes the
                browser refuse to submit the form until it is ticked. */}
            <label className="newsletter-form__consent">

                <input
                    type="checkbox"
                    required
                />

                <span>
                    {t("newsletterConsent")}{" "}
                    <Link to={buildPath(lang, "privacy")}>
                        {t("newsletterPrivacyLink")}
                    </Link>
                </span>

            </label>

            <button
                type="submit"
                className="button"
                disabled={status === "submitting"}
            >
                {status === "submitting" ? t("newsletterSubmitting") : t("newsletterSubmit")}
            </button>

            {status === "error" && (
                <p className="newsletter-form__error">
                    {t("newsletterError")}
                </p>
            )}

        </form>

    );

}

export default NewsletterForm;
