import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
export default defineUserConfig({
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),

    backToTopPlugin(),
  ],
  theme: defaultTheme({
    // Public 文件路径
    logo: "/images/logo.png",

    locales: {
      "/": {
        selectLanguageName: "English",

        sidebar: [
          // SidebarItem
          {
            text: "Split Token",
            link: "/en/split/",
          },
          {
            text: "Trade SOLS",
            link: "/en/trade/",
          },
          {
            text: "Composis NFT",
            link: "/en/composis/",
          },
        ],
      },
      "/zh/": {
        selectLanguageName: "简体中文",

        sidebar: [
          {
            text: "交易",
            link: "/zh/交易/",
          },
          // SidebarItem
          {
            text: "拆分代币",
            link: "/zh/拆分/",
          },
          {
            text: "合成NFT",
            link: "/zh/合成/",
          },
        ],
      },
    },
  }),
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US",
      title: "SOLS SPL-20",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "SOLS SPL-20",
    },
  },
});
