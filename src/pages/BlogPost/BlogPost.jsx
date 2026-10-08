import { useTranslation } from "react-i18next";
import { Link, Navigate, useOutletContext, useParams } from "react-router-dom";

import PageBanner from "../../components/PageBanner/PageBanner";
import NewsletterBlock from "../../components/Newsletter/NewsletterBlock";
import NewsletterPopup from "../../components/Newsletter/NewsletterPopup";

import { useDocumentHead } from "../../hooks/useDocumentHead";
import { useStructuredData } from "../../hooks/useStructuredData";
import { buildPath } from "../../config/routes";
import { freshaBookingUrl } from "../../config/externalLinks";
import { getPostBySlug } from "../../content/blogPosts";

import blogVideo from "../../assets/videos/blog.mp4";

import "./BlogPost.css";

// Body paragraphs are plain strings, with two optional bits of markup:
// - a paragraph starting with "## " becomes a subheading
// - [label](url) inside a paragraph becomes a link. Paths starting with "/"
//   stay inside the site (React Router), anything else opens in a new tab.
const linkPattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function renderInline(text) {

    const parts = [];

    let lastIndex = 0;

    for (const match of text.matchAll(linkPattern)) {

        const [whole, label, url] = match;

        parts.push(text.slice(lastIndex, match.index));

        parts.push(
            url.startsWith("/")
                ? <Link key={match.index} to={url}>{label}</Link>
                : <a key={match.index} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
        );

        lastIndex = match.index + whole.length;

    }

    parts.push(text.slice(lastIndex));

    return parts;

}

function BlogPost() {

    const { t } = useTranslation();

    const { lang } = useOutletContext();

    const { postSlug } = useParams();

    const post = getPostBySlug(lang, postSlug);

    useDocumentHead({
        title: post ? `${post.title[lang]} | STATUS KAY` : undefined,
        description: post ? post.excerpt[lang] : undefined
    });

    useStructuredData(post?.faq ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq[lang].map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: {
                "@type": "Answer",
                text: a
            }
        }))
    } : null);

    if (!post) {
        return (
            <Navigate
                to={buildPath(lang, "blog")}
                replace
            />
        );
    }

    const relatedPost = post.relatedSlug
        ? getPostBySlug(lang, post.relatedSlug[lang])
        : null;

    return (

        <>

            <PageBanner
                video={blogVideo}
                eyebrow={post.date[lang]}
                title={post.title[lang]}
            />

            <section className="blog-post">

                <div className="container-small blog-post__content">

                    {post.image && (
                        <img
                            src={post.image.src}
                            alt={post.image.alt[lang]}
                            className="blog-post__image"
                            loading="lazy"
                        />
                    )}

                    {post.body[lang].map((paragraph, index) => (
                        paragraph.startsWith("## ")
                            ? <h2 key={index} className="blog-post__subheading">{paragraph.slice(3)}</h2>
                            : <p key={index}>{renderInline(paragraph)}</p>
                    ))}

                    {post.bookingButton && (

                        <div className="blog-post__booking">

                            <a
                                href={freshaBookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button"
                            >
                                {t("blogBookingCta")}
                            </a>

                        </div>

                    )}

                    {relatedPost && (

                        <Link
                            to={`${buildPath(lang, "blog")}/${relatedPost.slug[lang]}`}
                            className="blog-post__related"
                        >

                            <span className="blog-post__related-label">{t("blogRelatedTitle")}</span>

                            <span className="blog-post__related-title">{relatedPost.title[lang]}</span>

                        </Link>

                    )}

                    {post.faq && (

                        <div className="blog-post__faq">

                            <h2>{t("blogFaqTitle")}</h2>

                            {post.faq[lang].map(({ q, a }) => (

                                <details
                                    key={q}
                                    className="blog-post__faq-item"
                                >

                                    <summary>{q}</summary>

                                    <p>{a}</p>

                                </details>

                            ))}

                        </div>

                    )}

                    <NewsletterBlock />

                    <Link
                        to={buildPath(lang, "blog")}
                        className="button button-outline"
                    >
                        {t("blogBackLink")}
                    </Link>

                </div>

            </section>

            <NewsletterPopup />

        </>

    );

}

export default BlogPost;
