import { useTranslation } from "react-i18next";

import PageBanner from "../../components/PageBanner/PageBanner";
import NewsletterForm from "../../components/Newsletter/NewsletterForm";

// Same background video as the Blog page, so the signup page feels like part of the blog.
import blogVideo from "../../assets/videos/blog.mp4";

import "../../components/Newsletter/Newsletter.css";
import "./Subscribe.css";

// Standalone newsletter signup page – meant for the Instagram/TikTok bio,
// YouTube descriptions or a QR code in the salon (statuskay.com/subscribe).
// It reuses the same form as the blog, so signups land in the same
// MailerLite group via /api/subscribe.
function Subscribe() {

    const { t } = useTranslation();

    const points = ["subscribePoint1", "subscribePoint2", "subscribePoint3"];

    return (

        <>

            <PageBanner
                video={blogVideo}
                eyebrow={t("subscribeEyebrow")}
                title={t("subscribePageTitle")}
                intro={t("subscribeIntro")}
            />

            <section className="subscribe">

                <div className="container-small subscribe__content">

                    <ul className="subscribe__points">

                        {points.map((key) => (
                            <li key={key}>{t(key)}</li>
                        ))}

                    </ul>

                    <NewsletterForm />

                </div>

            </section>

        </>

    );

}

export default Subscribe;
