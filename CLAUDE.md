# STATUS KAY website — content rules

- When writing or editing Slovenian copy about the "fade" technique (barbering/men's service), never use the words "rez" or "rezi" (cut/cuts) to describe it. "Fade" is done with clippers, not cutting in the scissors sense — use "fade", "fade tehnika", or similar instead.

# Deploy workflow

- For visual/UI changes (layout, styling, new components), make the change locally first and get explicit confirmation from Kaja that it looks right on her own device (she can test over LAN via the machine's local IP, e.g. `http://<local-ip>:5173/...`) before committing, pushing, or deploying to production.
- Reason: a mobile nav redesign was pushed straight to production and broke visually on her phone even though it checked out in the agent's own (unreliable, often non-rendering) browser tooling — verify on a real device before shipping UI changes, not just via automated browser checks.
- This does not apply to non-visual changes (config, content text, backend-only logic) where automated checks (build success, console errors) are sufficient.

# Collaboration notes

- Kaja is a junior/beginner with JS and React. When making or explaining code changes in this repo, explain what's happening and why in plain language (not just "what" the code does, but why it's the right approach) — the way you would while walking through a change together, not a terse commit-message style summary. Don't assume familiarity with framework internals, build tooling, or web platform quirks (CSS cascade edge cases, HTTP semantics, etc.) — spell those out when they come up.
