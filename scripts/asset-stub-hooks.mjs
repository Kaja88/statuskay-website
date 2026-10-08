// Node module hooks used by generate-sitemap.mjs.
//
// blogPosts.js imports images (`import x from "../assets/blog/x.jpg"`). Vite
// knows how to turn that into a URL, but plain Node does not and would crash.
// The sitemap only needs slugs and dates, so any image/video import is
// replaced with an empty string here.

const ASSET = /\.(jpe?g|png|webp|avif|gif|svg|mp4)$/i;

export async function load(url, context, nextLoad) {

    if (ASSET.test(new URL(url).pathname)) {
        return { format: "module", source: "export default \"\";", shortCircuit: true };
    }

    return nextLoad(url, context);

}
