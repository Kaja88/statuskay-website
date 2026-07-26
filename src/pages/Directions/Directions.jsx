import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import { MapPin, Clock, Car, Bike, Phone, Bus } from "lucide-react";

import PageBanner from "../../components/PageBanner/PageBanner";
import Wayfinding from "../../components/Wayfinding/Wayfinding";

import { transportInfo } from "../../content/transport";
import { freshaBookingUrl } from "../../config/externalLinks";

import directionsVideo from "../../assets/videos/directions.mp4";

import "./Directions.css";

function Directions() {

    const { t } = useTranslation();

    const { lang } = useOutletContext();

    return (

        <>

            <PageBanner
                video={directionsVideo}
                eyebrow={t("directionsEyebrow")}
                title={t("directionsTitle")}
                intro={t("directionsIntro")}
            />

            <section className="directions">

                <div className="container directions__info">

                    <div className="directions__item">

                        <MapPin size={20} />

                        <div>
                            <h4>{t("directionsAddressLabel")}</h4>
                            <p>{t("directionsAddressValue")}</p>
                            <a
                                href="#wayfinding-map"
                                className="directions__link"
                            >
                                {t("directionsSeeMapCta")}
                            </a>
                        </div>

                    </div>

                    <div className="directions__item">

                        <Clock size={20} />

                        <div>
                            <h4>{t("directionsHoursLabel")}</h4>
                            <p>{t("hoursByAppointment")}</p>
                            <p>{t("hoursGoogleNote")}</p>
                            <a
                                href={freshaBookingUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="directions__link"
                            >
                                {t("directionsAvailabilityCta")}
                            </a>
                        </div>

                    </div>

                </div>

            </section>

            <section
                className="wayfinding-section"
                id="wayfinding-map"
            >

                <div className="container">

                    <Wayfinding lang={lang} />

                </div>

            </section>

            <section className="transport">

                <div className="container">

                    <div className="section-title">

                        <p className="hero__subtitle">
                            {t("transportEyebrow")}
                        </p>

                        <h2>
                            {t("transportTitle")}
                        </h2>

                        <p className="page-header__intro">
                            {t("transportIntro")}
                        </p>

                    </div>

                    <div className="transport__grid">

                        <div className="transport__category">

                            <h3>
                                <Car size={20} />
                                {t("transportParkingTitle")}
                            </h3>

                            <ul>

                                {transportInfo.parking.map((item) => (

                                    <li key={item.name}>
                                        <span className="transport__name">{item.name}</span>
                                        <span className="transport__detail">{item.detail[lang]}</span>
                                    </li>

                                ))}

                            </ul>

                        </div>

                        <div className="transport__category">

                            <h3>
                                <Bike size={20} />
                                {t("transportSharingTitle")}
                            </h3>

                            <ul>

                                {transportInfo.sharing.map((item) => (

                                    <li key={item.name}>
                                        <span className="transport__name">{item.name}</span>
                                        <span className="transport__detail">{item.detail[lang]}</span>
                                    </li>

                                ))}

                            </ul>

                        </div>

                        <div className="transport__category">

                            <h3>
                                <Phone size={20} />
                                {t("transportTaxiTitle")}
                            </h3>

                            <ul>

                                <li>
                                    <span className="transport__name">{transportInfo.taxi.name}</span>
                                    <span className="transport__detail">{transportInfo.taxi.detail[lang]}</span>
                                    <a
                                        href={`tel:${transportInfo.taxi.phone.replace(/\s/g, "")}`}
                                        className="transport__phone"
                                    >
                                        {transportInfo.taxi.phone}
                                    </a>
                                </li>

                            </ul>

                        </div>

                        <div className="transport__category">

                            <h3>
                                <Bus size={20} />
                                {t("transportBusTitle")}
                            </h3>

                            <ul>

                                {transportInfo.bus.map((item) => (

                                    <li key={item.stop}>
                                        <span className="transport__name">
                                            {item.stop}
                                            {item.detail && ` — ${item.detail[lang]}`}
                                        </span>
                                        <span className="transport__detail">{item.lines}</span>
                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                    <p className="transport__note">
                        {t("transportNote")}
                    </p>

                </div>

            </section>

        </>

    );

}

export default Directions;
