import idc from "../assets/idc.webp";
import gartner from "../assets/gartner.webp";
import forrester from "../assets/forrester.webp";

import singleApp from "../assets/single-app-kios-image.webp";
import multiApp from "../assets/multi-app-kiosk-image.webp";
import webbased from "../assets/web-based-kiosk-image.webp";
import digital from "../assets/digital-signage-kiosk-image.webp";
import asam from "../assets/asam-kiosk-image.webp";

import image1 from "../assets/effortless-kiosk-deployement-image.webp";
import image2 from "../assets/customized-interface-image.webp";
import image3 from "../assets/power-up-protection-image.webp";
import image4 from "../assets/secure-app-ecosystem.webp";
import image5 from "../assets/easy-to-use-interface-image.webp";

import android from "../assets/android.svg";
import windows from "../assets/windows.svg";
import ios from "../assets/ios.svg";
import apple from "../assets/android-tv.svg";
import tv from "../assets/apple-tv.svg";
import fire from "../assets/amazon-fire.webp";
// HeroSection.js
export const InfoGrid = [
  {
    id: 1,
    imageSrc: idc,
    altText: "IDC Report",
    description:
      "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
    isBordered: true,
    Link: "https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/",
  },

  {
    id: 2,
    imageSrc: gartner,
    altText: "Gartner Report",
    description:
      "Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.",
    isBordered: true,
    Link: "https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/",
  },
  {
    id: 3,
    imageSrc: forrester,
    altText: "Forrester Report",
    description:
      "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
    isBordered: false,
    Link: " https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/",
  },
];

// UseCases.js
export const useCasestabContent = [
  {
    id: 1,
    title: "Single App Kiosk",
    image: singleApp,
    subheading: "Powerful Single-App Kiosk solutions for enhanced control",
    content: [
      "Provision the devices to run one specialized application, with limited functionalities.",

      "Customize the device settings to cater to a specific use-case each time.",

      "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",

      "Empower your administrators with full control over the kiosk devices.",
    ],
  },
  {
    id: 2,
    title: "Multi-App Kiosk",
    image: multiApp,
    subheading: "Elevate efficiency with Multi-App Kiosk",
    content: [
      " Limit device access to approved apps, ensuring focus and productivity.",

      "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",

      "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",

      "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
    ],
  },
  {
    id: 3,
    title: " Web-based Kiosk",
    image: webbased,
    subheading: "Explore the new way to manage web apps and websites",
    content: [
      "Let users access essential and approved web apps, website and files only.",

      "Make the best use of website kiosk with Hexnode's advanced settings.",

      "Tailor your experience to match your unique use case.",

      "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
    ],
  },

  {
    id: 4,
    title: " Digital Signages",
    image: digital,
    subheading: "Capture attention with Digital Signage Kiosks",
    content: [
      "Transform your devices into captivating digital signage kiosks that grab attention.",

      "Engage your audience with vibrant images and seamless video streaming.",

      "Customize media files with trimming, muting, and background music.",

      "Advertise and show off your brand aesthetics to attract customers in different ways.",

      "Take control with Hexnode to reestablish your brand's presence.",
    ],
  },
  {
    id: 5,
    title: "  ASAM Kiosk",
    image: asam,
    subheading: "Unlock the power of Autonomous Single App Mode (ASAM)",
    content: [
      "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",

      "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",

      "Create focused, efficient and secure digital environments to match your requirements.",

      "Configure ASAM effortlessly and elevate your user experience like never before.",
    ],
  },
];

//  OfferSection.js

export const offerSection = [
  {
    id: 1,
    title: "Effortless kiosk deployment & management",
    paragraph:
      "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
    image: image1,
    absolute: "Zero touch kiosk",
    link: "TRY FOR FREE ",
  },
  {
    id: 2,
    title: "Customized interface for brand visibility",
    paragraph:
      "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    image: image2,
    absolute: "Brand Visibility",
    link: "TRY FOR FREE ",
  },
  {
    id: 3,
    title: "What more can you do with Hexnode kiosk?",
    paragraph:
      "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
    image: image3,
    absolute: "Data Security",
    link: "TRY FOR FREE ",
  },
  {
    id: 4,
    title: "Secure and update your app ecosystem",
    paragraph:
      "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
    image: image4,
    absolute: "App Management",
    link: "TRY FOR FREE ",
  },
  {
    id: 5,
    title: "Provide an easy-to-use interface for end-users",
    paragraph:
      "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
    image: image5,
    absolute: "Easy to use interface",
    link: "TRY FOR FREE ",
  },
];

//  PlatformSupported.js

export const platform = [
  {
    id: 1,
    image: android,
  },
  {
    id: 2,
    image: windows,
  },
  {
    id: 3,
    image: ios,
  },
  {
    id: 4,
    image: apple,
  },
  {
    id: 5,
    image: tv,
  },
  {
    id: 6,
    image: fire,
  },
];
