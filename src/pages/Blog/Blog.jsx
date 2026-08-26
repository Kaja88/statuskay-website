import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";

import PageBanner from "../../components/PageBanner/PageBanner";

import { buildPath } from "../../config/routes";
import { blogCategories } from "../../config/blogCategories";
import { blogPosts } from "../../content/blogPosts";

import blogVideo from "../../assets/videos/blog.mp4";

import "./Blog.css";

const categoryKeys = Object.keys(blogCategories);

function Blog() {

    const { t } = useTranslation();

    const { lang } = useOutletContext();

    const [activeCategory, setActiveCategory] = useState(null);

    const visiblePosts = activeCategory
        ? blogPosts.filter((post) => post.category === activeCategory)
        : blogPosts;

    return (

        <>

            <PageBanner
                video={blogVideo}
                eyebrow={t("blogEyebrow")}
                title={t("blogTitle")}
                intro={t("blogIntro")}
            />

            <section className="blog">

                <div className="container">

                    <div className="blog__categories">

                        <button
                            type="button"
                            className={activeCategory === null ? "blog__category active" : "blog__category"}
                            onClick={() => setActiveCategory(null)}
                        >
                            {t("blogCategoryAll")}
                        </button>

                        {categoryKeys.map((key) => (

                            <button
                                key={key}
                                type="button"
                                className={activeCategory === key ? "blog__category active" : "blog__category"}
                                onClick={() => setActiveCategory(key)}
                            >
                                {blogCategories[key][lang]}
                            </button>

                        ))}

                    </div>

                    <div className="blog__grid">

                        {visiblePosts.map((post) => (

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

                </div>

            </section>

        </>

    );

}

export default Blog;
