import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { reviews } from "../../content/reviews";

import "./Reviews.css";

const GOOGLE_READ_URL = "https://g.page/r/CYfWhNu8lVgaEBM";
const GOOGLE_WRITE_URL = "https://g.page/r/CYfWhNu8lVgaEBM/review";

const SWIPE_THRESHOLD = 80;

function Reviews() {

    const { t } = useTranslation();

    const [index, setIndex] = useState(0);

    const isFirst = index === 0;

    const isLast = index === reviews.length - 1;

    const goNext = () => {
        if (isLast) return;
        setIndex((i) => i + 1);
    };

    const goPrev = () => {
        if (isFirst) return;
        setIndex((i) => i - 1);
    };

    const handleDragEnd = (event, info) => {

        if (info.offset.x > SWIPE_THRESHOLD) {
            goNext();
            return;
        }

        if (info.offset.x < -SWIPE_THRESHOLD) {
            goPrev();
        }

    };

    const review = reviews[index];

    return (

        <section
            id="reviews"
            className="reviews"
        >

            <div className="container-small">

                <div className="section-title">

                    <p className="hero__subtitle">
                        {t("reviewsSubtitle")}
                    </p>

                    <h2>
                        {t("reviewsTitle")}
                    </h2>

                </div>

                <div className="reviews__carousel">

                    <button
                        type="button"
                        className="reviews__arrow reviews__arrow--prev"
                        onClick={goPrev}
                        disabled={isFirst}
                        aria-label="Previous review"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <motion.div
                        className="reviews__card"
                        key={index}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.3}
                        onDragEnd={handleDragEnd}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >

                        <div className="reviews__stars">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    fill="currentColor"
                                    strokeWidth={0}
                                />
                            ))}
                        </div>

                        <p className="reviews__text">
                            {review.text}
                        </p>

                        <p className="reviews__name">
                            {review.name}
                        </p>

                    </motion.div>

                    <button
                        type="button"
                        className="reviews__arrow reviews__arrow--next"
                        onClick={goNext}
                        disabled={isLast}
                        aria-label="Next review"
                    >
                        <ChevronRight size={22} />
                    </button>

                </div>

                <div className="reviews__dots">

                    {reviews.map((_, i) => (

                        <button
                            key={i}
                            type="button"
                            className={i === index ? "reviews__dot active" : "reviews__dot"}
                            onClick={() => setIndex(i)}
                            aria-label={`Review ${i + 1}`}
                        />

                    ))}

                </div>

                <div className="reviews__actions">

                    <a
                        href={GOOGLE_READ_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-outline"
                    >
                        {t("reviewsReadAllCta")}
                    </a>

                    <a
                        href={GOOGLE_WRITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-outline"
                    >
                        {t("reviewsWriteCta")}
                    </a>

                </div>

            </div>

        </section>

    );

}

export default Reviews;
