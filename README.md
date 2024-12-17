# Hexnode Kiosk Solution

Hexnode Kiosk is a comprehensive solution for *kiosk management* that allows businesses to lock devices into single-app or multi-app modes. This simplifies user access and ensures efficient management of enterprise devices.

---

## 🚀 *What is Hexnode Kiosk?*

Hexnode Kiosk allows organizations to transform standard devices into *dedicated kiosks* for streamlined usage. Whether it’s for customer-facing displays, interactive kiosks, or workforce-specific tools, Hexnode ensures complete control.

Key features:
- *Single-app and multi-app mode* locking.
- Support for Android, iOS, Windows, macOS, and tvOS.
- Kiosk customization and branding options.
- Remote control and management.
- Enhanced security and data protection.

---
## 💻 *Use Cases*

Hexnode Kiosk is ideal for:
- Retail store kiosks
- Restaurant ordering systems
- Information kiosks at airports or malls
- Enterprise workforce tools
- Educational learning stations

---

Reference: Visit [Hexnode Kiosk Solution](https://www.hexnode.com/solutions/hexnode-kiosk/).

[Setup]
AppName=hexnode.com
AppVersion=18.0
command : [npx create-react-app .]

[Packages]
npm i lucide-react
npm i react-icons
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
react-router-dom

[issues i faced during the Execution]
Problem Description:
The error occurs because the Link component from react-router-dom is being used without a proper router context.
Solution:
The Link component depends on a router (like BrowserRouter or HashRouter) to provide context for routing. Without this router context, the Link component fails to function and throws an error at runtime.
Key Points:
Link is for internal navigation within a React Router setup.
For external URLs, you should use a standard <a> tag instead of Link.



