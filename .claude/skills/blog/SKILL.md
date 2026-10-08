---
name: blog
description: Write a new bilingual (SL/EN) STATUS KAY blog post with SEO-friendly title/excerpt, an internal link to a related existing post, a relevant compressed image, and an FAQ section — then wire it into blogPosts.js and blogSlugs.js.
---

# Writing a new STATUS KAY blog post

Use this whenever Kaja asks to add a new blog post (`/blog <topic>` or just "napiši nov blog o ..."). The goal every time is the same three things she asked for: **good SEO, a link to another article, and an image.**

## 1. Topic and category

- If no topic was given, ask what the post should be about.
- Pick one category from [blogCategories.js](../../../src/config/blogCategories.js) (`haircuts`, `nails`, `about`, `trends`). Don't invent a new category without asking first.

## 2. Pick a real related post to link to

- Open [blogSlugs.js](../../../src/content/blogSlugs.js) and pick ONE existing post that's genuinely topically related to the new one (same category or a natural follow-on read). Never invent a slug — it must already exist in that file.
- Note both its `en` and `sl` slugs — you'll need them for `relatedSlug`.

## 3. Write the bilingual content

Match the existing structure in [blogPosts.js](../../../src/content/blogPosts.js) exactly — every post there is `{ slug, category, image, relatedSlug, date, title, excerpt, body, faq }` (each text field split into `{ en, sl }`).

- **publishAt** (optional) — `publishAt: "YYYY-MM-DD"` schedules the post: it stays hidden on the live site (blog list, post URL, sitemap) until that day in Ljubljana time, but is visible in `npm run dev` and on Vercel preview links so it can be reviewed. Leave it out to publish immediately. Always set the human-readable `date` field to the same day. Logic lives in [publishing.js](../../../src/content/publishing.js); a daily GitHub Action (`.github/workflows/scheduled-posts-rebuild.yml`) redeploys on publish days so the sitemap updates.
- **Title** — specific and keyword-forward (what someone would actually search), not generic. Keep it under ~60 characters where possible so it doesn't get truncated in search results.
- **Excerpt** — one or two sentences, ~120–160 characters, written as a hook (this doubles as the meta description shown in Google and in `useDocumentHead`).
- **Body** — 4–6 short paragraphs, plain conversational language (this is what she writes in her own posts), natural keyword use — never stuff keywords or repeat the exact same phrase across paragraphs.
- **FAQ** — 3–5 question/answer pairs a real customer would search or ask in the salon. These render as an FAQPage schema block automatically (see `useStructuredData` in `BlogPost.jsx`), so keep answers factually accurate and self-contained — don't assume the reader saw the body text.
- **Content rule (CLAUDE.md):** if the post touches the "fade" haircut technique, never call it "rez"/"rezi" — always "fade" or "fade tehnika". Fade is done with clippers, not scissor-cutting.

## 4. Get and prepare the image

- If Kaja supplied a photo, use it. Otherwise pick one of her own photos, in this order:
  1. **[photo-pool/](../../../photo-pool/)** — a folder of her salon photos. View the candidates and pick the one that best fits the topic. After using it, move it to `photo-pool/used/` so it isn't reused.
  2. **Her Instagram via Metricool** — `getBrandSettings` (brand `statuskay`), then `getAnalyticsDataByMetrics` with `IGPO01` (date), `IGPO03` (caption), `IGPO05` (image URL), `IGPO06` (post URL) over the last ~12 months. Download candidates to the scratchpad with `curl` right away (the CDN URLs expire — never hotlink them) and view them. Carousels only return the first image. Many of her posts have text overlays: prefer photos without text, or crop the text off with ffmpeg `crop=`, and check the result visually.
  - Never use placeholder or stock images. If nothing fits, ask Kaja for a photo.
  - Tell Kaja which photo you picked (Instagram post link or file name) so she can swap it.
- Once you have the source file, resize/compress it the same way images were fixed earlier this project (PageSpeed flagged oversized images before): cap the longest side at **1400px** and recompress, e.g.
  ```bash
  ffmpeg -i input.jpg -vf "scale='if(gt(iw,ih),min(1400,iw),-2)':'if(gt(ih,iw),min(1400,ih),-2)'" -q:v 5 src/assets/blog/<en-slug>.jpg
  ```
- Import it at the top of `blogPosts.js` like other asset imports in the codebase, e.g. `import <name>Blog from "../assets/blog/<en-slug>.jpg";`, and set:
  ```js
  image: {
      src: <name>Blog,
      alt: { en: "...", sl: "..." }
  }
  ```
  Alt text should describe the photo, not repeat the title verbatim.

## 5. Add the entry

1. Add the full post object to [blogPosts.js](../../../src/content/blogPosts.js) (anywhere in the array — order doesn't matter).
2. Add the matching `{ en, sl }` slug pair to [blogSlugs.js](../../../src/content/blogSlugs.js) — this file is kept deliberately separate from the full content so `Layout.jsx`/`Footer.jsx` don't drag all post bodies into the main bundle; it's easy to forget and must be updated by hand every time.
3. Run `npm run build` — this also regenerates the sitemap automatically (`prebuild` script), so no separate sitemap step is needed.

## 6. Verify before shipping

A new post adds a real image and a real "Read Next" link to a live page template — that's a visible change, so follow the project's standing rule: check it locally first.

- Load the post at `http://localhost:5173/sl/blog/<sl-slug>` (and the `/en/` version) in the dev server.
- Confirm the image loads and isn't stretched/cropped oddly, the "Preberi tudi" / "Read Next" card points to the right post and title, and the FAQ accordion opens correctly.
- Ask Kaja to check it on her own phone over LAN (`http://<local-ip>:5173/...`) and get her explicit go-ahead before committing and pushing — same as any other visual change.
