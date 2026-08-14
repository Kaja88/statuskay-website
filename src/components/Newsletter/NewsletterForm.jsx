import { useState } from "react";
import { useTranslation } from "react-i18next";

function NewsletterForm({ compact = false }) {

    const { t } = useTranslation();

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
