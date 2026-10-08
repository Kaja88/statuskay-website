// Builds the weekly newsletter emails (one HTML file per blog post) in the
// STATUS KAY style: Slovenian first, English translation below.
//
// Run:  node newsletter/build.mjs
// Then: powershell -File newsletter/make-zips.ps1   (ZIPs for MailerLite's "Import HTML code")
//
// Emails use old-school <table> layouts and inline styles on purpose: email
// apps (Gmail, Outlook…) ignore most modern CSS, but they all understand tables.
// Images live in public/email/; make-zips.ps1 packs them into the ZIP so
// MailerLite hosts them itself.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const SITE = "https://www.statuskay.com";
const BOOKING = "https://www.fresha.com/book-now/y9qzt5m0/all-offer?share=true&pId=450986";

const emails = [
    {
        file: "2026-10-09-jesen-v-ljubljani.html",
        preheader: "Tivoli, kostanj, Odprta kuhna in nekaj večerov, ki si jih je vredno zapisati.",
        image: "jesen-v-ljubljani.jpg",
        imageAlt: "Jesenski sprehod po parku z jorkširskim terierjem",
        sl: {
            eyebrow: "Nov blog · Ljubljana",
            title: "Jesen v Ljubljani: kako preživeti oktober v mestu, ki se upočasni",
            paragraphs: [
                "Oktober je mesec, ko Ljubljana zadiha drugače. Turisti se razredčijo, na vogalih diši po kostanju, v gledališčih in dvoranah pa se začenja nova sezona.",
                "Zbrala sem svoja najljubša jesenska mesta in navade, od sprehoda na Rožnik do petkove Odprte kuhne, ki letos v Ljubljani še zadnjič diši 16., 23. in 30. oktobra."
            ],
            link: `${SITE}/sl/blog/jesen-v-ljubljani`
        },
        en: {
            eyebrow: "New on the blog · Ljubljana",
            title: "Ljubljana in October: An Autumn Guide to a City That Slows Down",
            paragraphs: [
                "October is when Ljubljana changes its rhythm. The crowds thin out, chestnut sellers appear on street corners, and the theatre and concert season begins.",
                "I've gathered my favourite autumn places and habits, from a walk up Rožnik hill to the Friday Open Kitchen food market, which has its last Ljubljana dates this year on 16, 23 and 30 October."
            ],
            link: `${SITE}/en/blog/ljubljana-in-october`
        }
    },
    {
        file: "2026-10-16-deklica-z-zlatimi-skarjami.html",
        preheader: "Pred štirinajstimi leti sem spakirala kovček, vanj položila škarje in odšla na ladje.",
        image: "deklica-z-zlatimi-skarjami.jpg",
        imageAlt: "Frizerski salon na ladji s pogledom na morje",
        sl: {
            eyebrow: "Nov blog · Moja zgodba",
            title: "Deklica z zlatimi škarjami",
            paragraphs: [
                "Pred štirinajstimi leti sem spakirala kovček, vanj položila škarje in odšla delat na ladje za križarjenja, kjer je salon le nekaj kvadratnih metrov sredi oceana.",
                "To je zgodba o tem, kaj me je naučilo življenje med pristanišči, zakaj so me klicali deklica z zlatimi škarjami in zakaj sem se na koncu vrnila v Ljubljano."
            ],
            link: `${SITE}/sl/blog/deklica-z-zlatimi-skarjami`
        },
        en: {
            eyebrow: "New on the blog · My story",
            title: "The Girl with the Golden Scissors",
            paragraphs: [
                "Fourteen years ago I packed a suitcase, tucked my scissors inside and left to work on cruise ships, where the salon is a few square metres in the middle of the ocean.",
                "This is the story of what life between ports taught me, why they called me the girl with the golden scissors, and why I finally came home to Ljubljana."
            ],
            link: `${SITE}/en/blog/girl-with-the-golden-scissors`
        }
    },
    {
        file: "2026-10-23-jesensko-izpadanje-las.html",
        preheader: "Sezonsko izpadanje je pogosto in običajno začasno. Takole lasem pomagaš.",
        image: "jesensko-izpadanje-las.jpg",
        imageAlt: "Dolgi rjavi lasje s suhimi konicami po poletju",
        sl: {
            eyebrow: "Nov blog · Nega las",
            title: "Jesensko izpadanje las: zakaj se zgodi in kaj pomaga",
            paragraphs: [
                "Če to jesen opažaš več las na krtači ali blazini, nisi edina. Sezonsko izpadanje je pogosto in običajno začasno.",
                "V blogu razložim, zakaj se zgodi ravno septembra in oktobra, kaj od tega je v resnici lomljenje las in katere preproste navade naredijo največjo razliko."
            ],
            link: `${SITE}/sl/blog/jesensko-izpadanje-las`
        },
        en: {
            eyebrow: "New on the blog · Hair care",
            title: "Autumn Hair Loss: Why It Happens and What Helps",
            paragraphs: [
                "Noticing more hair in your brush or on your pillow this autumn? You're not alone. Seasonal shedding is common and usually temporary.",
                "In the blog I explain why it happens in September and October, how much of it is actually breakage, and which simple habits make the biggest difference."
            ],
            link: `${SITE}/en/blog/autumn-hair-loss`
        }
    }
];

const C = {
    page: "#efe9e1",
    card: "#f8f6f3",
    ink: "#2a2420",
    text: "#4a423c",
    muted: "#8a7f76",
    gold: "#b58a52",
    line: "#e4dccf"
};

const serif = "Georgia, 'Times New Roman', serif";

function button(href, label, filled) {

    const style = filled
        ? `background:${C.ink};color:#ffffff;border:1px solid ${C.ink};`
        : `background:transparent;color:${C.ink};border:1px solid ${C.ink};`;

    return `<a href="${href}" target="_blank" style="${style}display:inline-block;padding:14px 34px;font-family:${serif};font-size:15px;letter-spacing:1px;text-decoration:none;">${label}</a>`;

}

const divider = `<tr><td style="padding:0 40px;"><div style="border-top:1px solid ${C.line};height:1px;line-height:1px;font-size:1px;">&nbsp;</div></td></tr>`;

// One language block: small gold label, title, paragraphs, "read" button.
// The English block is a little smaller so the Slovenian one stays the main read.
function section(content, buttonLabel, { titleSize, textSize, top }) {

    const paragraphs = content.paragraphs
        .map((text) => `<p style="margin:0 0 16px 0;font-family:${serif};font-size:${textSize}px;line-height:1.65;color:${C.text};">${text}</p>`)
        .join("\n");

    return `
    <tr><td style="padding:${top}px 40px 8px 40px;">
      <p style="margin:0 0 12px 0;font-family:${serif};font-size:12px;letter-spacing:3px;text-transform:uppercase;color:${C.gold};">${content.eyebrow}</p>
      <h2 style="margin:0 0 20px 0;font-family:${serif};font-size:${titleSize}px;line-height:1.25;font-weight:normal;color:${C.ink};">${content.title}</h2>
${paragraphs}
    </td></tr>
    <tr><td align="center" style="padding:12px 40px 36px 40px;">
      ${button(content.link, buttonLabel, true)}
    </td></tr>`;

}

function render(email) {

    return `<!DOCTYPE html>
<html lang="sl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>${email.sl.title}</title>
</head>
<body style="margin:0;padding:0;background:${C.page};">

<!-- Preheader: the grey preview line next to the subject in the inbox. Hidden in the email itself. -->
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${email.preheader}</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.page};">
<tr><td align="center" style="padding:32px 12px;">

  <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:${C.card};">

    <!-- Wordmark -->
    <tr><td align="center" style="padding:34px 24px 30px 24px;">
      <a href="${SITE}/sl" target="_blank" style="font-family:${serif};font-size:22px;letter-spacing:6px;color:${C.ink};text-decoration:none;">STATUS KAY</a>
    </td></tr>

    <!-- Image -->
    <tr><td style="padding:0;">
      <a href="${email.sl.link}" target="_blank"><img src="${SITE}/email/${email.image}" width="600" alt="${email.imageAlt}" style="display:block;width:100%;max-width:600px;height:auto;border:0;"></a>
    </td></tr>

    <!-- Slovenian -->
${section(email.sl, "Preberi blog", { titleSize: 28, textSize: 17, top: 36 })}

    <!-- English -->
    ${divider}
    <tr><td align="center" style="padding:24px 40px 0 40px;font-family:${serif};font-size:12px;letter-spacing:3px;text-transform:uppercase;color:${C.muted};">
      In English
    </td></tr>
${section(email.en, "Read the blog", { titleSize: 22, textSize: 15, top: 20 })}

    <!-- Booking -->
    ${divider}
    <tr><td align="center" style="padding:32px 40px 8px 40px;font-family:${serif};font-size:20px;font-style:italic;color:${C.ink};">
      Calm is the new luxury.
    </td></tr>
    <tr><td align="center" style="padding:0 40px 8px 40px;font-family:${serif};font-size:15px;line-height:1.6;color:${C.text};">
      Ko boš pripravljena na trenutek zase, te z veseljem sprejmem.<br>
      <span style="color:${C.muted};font-size:14px;">Whenever you're ready for some time for yourself, I'd love to welcome you.</span><br>Kaja
    </td></tr>
    <tr><td align="center" style="padding:16px 40px 40px 40px;">
      ${button(BOOKING, "Naroči se · Book now", false)}
    </td></tr>

    <!-- Footer -->
    <tr><td align="center" style="background:${C.ink};padding:28px 32px;font-family:${serif};font-size:13px;line-height:1.7;color:#d9cfc2;">
      STATUS KAY · Trg OF 13, 1000 Ljubljana<br>
      <a href="https://www.instagram.com/statuskay" target="_blank" style="color:#d9cfc2;">Instagram</a> &nbsp;·&nbsp;
      <a href="https://www.tiktok.com/@statuskay" target="_blank" style="color:#d9cfc2;">TikTok</a> &nbsp;·&nbsp;
      <a href="${SITE}/sl" target="_blank" style="color:#d9cfc2;">statuskay.com</a><br>
      <span style="font-size:12px;color:${C.muted};">To sporočilo prejemaš, ker si se naročila na novice STATUS KAY. · You're receiving this because you subscribed to STATUS KAY news.<br>
      <a href="{$unsubscribe}" style="color:${C.muted};">Odjava · Unsubscribe</a></span>
    </td></tr>

  </table>

</td></tr>
</table>

</body>
</html>
`;

}

const dir = dirname(fileURLToPath(import.meta.url));

emails.forEach((email) => {
    writeFileSync(resolve(dir, email.file), render(email));
    console.log("written", email.file);
});
