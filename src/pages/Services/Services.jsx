import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";

import PageBanner from "../../components/PageBanner/PageBanner";
import Carousel from "../../components/Carousel/Carousel";

import { buildPath } from "../../config/routes";
import { buildServicePath } from "../../config/serviceRoutes";

import servicesVideo from "../../assets/videos/services.mp4";

import balayageImg from "../../assets/services/balayage.jpg";
import blondingImg from "../../assets/services/blonding.jpg";
import haircutsImg from "../../assets/services/haircuts.jpg";
import stylingImg from "../../assets/services/styling.jpg";
import colorCorrectionImg from "../../assets/services/color-correction.jpg";
import nailsImg from "../../assets/services/nails.jpg";
import highlightsImg from "../../assets/services/highlights.jpg";
import barberingImg from "../../assets/services/barbering.jpg";
import toningImg from "../../assets/services/toning.jpg";

import "./Services.css";

const services = [
    { n: 1, images: [balayageImg] },
    { n: 2, images: [blondingImg] },
    { n: 3, images: [haircutsImg] },
    { n: 4, images: [stylingImg] },
    { n: 5, images: [colorCorrectionImg] },
    { n: 6, images: [nailsImg] },
    { n: 7, images: [highlightsImg] },
    { n: 8, images: [barberingImg] },
    { n: 9, images: [toningImg] },
];

function Services() {

    const { t } = useTranslation();

    const { lang } = useOutletContext();

    return (

        <>

            <PageBanner
                video={servicesVideo}
                eyebrow={t("servicesPageEyebrow")}
                title={t("servicesPageTitle")}
                intro={t("servicesPageIntro")}
            />

            <section className="services">

                <div className="container">

                    <div className="services__grid">

                        {services.map(({ n, images }) => (

                            <Link
                                key={n}
                                to={buildServicePath(lang, n)}
                                className="service-tile"
                            >

                                <Carousel
                                    images={images}
                                    alt={t(`service${n}Title`)}
                                />

                                <div className="service-tile__overlay">

                                    <h3>{t(`service${n}Title`)}</h3>

                                    <p>{t(`service${n}Text`)}</p>

                                </div>

                            </Link>

                        ))}

                    </div>

                    <div className="services__footer">

                        <p>{t("servicesNote")}</p>

                        <Link
                            to={buildPath(lang, "booking")}
                            className="button"
                        >
                            {t("servicesCta")}
                        </Link>

                    </div>

                </div>

            </section>

        </>

    );

}

export default Services;
