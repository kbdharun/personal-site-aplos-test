import { defineConfig } from "vitepress";

const accent = "#9eb036"; // Change this to your accent color

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Aplós Template",
  description:
    "This is a cool template for VitePress, it has a lot of features, and it's easy to use",
  base: "/personal-site-aplos-test/",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: { // Main Theme Config
    author: "Your Name", // Change this to your name
    nav: {
      links: [
        { text: "Guide", link: "https://aplos.gxbs.me/guide/" },
        { text: "Demo", link: "/demo" },
        // To add more links, just add more objects to the array, with the text and link like so:
        // { text: "Text (The text for the link)", link: "Link" },
      ],
      git: "https://github.com/aplosdev/template", // Link to the source code of your site, if your site isn't open source, you can remove this
    },
    footer: {
      // To disable any of these, just set them to false, to enable them, set them to true
      copyright: true,
      poweredBy: true,

      // To change the text of any of these, just change the text in the quotes, if you want to disable it entirely, set show to false
      madeby: {
        show: true,
        name: "Your Name",
        link: "https://example.org/",
      },
    },
  },


  head: [
    ["meta", { name: "author", content: "Your Name" }], // Change this to your name
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: accent }], // Your theme color
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Template" }], // Change this to your site name
    [
      "meta",
      {
        name: "og:image",
        content: "https://aplos.gxbs.me/images/banner.jpg", // Change this to your image
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://aplos.gxbs.me/images/banner.jpg", // Change this to your image
      },
    ],
    ["meta", { name: "twitter:title", content: "Aplós Template" }], // Change this to your title
    [
      "meta",
      {
        name: "twitter:description",
        content: "Build an website fast, and easy", // Change this to your description
      },
    ],
    ["meta", { name: "twitter:url", content: "https://aplos.gxbs.me" }], // Change this to your domain
  ],
  sitemap: { // Change this to your domain
    hostname: "https://template.aplos.gxbs.me",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          $color-accent: ${accent};
          `,
        },
      },
    },
  },
});
