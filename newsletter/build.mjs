// Builds the weekly newsletter emails (one HTML file per blog post) in the
// STATUS KAY style. Paste a generated file into MailerLite's Custom HTML editor.
//
// Run:  node newsletter/build.mjs
//
// Emails use old-school <table> layouts and inline styles on purpose: email
// apps (Gmail, Outlook…) ignore most modern CSS, but they all understand tables.
// Images must be on the live site (public/email/), because an email can only
// load pictures from a public web address.

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
        eyebrow: "Nov blog · Ljubljana",
        title: "Jesen v Ljubljani: kako preživeti oktober v mestu, ki se upočasni",
        paragraphs: [
            "Oktober je mesec, ko Ljubljana zadiha drugače. Turisti se razredčijo, na vogalih diši po kostanju, v gledališčih in dvoranah pa se začenja nova sezona.",
            "Zbrala sem svoja najljubša jesenska mesta in navade, od sprehoda na Rožnik do petkove Odprte kuhne, ki letos v Ljubljani še zadnjič diši 16., 23. in 30. oktobra."
        ],
        link: `${SITE}/sl/blog/jesen-v-ljubljani`
    },
    {
        file: "2026-10-16-deklica-z-zlatimi-skarjami.html",
        preheader: "Pred štirinajstimi leti sem spakirala kovček, vanj položila škarje in odšla na ladje.",
        image: "deklica-z-zlatimi-skarjami.jpg",
        imageAlt: "Frizerski salon na ladji s pogledom na morje",
        eyebrow: "Nov blog · Moja zgodba",
        title: "Deklica z zlatimi škarjami",
        paragraphs: [
            "Pred štirinajstimi leti sem spakirala kovček, vanj položila škarje in odšla delat na ladje za križarjenja, kjer je salon le nekaj kvadratnih metrov sredi oceana.",
            "To je zgodba o tem, kaj me je naučilo življenje med pristanišči, zakaj so me klicali deklica z zlatimi škarjami in zakaj sem se na koncu vrnila v Ljubljano."
        ],
        link: `${SITE}/sl/blog/deklica-z-zlatimi-skarjami`
    },
    {
        file: "2026-10-23-jesensko-izpadanje-las.html",
        preheader: "Sezonsko izpadanje je pogosto in običajno začasno. Takole lasem pomagaš.",
        image: "jesensko-izpadanje-las.jpg",
        imageAlt: "Dolgi rjavi lasje s suhimi konicami po poletju",
        eyebrow: "Nov blog · Nega las",
        title: "Jesensko izpadanje las: zakaj se zgodi in kaj pomaga",
        paragraphs: [
            "Če to jesen opažaš več las na krtači ali blazini, nisi edina. Sezonsko izpadanje je pogosto in običajno začasno.",
            "V blogu razložim, zakaj se zgodi ravno septembra in oktobra, kaj od tega je v resnici lomljenje las in katere preproste navade naredijo največjo razliko."
        ],
        link: `${SITE}/sl/blog/jesensko-izpadanje-las`
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

function render(email) {

    const paragraphs = email.paragraphs
        .map((text) => `<p style="margin:0 0 16px 0;font-family:${serif};font-size:17px;line-height:1.65;color:${C.text};">${text}</p>`)
        .join("\n");

    return `<!DOCTYPE html>
<html lang="sl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>${email.title}</title>
</head>
<body style="margin:0;padding:0;background:${C.page};">

<!-- Preheader: the grey preview line next to the subject in the inbox. Hidden in the email itself. -->
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${email.preheader}</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.page};">
<tr><td align="center" style="padding:32px 12px;">

  <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:${C.card};">

    <!-- Logo -->
    <tr><td align="center" style="padding:36px 24px 8px 24px;">
      <a href="${SITE}/sl" target="_blank"><img src="${SITE}/email/logo.png" width="72" height="72" alt="STATUS KAY" style="display:block;border:0;"></a>
    </td></tr>
    <tr><td align="center" style="padding:0 24px 28px 24px;font-family:${serif};font-size:13px;letter-spacing:4px;color:${C.ink};">
      STATUS KAY
    </td></tr>

    <!-- Image -->
    <tr><td style="padding:0;">
      <a href="${email.link}" target="_blank"><img src="${SITE}/email/${email.image}" width="600" alt="${email.imageAlt}" style="display:block;width:100%;max-width:600px;height:auto;border:0;"></a>
    </td></tr>

    <!-- Text -->
    <tr><td style="padding:36px 40px 8px 40px;">
      <p style="margin:0 0 12px 0;font-family:${serif};font-size:12px;letter-spacing:3px;text-transform:uppercase;color:${C.gold};">${email.eyebrow}</p>
      <h1 style="margin:0 0 22px 0;font-family:${serif};font-size:28px;line-height:1.25;font-weight:normal;color:${C.ink};">${email.title}</h1>
${paragraphs}
    </td></tr>

    <tr><td align="center" style="padding:12px 40px 36px 40px;">
      ${button(email.link, "Preberi blog", true)}
    </td></tr>

    <!-- Divider + booking -->
    <tr><td style="padding:0 40px;"><div style="border-top:1px solid ${C.line};height:1px;line-height:1px;font-size:1px;">&nbsp;</div></td></tr>
    <tr><td align="center" style="padding:32px 40px 8px 40px;font-family:${serif};font-size:20px;font-style:italic;color:${C.ink};">
      Calm is the new luxury.
    </td></tr>
    <tr><td align="center" style="padding:0 40px 8px 40px;font-family:${serif};font-size:15px;line-height:1.6;color:${C.text};">
      Ko boš pripravljena na trenutek zase, te z veseljem sprejmem.<br>Kaja
    </td></tr>
    <tr><td align="center" style="padding:16px 40px 40px 40px;">
      ${button(BOOKING, "Naroči se", false)}
    </td></tr>

    <!-- Footer -->
    <tr><td align="center" style="background:${C.ink};padding:28px 32px;font-family:${serif};font-size:13px;line-height:1.7;color:#d9cfc2;">
      STATUS KAY · Trg OF 13, 1000 Ljubljana<br>
      <a href="https://www.instagram.com/statuskay" target="_blank" style="color:#d9cfc2;">Instagram</a> &nbsp;·&nbsp;
      <a href="https://www.tiktok.com/@statuskay" target="_blank" style="color:#d9cfc2;">TikTok</a> &nbsp;·&nbsp;
      <a href="${SITE}/sl" target="_blank" style="color:#d9cfc2;">statuskay.com</a><br>
      <span style="font-size:12px;color:${C.muted};">To sporočilo prejemaš, ker si se naročila na novice STATUS KAY.
      <a href="{$unsubscribe}" style="color:${C.muted};">Odjava</a></span>
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
