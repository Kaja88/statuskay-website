import { useTranslation } from "react-i18next";
import { Link, Navigate, useOutletContext, useParams } from "react-router-dom";

import PageBanner from "../../components/PageBanner/PageBanner";

import { useDocumentHead } from "../../hooks/useDocumentHead";
import { useStructuredData } from "../../hooks/useStructuredData";
import { buildPath } from "../../config/routes";
import { getPostBySlug } from "../../content/blogPosts";

import blogVideo from "../../assets/videos/blog.mp4";

import "./BlogPost.css";

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

    return (

        <>

            <PageBanner
                video={blogVideo}
                eyebrow={post.date[lang]}
                title={post.title[lang]}
            />

            <section className="blog-post">

                <div className="container-small blog-post__content">

                    {post.body[lang].map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

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

                    <Link
                        to={buildPath(lang, "blog")}
                        className="button button-outline"
                    >
                        {t("blogBackLink")}
                    </Link>

                </div>

            </section>

        </>

    );

}

export default BlogPost;
