import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

import { InstagramIcon, FacebookIcon, TikTokIcon } from "../icons/SocialIcons";
import { routes, buildPath } from "../../config/routes";
import { blogPosts } from "../../content/blogPosts";

import "./Footer.css";

function Footer({ lang }) {

    const { t } = useTranslation();

    const year = new Date().getFullYear();

    const faqPost = blogPosts.find((post) => post.slug.en === "faq");

    return (

        <footer className="footer">

            <div className="container footer__content">

                <div className="footer__brand">

                    <NavLink
                        to={buildPath(lang, "home")}
                        className="footer__logo"
                    >
                        STATUS KAY
                    </NavLink>

                    <p>
                        {t("footerTagline")}
                    </p>

                    <div className="footer__socials">

                        <a
                            href="https://www.instagram.com/statuskay"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <InstagramIcon size={18} />
                        </a>

                        <a
                            href="https://www.facebook.com/statuskay"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >
                            <FacebookIcon size={18} />
                        </a>

                        <a
                            href="https://www.tiktok.com/@statuskay"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="TikTok"
                        >
                            <TikTokIcon size={18} />
                        </a>

                    </div>

                </div>

                <div className="footer__links">

                    <h4>
                        {t("footerExplore")}
                    </h4>

                    <ul>

                        {["about", "services", "blog"].map((key) => (

                            <li key={key}>
                                <NavLink to={buildPath(lang, key)}>
                                    {routes[key].label[lang]}
                                </NavLink>
                            </li>

                        ))}

                        {faqPost && (
                            <li>
                                <NavLink to={`${buildPath(lang, "blog")}/${faqPost.slug[lang]}`}>
                                    FAQ
                                </NavLink>
                            </li>
                        )}

                    </ul>

                </div>

                <div className="footer__contact">

                    <h4>
                        {t("footerContact")}
                    </h4>

                    <ul>

                        <li>
                            <MapPin size={16} />
                            <span>{t("footerAddress")}</span>
                        </li>

                        <li>
                            <Phone size={16} />
                            <a href="tel:+38641510780">+386 41 510 780</a>
                        </li>

                        <li>
                            <Mail size={16} />
                            <a href="mailto:statuskay@gmail.com">statuskay@gmail.com</a>
                        </li>

                    </ul>

                </div>

            </div>

            <div className="container footer__bottom">

                <p>
                    © {year} STATUS KAY. {t("footerRights")}
                </p>

                <NavLink to={buildPath(lang, "privacy")}>
                    {routes.privacy.label[lang]}
                </NavLink>

            </div>

        </footer>

    );

}

export default Footer;
