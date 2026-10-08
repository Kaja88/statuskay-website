// Node module hooks used by generate-sitemap.mjs and generate-rss.mjs.
//
// blogPosts.js imports images (`import x from "../assets/blog/x.jpg"`). Vite
// knows how to turn that into a URL, but plain Node does not and would crash.
// So any image/video import is replaced with the file's path on disk: the
// sitemap ignores it, and the RSS script uses it to copy the image.

import { fileURLToPath } from "node:url";

const ASSET = /\.(jpe?g|png|webp|avif|gif|svg|mp4)$/i;

export async function load(url, context, nextLoad) {

    if (ASSET.test(new URL(url).pathname)) {
        return {
            format: "module",
            source: `export default ${JSON.stringify(fileURLToPath(url))};`,
            shortCircuit: true
        };
    }

    return nextLoad(url, context);

}
