import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";

import heroVideo from "../../assets/videos/hero.mp4";
import aboutImg from "../../assets/home/about.jpg";

import { buildPath } from "../../config/routes";

import "./Home.css";

function Home() {

    const { t } = useTranslation();

    const { lang } = useOutletContext();

    return (

        <>

            {/* HERO */}

            <section className="hero">

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src={heroVideo}
                        type="video/mp4"
                    />
                </video>

                <div className="hero__content container">

                    <p className="hero__subtitle">
                        {t("heroSubtitle")}
                    </p>

                    <h1 className="hero__title">
                        STATUS KAY
                    </h1>

                    <a
                        href="#about"
                        className="button"
                    >
                        {t("discoverMore")}
                    </a>

                </div>

            </section>

            {/* ABOUT */}

            <section
                id="about"
                className="about"
            >

                <div className="container about__content">

                    <div className="about__image">

                        <img
                            src={aboutImg}
                            alt="STATUS KAY salon interior"
                        />

                    </div>

                    <div className="about__text">

                        <p className="hero__subtitle">
                            {t("aboutSubtitle")}
                        </p>

                        <h2>
                            {t("aboutTitle")}
                        </h2>

                        <p>
                            {t("aboutText")}
                        </p>

                        <Link
                            to={buildPath(lang, "about")}
                            className="button button-outline"
                        >
                            {t("readOurStory")}
                        </Link>

                    </div>

                </div>

            </section>

            {/* SERVICES */}

            <section
                id="services"
                className="services"
            >

                <div className="container">

                    <div className="section-title">

                        <p className="hero__subtitle">
                            {t("servicesSubtitle")}
                        </p>

                        <h2>
                            {t("servicesTitle")}
                        </h2>

                    </div>

                    <div className="services__grid">

                        <article className="service-card">

                            <h3>
                                {t("service1Title")}
                            </h3>

                            <p>
                                {t("service1Text")}
                            </p>

                        </article>

                        <article className="service-card">

                            <h3>
                                {t("service2Title")}
                            </h3>

                            <p>
                                {t("service2Text")}
                            </p>

                        </article>

                        <article className="service-card">

                            <h3>
                                {t("service3Title")}
                            </h3>

                            <p>
                                {t("service3Text")}
                            </p>

                        </article>

                    </div>

                    <div className="home__services-cta">

                        <Link
                            to={buildPath(lang, "services")}
                            className="button"
                        >
                            {t("viewAllServices")}
                        </Link>

                    </div>

                </div>

            </section>

            {/* CONTACT */}

            <section
                id="contact"
                className="contact"
            >

                <div className="container-small">

                    <div className="section-title">

                        <p className="hero__subtitle">
                            {t("contactSubtitle")}
                        </p>

                        <h2>
                            {t("contactTitle")}
                        </h2>

                    </div>

                    <Link
                        to={buildPath(lang, "booking")}
                        className="button"
                    >
                        {t("bookNow")}
                    </Link>

                </div>

            </section>

        </>

    );

}

export default Home;
