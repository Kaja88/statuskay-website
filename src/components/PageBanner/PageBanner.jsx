import "./PageBanner.css";

function PageBanner({ eyebrow, title, intro, video }) {

    return (

        <section className="page-banner">

            <video
                autoPlay
                muted
                loop
                playsInline
            >
                <source
                    src={video}
                    type="video/mp4"
                />
            </video>

            <div className="page-banner__content container-small">

                <p className="hero__subtitle">
                    {eyebrow}
                </p>

                <h1>
                    {title}
                </h1>

                {intro && (
                    <p className="page-header__intro">
                        {intro}
                    </p>
                )}

            </div>

        </section>

    );

}

export default PageBanner;
