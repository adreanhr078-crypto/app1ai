---
name: browser-use
description: Control and inspect websites using Microsoft Playwright MCP.
---

Use Playwright MCP whenever browser interaction is required.

Capabilities:
- Open browser pages
- Navigate URLs
- Click buttons and links
- Type into fields
- Fill forms
- Scroll
- Upload files
- Take screenshots
- Inspect page accessibility tree
- Inspect DOM/CSS
- Inspect console errors
- Inspect network requests
- Debug web applications
- Verify visual changes

Rules:
- Prefer semantic/accessibility locators instead of coordinates.
- Use screenshots when the task is visually dependent.
- Verify UI changes after actions.
- Let the user manually handle passwords, MFA, CAPTCHA, passkeys, payment confirmation, and other sensitive authentication.
- Prefer Playwright over desktop automation for normal web pages.
