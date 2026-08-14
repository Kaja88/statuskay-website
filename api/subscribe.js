function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req, res) {

    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { email } = req.body || {};

    if (!email || !isValidEmail(email)) {
        return res.status(400).json({ error: "Missing or invalid email" });
    }

    if (!process.env.MAILERLITE_API_KEY || !process.env.MAILERLITE_GROUP_ID) {
        return res.status(500).json({ error: "Newsletter service not configured" });
    }

    try {

        const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                email,
                groups: [process.env.MAILERLITE_GROUP_ID]
            })
        });

        if (!response.ok) {
            const detail = await response.text();
            console.error("MailerLite error:", detail);
            return res.status(502).json({ error: "Failed to subscribe" });
        }

        return res.status(200).json({ ok: true });

    } catch (err) {

        console.error("Subscribe error:", err);
        return res.status(500).json({ error: "Server error" });

    }

}
