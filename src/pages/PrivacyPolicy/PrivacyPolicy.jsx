import { useTranslation } from "react-i18next";

import "./PrivacyPolicy.css";

function PrivacyPolicy() {

    const { t } = useTranslation();

    return (

        <>

            <section className="page-header">

                <div className="container-small">

                    <p className="hero__subtitle">
                        {t("privacyEyebrow")}
                    </p>

                    <h1>
                        {t("privacyPageTitle")}
                    </h1>

                    <p className="page-header__intro">
                        {t("privacyIntroText")}
                    </p>

                </div>

            </section>

            <section className="privacy">

                <div className="container-small privacy__content">

                    <p className="privacy__updated">
                        {t("privacyUpdated")}
                    </p>

                    <h2>{t("privacyDataTitle")}</h2>
                    <p>{t("privacyDataText")}</p>

                    <h2>{t("privacyUseTitle")}</h2>
                    <p>{t("privacyUseText")}</p>

                    <h2>{t("privacyThirdPartyTitle")}</h2>
                    <p>{t("privacyThirdPartyText")}</p>

                    <h2>{t("privacyRightsTitle")}</h2>
                    <p>{t("privacyRightsText")}</p>

                    <h2>{t("privacyContactTitle")}</h2>
                    <p>
                        {t("privacyContactText")}{" "}
                        <a href="mailto:statuskay@gmail.com">statuskay@gmail.com</a>.
                    </p>

                </div>

            </section>

        </>

    );

}

export default PrivacyPolicy;
