// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "Tanguy Frageul";
export const SITE_TITLE = "Tanguy Frageul's portoflio";
export const SITE_DESCRIPTION = "A blog template";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Tanguy Frageul";
export const USER_SITE = "https://tanguy-fgl.github.io"
export const USER_AVATAR = "https://avatars.githubusercontent.com/u/44116544";

// Server and transition settings
export const SERVER_URL = "https://tanguy-fgl.github.io";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "About", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "Tech blogs",
        href: "/blog/categories/tech",
        svg: "cube",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "Life blogs",
        href: "/blog/categories/life",
        svg: "heart",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "Project",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "Friend",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "Contact",
    href: "mailto:tanguy@beestech.fr", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://paypal.me/tanguyfgl",
    ariaLabel: "Support my work",
    title: "Support my work",
    svg: "support",
  },
  {
    href: "https://github.com/tanguy-fgl",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://linkedin.com/in/tanguy-frageul",
    ariaLabel: "LinkedIn",
    title: "LinkedIn",
    svg: "linkedin",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];
