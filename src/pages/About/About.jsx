import { useTranslation } from "react-i18next";

import PageBanner from "../../components/PageBanner/PageBanner";

import aboutVideo from "../../assets/videos/about.mp4";
import portraitImg from "../../assets/about/portrait.jpg";
import storyImg from "../../assets/about/story.jpg";

function About() {

    const { t } = useTranslation();

    return (

        <>

            <PageBanner
                video={aboutVideo}
                eyebrow={t("aboutEyebrow")}
                title={t("aboutPageTitle")}
                intro={t("aboutIntro")}
            />

            <section className="about">

                <div className="container about__content">

                    <div className="about__text">

                        <p className="hero__subtitle">
                            {t("meetEyebrow")}
                        </p>

                        <h2>
                            {t("meetTitle")}
                        </h2>

                        <p>
                            {t("meetText1")}
                        </p>

                        <p>
                            {t("meetText2")}
                        </p>

                    </div>

                    <div className="about__image">

                        <img
                            src={portraitImg}
                            alt="STATUS KAY hairstylist portrait"
                        />

                    </div>

                </div>

            </section>

            <section className="about">

                <div className="container about__content">

                    <div className="about__image">

                        <img
                            src={storyImg}
                            alt="Yorkie salon dog receptionist"
                        />

                    </div>

                    <div className="about__text">

                        <p className="hero__subtitle">
                            {t("storyEyebrow")}
                        </p>

                        <h2>
                            {t("storyTitle")}
                        </h2>

                        <p>
                            {t("storyText1")}
                        </p>

                        <p>
                            {t("storyText2")}
                        </p>

                    </div>

                </div>

            </section>

            <section className="services">

                <div className="container">

                    <div className="section-title">

                        <p className="hero__subtitle">
                            {t("valuesEyebrow")}
                        </p>

                        <h2>
                            {t("valuesTitle")}
                        </h2>

                    </div>

                    <div className="services__grid">

                        <article className="service-card">
                            <h3>{t("value1Title")}</h3>
                            <p>{t("value1Text")}</p>
                        </article>

                        <article className="service-card">
                            <h3>{t("value2Title")}</h3>
                            <p>{t("value2Text")}</p>
                        </article>

                        <article className="service-card">
                            <h3>{t("value3Title")}</h3>
                            <p>{t("value3Text")}</p>
                        </article>

                    </div>

                </div>

            </section>

        </>

    );

}

export default About;
