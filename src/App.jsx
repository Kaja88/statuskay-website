import { useTranslation } from "react-i18next";

import heroVideo from "./assets/videos/hero.mp4";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {

  const { t } = useTranslation();

  return (

      <>

        <Navbar />

        <main>

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
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
                    alt="Luxury salon interior"
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

                <a
                    href="#services"
                    className="button button-outline"
                >
                  {t("ourServices")}
                </a>

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

            </div>

          </section>

        </main>

      </>

  );
}

export default App;