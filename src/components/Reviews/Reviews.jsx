import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { reviews } from "../../content/reviews";

import "./Reviews.css";

const GOOGLE_READ_URL = "https://g.page/r/CYfWhNu8lVgaEBM";
const GOOGLE_WRITE_URL = "https://g.page/r/CYfWhNu8lVgaEBM/review";

const SWIPE_CONFIDENCE_THRESHOLD = 8000;

const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const cardVariants = {
    enter: { opacity: 0, x: 16, filter: "blur(8px)" },
    center: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: -16, filter: "blur(8px)", pointerEvents: "none" }
};

function Reviews() {

    const { t } = useTranslation();

    const [index, setIndex] = useState(0);

    const isFirst = index === 0;

    const isLast = index === reviews.length - 1;

    const goNext = () => {
        setIndex((i) => Math.min(i + 1, reviews.length - 1));
    };

    const goPrev = () => {
        setIndex((i) => Math.max(i - 1, 0));
    };

    const handleDragEnd = (event, info) => {

        const swipe = swipePower(info.offset.x, info.velocity.x);

        if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
            goNext();
            return;
        }

        if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
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

                    <div className="reviews__viewport">

                        <AnimatePresence initial={false}>

                            <motion.div
                                className="reviews__card"
                                key={index}
                                variants={cardVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={handleDragEnd}
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

                        </AnimatePresence>

                    </div>

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
