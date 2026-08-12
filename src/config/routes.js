export const routes = {

    home: {

        label: {

            en: "Home",

            sl: "Domov"

        },

        path: {

            en: "",

            sl: ""

        }

    },

    about: {

        label: {

            en: "About",

            sl: "O nas"

        },

        path: {

            en: "about",

            sl: "o-nas"

        }

    },

    services: {

        label: {

            en: "Services",

            sl: "Storitve"

        },

        path: {

            en: "services",

            sl: "storitve"

        }

    },

    blog: {

        label: {

            en: "Blog",

            sl: "Blog"

        },

        path: {

            en: "blog",

            sl: "blog"

        }

    },

    directions: {

        label: {

            en: "How to Get Here",

            sl: "Kako do nas"

        },

        path: {

            en: "directions",

            sl: "kako-do-nas"

        }

    },

    contact: {

        label: {

            en: "Contact",

            sl: "Kontakt"

        },

        path: {

            en: "contact",

            sl: "kontakt"

        }

    },

    booking: {

        label: {

            en: "Book Now",

            sl: "Rezervacija"

        },

        path: {

            en: "book",

            sl: "rezervacija"

        }

    },

    privacy: {

        label: {

            en: "Privacy Policy",

            sl: "Politika zasebnosti"

        },

        path: {

            en: "privacy-policy",

            sl: "politika-zasebnosti"

        }

    },

    bookingPolicy: {

        label: {

            en: "Booking Policy",

            sl: "Politika rezervacij"

        },

        path: {

            en: "booking-policy",

            sl: "politika-rezervacij"

        }

    }

};

export function buildPath(lang, key) {

    const slug = routes[key].path[lang];

    return slug ? `/${lang}/${slug}` : `/${lang}`;

}

export function getRouteKeyFromSlug(lang, slug) {

    return Object.keys(routes).find((key) => routes[key].path[lang] === slug) || "home";

}