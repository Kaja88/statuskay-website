import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

import NewsletterForm from "./NewsletterForm";

import "./Newsletter.css";

const DISMISS_KEY = "statuskay-newsletter-popup-dismissed";
const SCROLL_TRIGGER_PX = 500;

function NewsletterPopup() {

    const { t } = useTranslation();

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        if (localStorage.getItem(DISMISS_KEY)) return;

        const handleScroll = () => {

            if (window.scrollY > SCROLL_TRIGGER_PX) {
                setVisible(true);
                window.removeEventListener("scroll", handleScroll);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const dismiss = () => {

        setVisible(false);

        localStorage.setItem(DISMISS_KEY, "1");

    };

    if (!visible) return null;

    return (

        <div className="newsletter-popup">

            <button
                type="button"
                className="newsletter-popup__close"
                onClick={dismiss}
                aria-label="Close"
            >
                <X size={16} />
            </button>

            <h4>{t("newsletterTitle")}</h4>

            <p>{t("newsletterText")}</p>

            <NewsletterForm compact />

        </div>

    );

}

export default NewsletterPopup;
