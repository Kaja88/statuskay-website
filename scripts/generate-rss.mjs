import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { register } from "node:module";
import { fileURLToPath } from "node:url";
import { basename, dirname, resolve } from "node:path";

import { buildPath } from "../src/config/routes.js";

// RSS feeds of the blog (/rss.xml in Slovenian, /en/rss.xml in English).
// MailerLite reads /rss.xml in an "RSS campaign" and emails new posts to
// subscribers automatically, so nobody has to send them by hand.
//
// Like the sitemap, this runs before every build and only lists posts that
// are already published (see publishing.js). Scheduled posts get into the
// feed when the daily GitHub Action rebuilds the site on their publish day.

// See asset-stub-hooks.mjs: image imports come back as the file's path on disk.
register("./asset-stub-hooks.mjs", import.meta.url);
const { getPublishedPosts } = await import("../src/content/blogPosts.js");

const SITE_URL = "https://www.statuskay.com";
const MAX_ITEMS = 20;

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "../public");

// Blog images normally get a hashed name from Vite at build time, which this
// script can't know. So the feed gets its own copies under /blog-images/
// (git-ignored, recreated on every build).
const imageDir = resolve(publicDir, "blog-images");
mkdirSync(imageDir, { recursive: true });

const feeds = {
    sl: {
        file: "rss.xml",
        title: "STATUS KAY Blog",
        description: "Nasveti za lase, nohte in življenje v Ljubljani iz butičnega frizerskega salona STATUS KAY.",
        language: "sl-SI"
    },
    en: {
        file: "en/rss.xml",
        title: "STATUS KAY Blog (English)",
        description: "Hair, nail and Ljubljana tips from STATUS KAY, a boutique hair salon in Ljubljana.",
        language: "en"
    }
};

// Escapes text so characters like & and < can't break the XML.
function escapeXml(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

}

// Body text uses "## " for subheadings and [label](url) for links (see
// BlogPost.jsx). The feed is plain text, so keep just the label.
function plainText(text) {

    return text.replace(/^## /, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

}

// publishAt ("2026-10-09") if the post has one, otherwise the English date
// ("October 9, 2026"). Morning time so feed readers sort same-day posts sensibly.
function postDate(post) {

    const day = post.publishAt || new Date(`${post.date.en} 12:00 UTC`).toISOString().slice(0, 10);

    return new Date(`${day}T06:00:00+02:00`);

}

function imageUrl(post) {

    if (!post.image?.src) {
        return null;
    }

    const name = basename(post.image.src);

    copyFileSync(post.image.src, resolve(imageDir, name));

    return `${SITE_URL}/blog-images/${encodeURIComponent(name)}`;

}

const posts = getPublishedPosts()
    .map((post) => ({ post, date: postDate(post) }))
    .filter(({ date }) => !Number.isNaN(date.getTime()))
    .sort((a, b) => b.date - a.date)
    .slice(0, MAX_ITEMS);

Object.entries(feeds).forEach(([lang, feed]) => {

    const blogUrl = `${SITE_URL}${buildPath(lang, "blog")}`;

    const items = posts.map(({ post, date }) => {

        const link = `${blogUrl}/${post.slug[lang]}`;
        const image = imageUrl(post);
        const firstParagraph = post.body[lang].find((paragraph) => !paragraph.startsWith("## "));

        const html = [
            image ? `<p><img src="${image}" alt="${escapeXml(post.image.alt[lang])}" width="600" /></p>` : "",
            `<p>${escapeXml(plainText(firstParagraph))}</p>`
        ].join("");

        return [
            "    <item>",
            `      <title>${escapeXml(post.title[lang])}</title>`,
            `      <link>${link}</link>`,
            `      <guid isPermaLink="true">${link}</guid>`,
            `      <pubDate>${date.toUTCString()}</pubDate>`,
            `      <description>${escapeXml(post.excerpt[lang])}</description>`,
            `      <content:encoded><![CDATA[${html}]]></content:encoded>`,
            image ? `      <media:content url="${image}" medium="image" />` : "",
            "    </item>"
        ].filter(Boolean).join("\n");

    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${escapeXml(feed.title)}</title>
    <link>${blogUrl}</link>
    <atom:link href="${SITE_URL}/${feed.file}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(feed.description)}</description>
    <language>${feed.language}</language>
${items.join("\n")}
  </channel>
</rss>
`;

    const outFile = resolve(publicDir, feed.file);
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, xml);

});

console.log(`rss.xml written with ${posts.length} posts per language`);
