import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

import { routes, buildPath } from "../src/config/routes.js";
import { serviceRoutes, buildServicePath } from "../src/config/serviceRoutes.js";
import { blogPosts } from "../src/content/blogPosts.js";
import { supportedLanguages, defaultLanguage } from "../src/config/languages.js";

const SITE_URL = "https://statuskay.com";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outFile = resolve(__dirname, "../public/sitemap.xml");

const entries = [];

Object.keys(routes).forEach((key) => {

    entries.push(
        Object.fromEntries(supportedLanguages.map((lang) => [lang, buildPath(lang, key)]))
    );

});

Object.keys(serviceRoutes).forEach((key) => {

    entries.push(
        Object.fromEntries(supportedLanguages.map((lang) => [lang, buildServicePath(lang, key)]))
    );

});

blogPosts.forEach((post) => {

    entries.push(
        Object.fromEntries(
            supportedLanguages.map((lang) => [lang, `${buildPath(lang, "blog")}/${post.slug[lang]}`])
        )
    );

});

function urlBlock(alternates) {

    const links = supportedLanguages
        .map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE_URL}${alternates[lang]}" />`)
        .join("\n");

    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${alternates[defaultLanguage]}" />`;

    return supportedLanguages
        .map((lang) => (
            `  <url>\n    <loc>${SITE_URL}${alternates[lang]}</loc>\n${links}\n${xDefault}\n  </url>`
        ))
        .join("\n");

}

const body = entries.map(urlBlock).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;

writeFileSync(outFile, xml);

console.log(`sitemap.xml written with ${entries.length * supportedLanguages.length} URLs`);
