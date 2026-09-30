// Vercel runs redirects (vercel.json) before this middleware, so any old
// /YYYY/MM/DD/slug URL that still has a real destination is already handled
// there. Anything reaching this file is a dead WordPress-era permalink —
// serve a real 410 instead of letting the SPA fall through to a 200 + noindex
// "Page Not Found" screen, so Google drops it from the index for good.

// The date check lives here rather than in the matcher: regex groups in the
// matcher pattern made Vercel reject the whole deployment.
const deadDateUrl = /^\/\d{4}\/\d{2}\/\d{2}\//;

export default function middleware(request) {
    const { pathname } = new URL(request.url);

    // Not a WordPress date URL — return nothing so the request continues
    // to the site as normal.
    if (!deadDateUrl.test(pathname)) return;

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
    matcher: "/:year/:month/:day/:slug*",
};
