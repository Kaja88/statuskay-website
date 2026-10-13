import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./VideoEmbed.css";

// Shows a YouTube video inside the page.
//
// Until the visitor clicks play, only YouTube's thumbnail image is shown.
// The real YouTube player (which is heavy and sets cookies) loads only after
// the click, so the blog opens fast and nothing is tracked without consent.
//
// - id:       the part of the YouTube link after "watch?v=" / "shorts/" / "youtu.be/"
// - title:    short description, read out by screen readers
// - vertical: true for Shorts (9:16), false for normal wide videos (16:9)
function VideoEmbed({ id, title, vertical = false }) {

    const { t } = useTranslation();

    const [playing, setPlaying] = useState(false);

    const className = `video-embed${vertical ? " video-embed--vertical" : ""}`;

    return (

        <figure className={className}>

            <div className="video-embed__frame">

                {playing ? (

                    // youtube-nocookie.com is YouTube's own privacy-friendly address.
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
                        title={title}
                        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                        allowFullScreen
                    />

                ) : (

                    <button
                        type="button"
                        className="video-embed__poster"
                        onClick={() => setPlaying(true)}
                        aria-label={`${t("videoPlay")}: ${title}`}
                    >

                        <img
                            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                            alt=""
                            loading="lazy"
                        />

                        <span className="video-embed__play" aria-hidden="true" />

                    </button>

                )}

            </div>

        </figure>

    );

}

export default VideoEmbed;
