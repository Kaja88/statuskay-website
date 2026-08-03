import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";

import Carousel from "../../components/Carousel/Carousel";

import heroVideo from "../../assets/videos/hero.mp4";
import aboutImg from "../../assets/home/about.jpg";
import balayageImg from "../../assets/services/balayage.jpg";
import blondingImg from "../../assets/services/blonding.jpg";
import haircutsImg from "../../assets/services/haircuts.jpg";

import { buildPath } from "../../config/routes";
import { buildServicePath } from "../../config/serviceRoutes";

import "./Home.css";

const featuredServices = [
    { n: 1, image: balayageImg },
    { n: 2, image: blondingImg },
    { n: 3, image: haircutsImg }
];

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
                className="about home-about"
            >

                <div className="container home-about__content">

                    <p className="hero__subtitle">
                        {t("aboutSubtitle")}
                    </p>

                    <h2>
                        {t("aboutTitle")}
                    </h2>

                    <p>
                        {t("aboutText")}
                    </p>

                    <div className="home-about__image">

                        <img
                            src={aboutImg}
                            alt="STATUS KAY salon interior"
                        />

                    </div>

                    <Link
                        to={buildPath(lang, "about")}
                        className="button button-outline"
                    >
                        {t("readOurStory")}
                    </Link>

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

                        {featuredServices.map(({ n, image }) => (

                            <Link
                                key={n}
                                to={buildServicePath(lang, n)}
                                className="service-tile"
                            >

                                <Carousel
                                    images={[image]}
                                    alt={t(`service${n}Title`)}
                                />

                                <div className="service-tile__overlay">

                                    <h3>{t(`service${n}Title`)}</h3>

                                    <p>{t(`service${n}Text`)}</p>

                                </div>

                            </Link>

                        ))}

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
