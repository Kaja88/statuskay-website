// Vercel runs redirects (vercel.json) before this middleware, so any old
// /YYYY/MM/DD/slug URL that still has a real destination is already handled
// there. Anything reaching this file is a dead WordPress-era permalink —
// serve a real 410 instead of letting the SPA fall through to a 200 + noindex
// "Page Not Found" screen, so Google drops it from the index for good.
export default function middleware() {
    return new Response("Gone", {
        status: 410,
        headers: {
            "content-type": "text/plain; charset=utf-8",
            "x-robots-tag": "noindex",
            "cache-control": "public, max-age=3600",
        },
    });
}

export const config = {
    matcher: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*",
};
