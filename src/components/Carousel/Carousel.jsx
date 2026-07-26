import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

import "./Carousel.css";

function Carousel({ images, alt, arrows, nextLabel, onComplete }) {

    const [index, setIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const isLast = index === images.length - 1;

    const handleDotClick = (event, i) => {

        event.preventDefault();

        event.stopPropagation();

        setIndex(i);

    };

    const handleNext = (event) => {

        event.preventDefault();

        event.stopPropagation();

        if (isLast) {

            if (onComplete) onComplete();

            return;

        }

        setIndex((i) => i + 1);

    };

    const handlePrev = (event) => {

        event.preventDefault();

        event.stopPropagation();

        setIndex((i) => Math.max(0, i - 1));

    };

    return (

        <div className="carousel">

            <div className="carousel__frame">

                <img
                    src={images[index]}
                    alt={alt}
                    className="carousel__image"
                />

                {arrows && index > 0 && (
                    <button
                        type="button"
                        className="carousel__arrow carousel__arrow--prev"
                        onClick={handlePrev}
                        aria-label="Previous"
                    >
                        <ArrowLeft size={18} />
                    </button>
                )}

                {!arrows && images.length > 1 && (

                    <div className="carousel__dots">

                        {images.map((_, i) => (

                            <button
                                key={i}
                                type="button"
                                className={i === index ? "carousel__dot active" : "carousel__dot"}
                                onClick={(event) => handleDotClick(event, i)}
                                aria-label={`Slide ${i + 1}`}
                            />

                        ))}

                    </div>

                )}

            </div>

            {arrows && nextLabel && (

                <button
                    type="button"
                    className="carousel__next-pill"
                    onClick={handleNext}
                >
                    {nextLabel}
                    <ArrowRight size={16} />
                </button>

            )}

        </div>

    );

}

export default Carousel;
