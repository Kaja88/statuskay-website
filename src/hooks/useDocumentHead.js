import { useEffect } from "react";

function setMeta(name, property, content) {

    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;

    const el = document.head.querySelector(selector);

    if (el) el.setAttribute("content", content);

}

export function useDocumentHead({ title, description }) {

    useEffect(() => {

        if (title) {

            document.title = title;

            setMeta(null, "og:title", title);

        }

        if (description) {

            setMeta("description", null, description);

            setMeta(null, "og:description", description);

        }

    }, [title, description]);

}
