import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";

import PageBanner from "../../components/PageBanner/PageBanner";

import { buildPath } from "../../config/routes";
import { blogPosts } from "../../content/blogPosts";

import blogVideo from "../../assets/videos/blog.mp4";

import "./Blog.css";

function Blog() {

    const { t } = useTranslation();

    const { lang } = useOutletContext();

    return (

        <>

            <PageBanner
                video={blogVideo}
                eyebrow={t("blogEyebrow")}
                title={t("blogTitle")}
                intro={t("blogIntro")}
            />

            <section className="blog">

                <div className="container blog__grid">

                    {blogPosts.map((post) => (

                        <Link
                            key={post.slug[lang]}
                            to={`${buildPath(lang, "blog")}/${post.slug[lang]}`}
                            className="blog-card"
                        >

                            <p className="blog-card__date">
                                {post.date[lang]}
                            </p>

                            <h3>{post.title[lang]}</h3>

                            <p>{post.excerpt[lang]}</p>

                        </Link>

                    ))}

                </div>

            </section>

        </>

    );

}

export default Blog;
