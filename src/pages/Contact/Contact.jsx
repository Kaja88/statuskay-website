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

    const handleChange = (event) => {

        const { name, value, type, checked } = event.target;

        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        const subject = encodeURIComponent(`Message from ${form.name || "the website"}`);

        const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);

        window.location.href = `mailto:statuskay@gmail.com?subject=${subject}&body=${body}`;

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
                        >
                            {t("formSubmit")}
                        </button>

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
