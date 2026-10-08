/* global __SHOW_SCHEDULED_POSTS__ */

// Scheduled blog posts: a post with `publishAt: "YYYY-MM-DD"` stays hidden
// until that day (Ljubljana time). Posts without `publishAt` are always shown.
//
// This file has no imports on purpose, so both the React app and the Node
// sitemap script (scripts/generate-sitemap.mjs) can use it.

// Set in vite.config.js: true everywhere except the real production build on
// Vercel, so scheduled posts can still be reviewed in `npm run dev` and on
// Vercel preview links. In the Node sitemap script the constant doesn't
// exist at all, so it falls back to false (never list unpublished posts).
const showScheduled = typeof __SHOW_SCHEDULED_POSTS__ !== "undefined" && __SHOW_SCHEDULED_POSTS__;

// Today's date in Ljubljana as "YYYY-MM-DD". The "sv-SE" locale happens to
// format dates in exactly this ISO shape, which lets us compare dates as
// plain strings ("2026-10-01" < "2026-10-15").
function todayInLjubljana() {

    return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Ljubljana" }).format(new Date());

}

export function isPublished(post) {

    if (!post.publishAt || showScheduled) {
        return true;
    }

    return post.publishAt <= todayInLjubljana();

}
