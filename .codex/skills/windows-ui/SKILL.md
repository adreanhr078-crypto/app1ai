---
name: windows-ui
description: Control and inspect native Windows applications using Microsoft WinApp CLI.
---

WinApp executable:

C:\\Users\\yasmo\\.local\\codex-computer-use\\winapp\\winapp.exe

Use WinApp for Windows desktop UI automation.

Capabilities:
- Find application windows
- Inspect UI controls
- Click buttons
- Invoke controls
- Type text
- Send keys
- Scroll
- Drag
- Inspect text
- Take screenshots
- Interact with Win32/WPF/WinForms/WinUI/Electron apps

Prefer structured Windows UI Automation over raw coordinate clicks.

Use normal PowerShell Start-Process when an application needs to be launched.

Do not attempt to automate:
- UAC secure desktop
- Windows lock screen
- passwords
- MFA
- CAPTCHA
- passkeys
- protected credential prompts

For websites, prefer Playwright MCP.
