const TO_EMAIL = "statuskay@gmail.com";

function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req, res) {

    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = req.body || {};

    if (!name || !email || !message || !isValidEmail(email)) {
        return res.status(400).json({ error: "Missing or invalid fields" });
    }

    if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({ error: "Email service not configured" });
    }

    try {

        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                from: "STATUS KAY website <onboarding@resend.dev>",
                to: TO_EMAIL,
                reply_to: email,
                subject: `Message from ${name} via statuskay.com`,
                text: `${message}\n\n— ${name} (${email})`
            })
        });

        if (!response.ok) {
            const detail = await response.text();
            console.error("Resend error:", detail);
            return res.status(502).json({ error: "Failed to send email", debug: detail });
        }

        return res.status(200).json({ ok: true });

    } catch (err) {

        console.error("Contact form error:", err);
        return res.status(500).json({ error: "Server error" });

    }

}
