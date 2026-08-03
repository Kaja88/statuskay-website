import { routes } from "./routes.js";

export const serviceRoutes = {

    1: {
        slug: { en: "balayage", sl: "balayage" }
    },

    2: {
        slug: { en: "blonding", sl: "blondiranje" }
    },

    3: {
        slug: { en: "haircuts", sl: "strizenje-las" }
    },

    4: {
        slug: { en: "styling", sl: "styling" }
    },

    5: {
        slug: { en: "color-correction", sl: "korekcija-barve" }
    },

    6: {
        slug: { en: "nails", sl: "manikura" }
    },

    7: {
        slug: { en: "highlights", sl: "pramena" }
    },

    8: {
        slug: { en: "barbering", sl: "moski-frizer" }
    },

    9: {
        slug: { en: "toning", sl: "toniranje" }
    }

};

export function buildServicePath(lang, key) {

    return `/${lang}/${routes.services.path[lang]}/${serviceRoutes[key].slug[lang]}`;

}

export function getServiceKeyFromSlug(lang, slug) {

    return Object.keys(serviceRoutes).find((key) => serviceRoutes[key].slug[lang] === slug);

}
