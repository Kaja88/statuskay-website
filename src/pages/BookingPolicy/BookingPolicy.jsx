import { useTranslation } from "react-i18next";

import "./BookingPolicy.css";

function BookingPolicy() {

    const { t } = useTranslation();

    return (

        <>

            <section className="page-header">

                <div className="container-small">

                    <p className="hero__subtitle">
                        {t("bookingPolicyEyebrow")}
                    </p>

                    <h1>
                        {t("bookingPolicyPageTitle")}
                    </h1>

                    <p className="page-header__intro">
                        {t("bookingPolicyIntroText")}
                    </p>

                </div>

            </section>

            <section className="booking-policy">

                <div className="container-small booking-policy__content">

                    <p className="booking-policy__updated">
                        {t("bookingPolicyUpdated")}
                    </p>

                    <h2>{t("bookingPolicyBookingTitle")}</h2>
                    <p>{t("bookingPolicyBookingText")}</p>

                    <h2>{t("bookingPolicyCancelTitle")}</h2>
                    <p>{t("bookingPolicyCancelText")}</p>

                    <h2>{t("bookingPolicyNoShowTitle")}</h2>
                    <p>{t("bookingPolicyNoShowText")}</p>

                    <h2>{t("bookingPolicyWalkinTitle")}</h2>
                    <p>{t("bookingPolicyWalkinText")}</p>

                    <h2>{t("bookingPolicyContactTitle")}</h2>
                    <p>
                        {t("bookingPolicyContactText")}{" "}
                        <a href="mailto:statuskay@gmail.com">statuskay@gmail.com</a>.
                    </p>

                </div>

            </section>

        </>

    );

}

export default BookingPolicy;
