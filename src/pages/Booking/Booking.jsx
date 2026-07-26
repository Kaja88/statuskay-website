import { useTranslation } from "react-i18next";
import { Phone, Calendar } from "lucide-react";

import { InstagramIcon } from "../../components/icons/SocialIcons";
import PageBanner from "../../components/PageBanner/PageBanner";

import { freshaBookingUrl } from "../../config/externalLinks";

import bookingVideo from "../../assets/videos/booking.mp4";

import "./Booking.css";

function Booking() {

    const { t } = useTranslation();

    return (

        <>

            <PageBanner
                video={bookingVideo}
                eyebrow={t("bookingEyebrow")}
                title={t("bookingPageTitle")}
                intro={t("bookingIntro")}
            />

            <section className="booking">

                <div className="container booking__grid">

                    <article className="booking-card">

                        <Phone size={26} />

                        <h3>{t("bookingCallTitle")}</h3>

                        <p>{t("bookingCallText")}</p>

                        <a
                            href="tel:+38641510780"
                            className="button button-outline"
                        >
                            {t("bookingCallCta")}
                        </a>

                    </article>

                    <article className="booking-card">

                        <Calendar size={26} />

                        <h3>{t("bookingOnlineTitle")}</h3>

                        <p>{t("bookingOnlineText")}</p>

                        <a
                            href={freshaBookingUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="button button-outline"
                        >
                            {t("bookingOnlineCta")}
                        </a>

                    </article>

                    <article className="booking-card">

                        <InstagramIcon size={26} />

                        <h3>{t("bookingInstagramTitle")}</h3>

                        <p>{t("bookingInstagramText")}</p>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="button button-outline"
                        >
                            {t("bookingInstagramCta")}
                        </a>

                    </article>

                </div>

            </section>

        </>

    );

}

export default Booking;
