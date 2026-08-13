import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

import PageBanner from "../../components/PageBanner/PageBanner";

import { buildPath } from "../../config/routes";

import contactVideo from "../../assets/videos/contact.mp4";

import "./Contact.css";

function Contact() {

    const { t } = useTranslation();

    const { lang } = useOutletContext();

    const [form, setForm] = useState({ name: "", email: "", message: "", consent: false });

    const [status, setStatus] = useState("idle");

    const handleChange = (event) => {

        const { name, value, type, checked } = event.target;

        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));

    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        setStatus("submitting");

        try {

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (!response.ok) throw new Error("Request failed");

            setStatus("success");

            setForm({ name: "", email: "", message: "", consent: false });

        } catch {

            setStatus("error");

        }

    };

    return (

        <>

            <PageBanner
                video={contactVideo}
                eyebrow={t("contactPageEyebrow")}
                title={t("contactPageTitle")}
                intro={t("contactPageIntro")}
            />

            <section className="contact-page">

                <div className="container contact-page__content">

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <label>
                            {t("formNameLabel")}
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            {t("formEmailLabel")}
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            {t("formMessageLabel")}
                            <textarea
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="contact-form__consent">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={form.consent}
                                onChange={handleChange}
                                required
                            />
                            <span>
                                {t("formConsentLabel")}{" "}
                                <Link to={buildPath(lang, "privacy")}>
                                    {t("formConsentLink")}
                                </Link>
                                .
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="button"
                            disabled={status === "submitting"}
                        >
                            {status === "submitting" ? t("formSubmitting") : t("formSubmit")}
                        </button>

                        {status === "success" && (
                            <p className="contact-form__status contact-form__status--success">
                                {t("formSuccess")}
                            </p>
                        )}

                        {status === "error" && (
                            <p className="contact-form__status contact-form__status--error">
                                {t("formError")}
                            </p>
                        )}

                    </form>

                    <div className="contact-page__info">

                        <h4>{t("contactInfoTitle")}</h4>

                        <div className="contact-page__item">
                            <Phone size={18} />
                            <a href="tel:+38641510780">+386 41 510 780</a>
                        </div>

                        <div className="contact-page__item">
                            <Mail size={18} />
                            <a href="mailto:statuskay@gmail.com">statuskay@gmail.com</a>
                        </div>

                        <div className="contact-page__item">
                            <MapPin size={18} />
                            <span>{t("footerAddress")}</span>
                        </div>

                    </div>

                </div>

            </section>

        </>

    );

}

export default Contact;
