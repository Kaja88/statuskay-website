import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { useHreflang } from "../../hooks/useHreflang";
import { useStructuredData } from "../../hooks/useStructuredData";
import { useDocumentHead } from "../../hooks/useDocumentHead";

import { routes, buildPath, getRouteKeyFromSlug } from "../../config/routes";
import { buildServicePath, getServiceKeyFromSlug } from "../../config/serviceRoutes";
import { blogPosts } from "../../content/blogPosts";
import { defaultLanguage, supportedLanguages } from "../../config/languages";

import "./Layout.css";

// Static routes manage their own title/description here; service detail and
// blog post pages set a more specific one themselves via useDocumentHead,
// so this map is intentionally left without entries for those two.
const staticMetaKeys = {
    home: { title: "heroSubtitle", description: "homeSeoDescription" },
    about: { title: "aboutPageTitle", description: "aboutIntro" },
    services: { title: "servicesPageTitle", description: "servicesPageIntro" },
    blog: { title: "blogTitle", description: "blogIntro" },
    directions: { title: "directionsTitle", description: "directionsIntro" },
    contact: { title: "contactPageTitle", description: "contactPageIntro" },
    booking: { title: "bookingPageTitle", description: "bookingIntro" },
    privacy: { title: "privacyPageTitle", description: null }
};

function resolveRoute(lang, pathname) {

    const rest = pathname.slice(`/${lang}`.length).replace(/^\/+/, "");

    const servicesSlug = routes.services.path[lang];
    const blogSlug = routes.blog.path[lang];

    if (rest.startsWith(`${servicesSlug}/`)) {

        const slug = rest.slice(servicesSlug.length + 1);
        const key = getServiceKeyFromSlug(lang, slug);

        if (key) return { type: "service", key };

    }

    if (rest.startsWith(`${blogSlug}/`)) {

        const slug = rest.slice(blogSlug.length + 1);
        const post = blogPosts.find((p) => p.slug[lang] === slug);

        if (post) return { type: "blog", post };

    }

    return { type: "static", key: getRouteKeyFromSlug(lang, rest) };

}

function getAlternates(route) {

    if (route.type === "service") {
        return Object.fromEntries(
            supportedLanguages.map((l) => [l, buildServicePath(l, route.key)])
        );
    }

    if (route.type === "blog") {
        return Object.fromEntries(
            supportedLanguages.map((l) => [l, `${buildPath(l, "blog")}/${route.post.slug[l]}`])
        );
    }

    return Object.fromEntries(
        supportedLanguages.map((l) => [l, buildPath(l, route.key)])
    );

}

function getStaticMeta(t, route) {

    if (route.type !== "static") return {};

    const meta = staticMetaKeys[route.key];

    if (!meta) return {};

    return {
        title: route.key === "home" ? `STATUS KAY | ${t(meta.title)}` : `${t(meta.title)} | STATUS KAY`,
        description: meta.description ? t(meta.description) : undefined
    };

}

const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "STATUS KAY",
    telephone: "+38641510780",
    email: "statuskay@gmail.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Trg osvobodilne fronte 13",
        postalCode: "1000",
        addressLocality: "Ljubljana",
        addressCountry: "SI"
    }
};

function Layout({ lang }) {

    const { t, i18n } = useTranslation();
    const location = useLocation();

    useEffect(() => {

        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }

        document.documentElement.lang = lang;

    }, [lang, i18n]);

    const route = useMemo(
        () => resolveRoute(lang, location.pathname),
        [lang, location.pathname]
    );

    const alternates = useMemo(
        () => getAlternates(route),
        [route]
    );

    useHreflang(alternates, lang, defaultLanguage);

    const { title, description } = getStaticMeta(t, route);

    useDocumentHead({ title, description });

    const structuredData = useMemo(() => ({
        ...localBusinessData,
        url: window.location.origin
    }), []);

    useStructuredData(structuredData);

    return (

        <>

            <Navbar lang={lang} />

            <main>

                <Outlet context={{ lang }} />

            </main>

            <Footer lang={lang} />

        </>

    );

}

export default Layout;
