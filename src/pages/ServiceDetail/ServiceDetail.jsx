import { useTranslation } from "react-i18next";
import { Navigate, useOutletContext, useParams } from "react-router-dom";

import PageBanner from "../../components/PageBanner/PageBanner";

import { useDocumentHead } from "../../hooks/useDocumentHead";
import { useStructuredData } from "../../hooks/useStructuredData";
import { buildPath } from "../../config/routes";
import { getServiceKeyFromSlug } from "../../config/serviceRoutes";
import { serviceFaqs } from "../../content/serviceFaqs";
import { getServiceBooking } from "../../config/externalLinks";

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

import "./ServiceDetail.css";

const images = {
    1: balayageImg,
    2: blondingImg,
    3: haircutsImg,
    4: stylingImg,
    5: colorCorrectionImg,
    6: nailsImg,
    7: highlightsImg,
    8: barberingImg,
    9: toningImg
};

function ServiceDetail() {

    const { t } = useTranslation();

    const { lang } = useOutletContext();

    const { serviceSlug } = useParams();

    const key = getServiceKeyFromSlug(lang, serviceSlug);

    useDocumentHead({
        title: key ? t(`service${key}SeoTitle`) : undefined,
        description: key ? t(`service${key}SeoDescription`) : undefined
    });

    const faq = key ? serviceFaqs[key] : null;

    useStructuredData(faq ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq[lang].map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: {
                "@type": "Answer",
                text: a
            }
        }))
    } : null);

    if (!key) {
        return (
            <Navigate
                to={buildPath(lang, "services")}
                replace
            />
        );
    }

    const heading = t(`service${key}SeoTitle`).split(" | ")[0];

    const booking = getServiceBooking(key);

    return (

        <>

            <PageBanner
                video={servicesVideo}
                eyebrow={t("servicesPageEyebrow")}
                title={heading}
            />

            <section className="service-detail">

                <div className="container-small service-detail__content">

                    <img
                        src={images[key]}
                        alt={t(`service${key}Title`)}
                        className="service-detail__image"
                    />

                    <p>
                        {t(`service${key}LongText`)}
                    </p>

                    {faq && (

                        <div className="service-detail__faq">

                            <h2>{t("blogFaqTitle")}</h2>

                            {faq[lang].map(({ q, a }) => (

                                <details
                                    key={q}
                                    className="service-detail__faq-item"
                                >

                                    <summary>{q}</summary>

                                    <p>{a}</p>

                                </details>

                            ))}

                        </div>

                    )}

                    <div className="service-detail__actions">

                        {booking.variants ? (

                            booking.variants.map((variant) => (

                                <a
                                    key={variant.url}
                                    href={variant.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="button"
                                >
                                    {t("serviceCtaTitle")} — {variant.label[lang]}
                                </a>

                            ))

                        ) : (

                            <a
                                href={booking.url}
                                target="_blank"
                                rel="noreferrer"
                                className="button"
                            >
                                {t("serviceCtaTitle")}
                            </a>

                        )}

                    </div>

                </div>

            </section>

        </>

    );

}

export default ServiceDetail;
