import { text } from "stream/consumers";
import { defineConfig } from "vitepress";

const accent = "#FCA6D1"; // Change this line to use a different accent color

// Checkout https://vitepress.dev/reference/site-config to know more about the syntax
export default defineConfig({
  lang: "en-US",
  title: "Dharun Krishna K B",
  description:
    "Developer, Writer, Open-source Enthusiast, CS Undergrad.",
  base: "/personal-site-aplos-test/",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: { // Main Theme Config
    author: "Dharun Krishna K B",
    nav: {
      links: [
        { text: "Find Me", link: "findme" },
        { text: "Blog", link: "https://blog.kbdharun.dev"},
        { text: "Projects", link: "projects" }
      ],
      git: "https://github.com/kbdharun/kbdharun.github.io", // Link to the source code
      rss: "https://blog.kbdharun.dev/rss.xml" // Link to the blog's RSS feed
    },
    footer: {
      copyright: true,
      poweredBy: true,

      message: "Improving the current generation's technologies and making it accessible to all 🚀",

      copyleft: {
        show: false,
        license: "MIT License",
        info: "https://github.com/kbdharun/kbdharun.github.io/LICENSE.txt",
      },

      madeby: {
        show: false,
        name: "Dharun Krishna K B",
        link: "https://kbdharun.dev/",
      },
    },
  },

  markdown: {
    container: {
      warningLabel: "⚠ Warning",
      tipLabel: "Tip",
      dangerLabel: "⚠ Danger",
      infoLabel: "Info",
    },
  },
  head: [
    ["meta", { name: "author", content: "Dharun Krishna K B" }],
    ["link", { rel: "icon", href: "favicon.ico" }],
    ["link", { rel: "me", href: "https://mastodon.social/@kbdharunkrishna" }],
    ["link", { rel: "me", href: "https://fosstodon.org/@kbdharun" }],
    ["meta", { name: "theme-color", content: accent }], // Custom theme color (defined above)
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Dharun Krishna K B" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Developer, Writer, Open-source Enthusiast, CS Undergrad.",
      },
    ],
    ["meta", { name: "twitter:url", content: "https://kbdharun.dev/" }],
    ["link", { rel: "canonical", href: "https://kbdharun.dev/" }],
  ],
  sitemap: {
    hostname: "https://kbdharun.dev/",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "sass:color";
          $color-accent: ${accent};
          $color-accent-l: color.scale($color-accent, $lightness: -60%);
          $bg-color-d: color.scale($color-accent, $lightness: -86%, $saturation: -60%);
          $bg-color-l: color.scale($color-accent, $lightness: 95%, $saturation: -65%);
          $bg-color-s-d: mix($color-accent, $bg-color-d, 20%);
          `,
        },
      },
    },
  },
});
