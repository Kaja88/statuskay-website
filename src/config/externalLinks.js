export const freshaBookingUrl = "https://www.fresha.com/book-now/y9qzt5m0/all-offer?share=true&pId=450986";

export const freeConsultationUrl = "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15578933&share=true&pId=450986";

// Per-service Fresha "share" links, keyed by serviceRoutes id (see serviceRoutes.js).
// A plain string books that one exact Fresha service directly.
// An array books one of several named variants (e.g. haircut length, highlights half/full head) —
// each renders its own button on the service page instead of one generic "Book now" button.
// Any id left out (or any variant missing a link) falls back to the general freshaBookingUrl above.
export const serviceBookingUrls = {

    1: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15509580&share=true&pId=450986",

    2: [
        { label: { en: "Up to 1 month of regrowth", sl: "Do 1 meseca narastka" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15500830&share=true&pId=450986" },
        { label: { en: "Two-process (over 1 month)", sl: "Dvoprocesno (nad 1 mesec)" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15500894&share=true&pId=450986" }
    ],

    6: [
        { label: { en: "Shaping, no polish", sl: "Oblikovanje brez lakiranja" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15509931&share=true&pId=450986" },
        { label: { en: "Gelish", sl: "Gelish" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15509961&share=true&pId=450986" },
        { label: { en: "Gel removal", sl: "Gel odstranjevanje" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A17079894&share=true&pId=450986" }
    ],

    4: [
        { label: { en: "Styling", sl: "Styling" }, url: freshaBookingUrl },
        { label: { en: "Blow-dry style (short)", sl: "Fen frizura (kratki)" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15465765&share=true&pId=450986" },
        { label: { en: "Blow-dry style (mid)", sl: "Fen frizura (srednji)" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15465773&share=true&pId=450986" },
        { label: { en: "Blow-dry style (long)", sl: "Fen frizura (dolgi)" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15465796&share=true&pId=450986" },
        { label: { en: "Blow-dry style (extra long)", sl: "Fen frizura (zahtevni)" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15465799&share=true&pId=450986" }
    ],

    5: [
        { label: { en: "Colour correction", sl: "Korekcija barve" }, url: freshaBookingUrl },
        { label: { en: "Free consultation", sl: "Brezplačen posvet" }, url: freeConsultationUrl }
    ],

    3: [
        { label: { en: "Short", sl: "Kratki" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15465660&share=true&pId=450986" },
        { label: { en: "Mid length (bob)", sl: "Srednji (paž)" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15465663&share=true&pId=450986" },
        { label: { en: "Long", sl: "Dolgi" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15465678&share=true&pId=450986" },
        { label: { en: "Extra long", sl: "Zahtevni" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15465710&share=true&pId=450986" },
        { label: { en: "Girls' cut", sl: "Dekliško striženje" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15509788&share=true&pId=450986" }
    ],

    7: [
        { label: { en: "Half head", sl: "Pol glave" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15509561&share=true&pId=450986" },
        { label: { en: "Full head", sl: "Cela glava" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15509548&share=true&pId=450986" }
    ],

    8: [
        { label: { en: "Fade", sl: "Fade" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15509627&share=true&pId=450986" },
        { label: { en: "Scissor cut", sl: "Striženje s škarjicami" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15509601&share=true&pId=450986" },
        { label: { en: "Beard grooming", sl: "Oblikovanje brade" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15509659&share=true&pId=450986" },
        { label: { en: "Boys' cut", sl: "Fantovsko striženje" }, url: "https://www.fresha.com/book-now/y9qzt5m0/services?lid=482898&eid=1411269&oiid=sv%3A15509774&share=true&pId=450986" }
    ]

};

export function getServiceBooking(key) {

    const entry = serviceBookingUrls[key];

    if (Array.isArray(entry)) return { variants: entry };

    return { url: entry || freshaBookingUrl };

}
