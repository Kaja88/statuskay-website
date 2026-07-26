import { useState } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

import Carousel from "../Carousel/Carousel";

import { wayfindingDirections } from "../../content/wayfindingDirections";

import "./Wayfinding.css";

const imageModules = import.meta.glob(
    "../../assets/wayfinding/*/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    { eager: true, import: "default" }
);

const imagesByDirection = {};

for (const path in imageModules) {

    const match = path.match(/wayfinding\/([^/]+)\/([^/]+)$/);

    if (!match) continue;

    const [, dirId, filename] = match;

    if (!imagesByDirection[dirId]) imagesByDirection[dirId] = [];

    imagesByDirection[dirId].push({ filename, src: imageModules[path] });

}

for (const dirId in imagesByDirection) {

    imagesByDirection[dirId].sort((a, b) =>
        a.filename.localeCompare(b.filename, undefined, { numeric: true })
    );

}

const mapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Trg+osvobodilne+fronte+13,+Ljubljana";

function Wayfinding({ lang }) {

    const { t } = useTranslation();

    const [activeId, setActiveId] = useState(null);

    const active = wayfindingDirections.find((d) => d.id === activeId);

    const activeImages = active ? (imagesByDirection[active.id] || []).map((i) => i.src) : [];

    return (

        <div className="wayfinding">

            <div className="wayfinding__compass">

                {wayfindingDirections.map((dir) => (

                    <button
                        key={dir.id}
                        type="button"
                        className={`wayfinding__point wayfinding__point--${dir.id}`}
                        onClick={() => setActiveId(dir.id)}
                    >
                        <span className="wayfinding__letter">{dir.compass[lang]}</span>
                        <span className="wayfinding__label">{dir.label[lang]}</span>
                    </button>

                ))}

                <div className="wayfinding__map">

                    <iframe
                        title="STATUS KAY location"
                        src="https://www.google.com/maps?q=Trg+osvobodilne+fronte+13,+Ljubljana&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>

            </div>

            <p className="wayfinding__hint">
                {t("wayfindingHint")}
            </p>

            <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="button wayfinding__cta"
            >
                {t("wayfindingMapsCta")}
            </a>

            {active && (

                <div
                    className="wayfinding__modal"
                    onClick={() => setActiveId(null)}
                >

                    <div
                        className="wayfinding__modal-content"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <button
                            type="button"
                            className="wayfinding__close"
                            onClick={() => setActiveId(null)}
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        <h3>{active.label[lang]}</h3>

                        {activeImages.length > 0 ? (

                            <Carousel
                                images={activeImages}
                                alt={active.label[lang]}
                                arrows
                                nextLabel={t("wayfindingNext")}
                                onComplete={() => setActiveId(null)}
                            />

                        ) : (

                            <p className="wayfinding__empty">
                                {t("wayfindingComingSoon")}
                            </p>

                        )}

                    </div>

                </div>

            )}

        </div>

    );

}

export default Wayfinding;
