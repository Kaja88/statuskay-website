import { useEffect } from "react";

export function useHreflang(alternates, currentLang, defaultLang) {

    useEffect(() => {

        if (!alternates) return undefined;

        const origin = window.location.origin;
        const created = [];

        function addLink(rel, hreflang, path) {

            const link = document.createElement("link");

            link.rel = rel;

            if (hreflang) link.hreflang = hreflang;

            link.href = `${origin}${path}`;

            document.head.appendChild(link);

            created.push(link);

        }

        Object.entries(alternates).forEach(([lang, path]) => {
            addLink("alternate", lang, path);
        });

        addLink("alternate", "x-default", alternates[defaultLang]);

        addLink("canonical", null, alternates[currentLang]);

        return () => {
            created.forEach((link) => document.head.removeChild(link));
        };

    }, [alternates, currentLang, defaultLang]);

}
